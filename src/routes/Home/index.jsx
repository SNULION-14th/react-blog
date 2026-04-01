import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useUser } from "@/shared/context";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  //HINT: State
  const [posts, setPosts] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
    setPosts(posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
    setStoredTags(tags);
  };

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

  const searchTags = searchQuery
    ? storedTags.filter((tag) =>
        tag.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : storedTags;

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);
    setSearchQuery(value);
  };

  const handleCreatePost = async (post) => {
    const createResponse = await createPost({
      ...post,
      author: user?.username,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);
    setPosts((prev) => [newPost, ...prev]);
  };

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
            value={searchQuery}
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
        {posts.map((post) => (
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
        <div className="flex justify-center mt-10">
          <PostDialog onCreatePost={handleCreatePost} />
        </div>
      )}
    </div>
  );
}
