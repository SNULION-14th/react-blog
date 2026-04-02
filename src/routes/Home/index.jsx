import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { Button, buttonVariants } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useLogin } from "@/shared/context/userContext";

//HINT: State

export default function Home() {
  const navigate = useNavigate();
  const { user } = useLogin();

  const [posts, setPosts] = useState([]); // 게시글
  const [tags, setTags] = useState([]); // 태그 검색
  const [searchInput, setSearchInput] = useState(""); // 저장된 태그

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
    setPosts(posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
    setTags(tags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);
    setSearchInput(value);
  };

  const handleCreatePost = async (postData) => {
    if (!user) return;

    try {
      const payload = {
        title: postData.title,
        content: postData.content,
        author: user.username,
        tags: postData.tags.map((tag) => tag.content),
      };
      console.log("서버로 보내는 payload:", payload);
      const createResponse = await createPost(payload);
      const newPost = await getPostById(createResponse.postId);

      setPosts((prev) => [...prev, newPost]);
    } catch (error) {}
  };

  const filteredTags = tags.filter((tag) =>
    tag.content?.toLowerCase().includes(searchInput.toLocaleLowerCase()),
  );

  const filteredPosts = posts.filter(
    (post) =>
      !searchInput ||
      post.tags?.some((tag) =>
        tag.content?.toLowerCase().includes(searchInput.toLowerCase()),
      ),
  );

  // TODO: 로그인한 사용자 정보를 가져와서 PostDialog에 전달하고, 게시글 작성 버튼 추가

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
          {filteredTags.map((tag) => (
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
              onClick={() => navigate(`/post/${post.id}`)}
            />
          </div>
        ))}
      </div>
      {/* TODO: 로그인한 사용자만 게시글 작성 버튼 표시 */}
      {/* TODO: PostDialog 컴포넌트 구현 */}
      {user && (
        <div className="flex justify-center mt-16 mb-10">
          {/* <PostDialog onSubmit={(post) => handleCreatePost(post, user)} /> */}
          <PostDialog onSubmit={handleCreatePost} />
        </div>
      )}
    </div>
  );
}
