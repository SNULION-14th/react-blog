import { useState, useEffect, useContext } from "react";
import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { UserContext } from "@/shared/context/userContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [posts, setPosts] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await getPosts();
      const fetchedTags = await getTags();
      setPosts(fetchedPosts || []);
      setStoredTags(fetchedTags || []);
    };
    fetchData();
  }, []);

  const displayTags =
    searchQuery.trim() === ""
      ? storedTags
      : storedTags.filter((tag) =>
          tag?.content?.toLowerCase().includes(searchQuery.toLowerCase()),
        );

  const handleSearchTagInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCreatePost = async (postData) => {
    try {
      const createResponse = await createPost({
        ...postData,
        author: user.username,
      });

      const newPost = await getPostById(createResponse.postId);

      setPosts((prev) => [...prev, newPost]);
      if (postData.tags && postData.tags.length > 0) {
        setStoredTags((prevTags) => {
          // 중복 체크
          const existingTagContents = prevTags.map((t) => t.content);

          const newTagsFromPost = postData.tags
            .filter((tagContent) => !existingTagContents.includes(tagContent))
            .map((tagContent, index) => ({
              id: `new-${Date.now()}-${index}`,
              content: tagContent,
            }));

          return [...prevTags, ...newTagsFromPost];
        });
      }
    } catch (error) {
      console.error("게시글 작성 중 오류 발생:", error);
    }
  };

  return (
    <div className="pb-20 pt-14 flex flex-col items-center">
      <div className="flex flex-col justify-center items-center mb-5 w-full">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-black font-bold">my blog</h1>
        </div>

        <div className="w-[90vw] max-w-md flex justify-center">
          <Input
            type="text"
            placeholder="태그로 검색하기"
            value={searchQuery}
            onChange={handleSearchTagInputChange}
          />
        </div>

        <div className="flex mt-5 justify-center flex-wrap gap-2 px-10 min-h-[40px] max-w-4xl">
          {displayTags.map((tag) => (
            <TagBadge key={tag.id} tag={{ ...tag, name: tag.content }} />
          ))}
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
                navigate(`/post/${post.id}`);
              }}
            />
          </div>
        ))}
      </div>

      {user && (
        <div className="mt-16 mb-10 flex justify-center w-full">
          <PostDialog onCreate={handleCreatePost} />
        </div>
      )}
    </div>
  );
}
