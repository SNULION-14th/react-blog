import { useState, useEffect } from "react";
import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";

import { useUser } from "@/shared/context/userContext"; 

export default function Home() {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useUser(); 
  const [posts, setPosts] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]); 
  const [searchInput, setSearchInput] = useState("");

  const fetchPosts = async () => {
    const fetchedPosts = await getPosts();
    setPosts(fetchedPosts); 
  };

  const fetchTags = async () => {
    const fetchedTags = await getTags();
    setStoredTags(fetchedTags);
    setSearchTags(fetchedTags); 
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    
    if (value.trim() === "") {
      setSearchTags(storedTags); 
    } else {
      const filtered = storedTags.filter((tag) => tag.content.includes(value));
      setSearchTags(filtered);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);



  const handleCreatePost = async (postData) => {
    const createResponse = await createPost({
      ...postData,
      author: user.username, 
    });
    const newPost = await getPostById(createResponse.postId);
    setPosts([...posts, newPost]); 
  };

  return (
    <div className="pb-20 pt-14 relative min-h-screen">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-black font-black">MY BLOG</h1>
        </div>
        <div className="w-[90vw] max-w-md flex justify-center">
          <Input 
            type="text" 
            placeholder="태그로 검색하기" 
            value={searchInput}
            onChange={handleSearchTagInputChange} 
          />
        </div>

        <div className="flex mt-5 justify-center flex-wrap gap-2">
          {searchTags.map((tag) => (
            <TagBadge key={tag.id} tag={tag} />
          ))}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
        {posts.map((post) => (
          <div key={post.id} className="w-full flex justify-center items-center">
            <SmallPost
              post={post}
              onClick={() => navigate(`/post/${post.id}`)}
            />
          </div>
        ))}
      </div>

      {isLoggedIn && (
        <div className="flex justify-center mt-10">
          <PostDialog onCreate={handleCreatePost} />
        </div>
      )}
    </div>
  );
}