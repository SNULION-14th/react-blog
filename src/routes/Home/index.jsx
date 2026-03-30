import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog, Button } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { useUser } from "@/shared/context";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [posts, setPosts] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [searchTagInput, setSearchTagInput] = useState("");

  const fetchPosts = async () => {
    const fetchedPosts = await getPosts();
    console.log("post fetch response", fetchedPosts);
    setPosts(fetchedPosts);
  };

  const fetchTags = async () => {
    const fetchedTags = await getTags();
    console.log("tag fetch response", fetchedTags);
    setStoredTags(fetchedTags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    setSearchTagInput(value);
    console.log("search tag input change", value);
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);
    setPosts((prev) => [...prev, newPost]);
    setStoredTags((prev) => {
      const storedTagContents = new Set(prev.map((tag) => tag.content));
      const newTags = newPost.tags.filter((tag) => !storedTagContents.has(tag.content));

      return [...prev, ...newTags];
    });
  };

  const searchTags = useMemo(() => {
    const keyword = searchTagInput.trim();
    if (!keyword) return storedTags;

    return storedTags.filter((tag) => tag.content.includes(keyword));
  }, [searchTagInput, storedTags]);

  const filteredPosts = useMemo(() => {
    const keyword = searchTagInput.trim();
    if (!keyword) return posts;

    return posts.filter((post) =>
      post.tags.some((tag) => tag.content.includes(keyword))
    );
  }, [posts, searchTagInput]);

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

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
            value={searchTagInput}
            onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {searchTags.map((tag) => {
            return <TagBadge key={tag.id} tag={tag} />;
          })}
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
      {user ? (
        <div className="mt-12 flex justify-center">
          <PostDialog
            author={user.username}
            onCreatePost={handleCreatePost}
            triggerButton={<Button>작성</Button>}
          />
        </div>
      ) : null}
    </div>
  );
}
