import { useEffect, useState } from "react";
import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useAuth } from "@/shared/context/userContext";

export default function Home() {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useAuth();

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getTagText = (tag) => {
    if (!tag) return "";

    if (typeof tag === "string") return tag;

    if (typeof tag === "object") {
      return (
        tag.name || tag.title || tag.tagName || tag.label || tag.content || ""
      );
    }

    return String(tag);
  };

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
    console.log("first post tags:", posts[0]?.tags);
    setPosts(posts);
    setFilteredPosts(posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
    console.log("all tags:", tags);
    setStoredTags(tags);
    setSearchTags(tags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    const keyword = value.trim().toLowerCase();

    setSearchValue(value);

    if (!keyword) {
      setSearchTags(storedTags);
      setFilteredPosts(posts);
      return;
    }

    const filteredTags = storedTags.filter((tag) =>
      getTagText(tag).toLowerCase().includes(keyword),
    );
    setSearchTags(filteredTags);

    const nextFilteredPosts = posts.filter((post) =>
      post.tags?.some((tag) => getTagText(tag).toLowerCase().includes(keyword)),
    );
    setFilteredPosts(nextFilteredPosts);
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });

    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);
    console.log("new post tags:", newPost.tags);

    const nextPosts = [newPost, ...posts];
    setPosts(nextPosts);

    if (!searchValue.trim()) {
      setFilteredPosts(nextPosts);
      return;
    }

    const keyword = searchValue.trim().toLowerCase();

    const nextFilteredPosts = nextPosts.filter((post) =>
      post.tags?.some((tag) => getTagText(tag).toLowerCase().includes(keyword)),
    );

    setFilteredPosts(nextFilteredPosts);
  };

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
            onChange={handleSearchTagInputChange}
          />
        </div>

        <div className="flex mt-5 justify-center flex-wrap">
          {searchTags.map((tag) => {
            return <TagBadge key={tag.id || getTagText(tag)} tag={tag} />;
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
                navigate(`/post/${post.id}`);
              }}
            />
          </div>
        ))}
      </div>

      {isLoggedIn && (
        <div className="fixed right-8 bottom-8">
          <PostDialog author={user.username} onCreatePost={handleCreatePost} />
        </div>
      )}
    </div>
  );
}
