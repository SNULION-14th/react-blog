import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/shared/context";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchPosts = async () => {
    const postsData = await getPosts();
    console.log("post fetch response", postsData);
    setPosts(postsData);
  };

  const fetchTags = async () => {
    const tagsData = await getTags();
    console.log("tag fetch response", tagsData);
    setStoredTags(tagsData);
    setSearchTags(tagsData);
  };

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

  const handleSearchTagInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (!value.trim()) {
      setSearchTags(storedTags);
      return;
    }

    const filteredTags = storedTags.filter((tag) =>
      (tag.content || tag.name || "").includes(value),
    );
    setSearchTags(filteredTags);
  };

  const handleCreatePost = async (post) => {
    try {
      const createResponse = await createPost({
        ...post,
        author: user.username,
      });

      const [newPost, tagsData] = await Promise.all([
        getPostById(createResponse.postId),
        getTags(),
      ]);

      setPosts((prev) => [...prev, newPost]);
      setStoredTags(tagsData);
      setSearchTags(tagsData);
      setIsDialogOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredPosts = useMemo(() => {
    if (!searchInput.trim()) return posts;

    return posts.filter((post) => {
      if (!post.tags || !Array.isArray(post.tags)) return false;

      return post.tags.some((tag) => {
        const tagText =
          typeof tag === "string" ? tag : tag.content || tag.name || "";

        return tagText.includes(searchInput);
      });
    });
  }, [posts, searchInput]);

  return (
    <div className="pb-20 pt-14">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-black">my blog</h1>
        </div>

        <div className="w-[90vw] max-w-md flex justify-center">
          <Input
            type="text"
            placeholder="태그로 검색하기"
            value={searchInput}
            onChange={handleSearchTagInputChange}
          />
        </div>

        <div className="flex mt-5 justify-center flex-wrap">
          {searchTags.map((tag) => (
            <TagBadge key={tag.id} tag={tag} />
          ))}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="w-full flex justify-center items-center"
          >
            <SmallPost
              post={post}
              onClick={() => {
                console.log(post.id);
                navigate(`/post/${post.id}`);
              }}
            />
          </div>
        ))}
      </div>

      {user && (
        <>
          <div className="flex justify-center mt-10">
            <Button
              type="button"
              onClick={() => setIsDialogOpen(true)}
              className="text-black bg-white border border-gray-300"
            >
              작성
            </Button>
          </div>

          {isDialogOpen && (
            <PostDialog
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
              author={user.username}
              onSubmit={handleCreatePost}
            />
          )}
        </>
      )}
    </div>
  );
}
