import { useState, useEffect, useContext } from "react";
import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { userContext } from "@/shared/context";
import { Button } from "@/shared/components";

//HINT: State

export default function Home() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState("");
  const [storedTags, setStoredTags] = useState([]);

  const { isLoggedIn, logout, user } = useContext(userContext);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
    console.log("post fetch response", posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    setStoredTags(tags);
    console.log("tag fetch response", tags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    setSearchTags(value);
    console.log("search tag input change", value);
  };

  const handleCreatePost = async (post, author) => {
    try {
      const createResponse = await createPost({
        ...post,
        author,
      });

      const newPost = await getPostById(createResponse.postId);

      setPosts((prevPosts) => [...prevPosts, newPost]);
    } catch (error) {
      console.error("게시글 생성 에러:", error);
    }
  };

  const displayTags = storedTags.filter((tag) => {
    // tag가 객체면 tag.name을 쓰고, 그냥 문자열이면 tag를 그대로 씁니다.
    const tagName = typeof tag === "string" ? tag : tag?.content || "";
    return tagName.toLowerCase().includes(searchTags.toLowerCase());
  });

  const displayPosts = posts.filter((post) => {
    if (!searchTags) return true;
    return post.tags?.some((tag) => {
      const tagName = typeof tag === "string" ? tag : tag?.content || "";
      return tagName.toLowerCase().includes(searchTags.toLowerCase());
    });
  });
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
            value={searchTags}
            onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {displayTags.map((tag) => (
            <TagBadge key={tag.id} tag={tag} />
          ))}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
        {displayPosts.map((post) => (
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
      <div className="flex justify-center mt-20 mb-10">
        {isLoggedIn && (
          <Button onClick={() => setIsDialogOpen(true)}>작성</Button>
        )}
      </div>

      {/* TODO: PostDialog 컴포넌트 구현 */}
      {isDialogOpen && (
        <PostDialog
          isOpen={isDialogOpen}
          user={user}
          onClose={() => setIsDialogOpen(false)}
          onSubmit={handleCreatePost}
        />
      )}
    </div>
  );
}
