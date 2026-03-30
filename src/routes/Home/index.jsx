import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog, Button } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useUser } from "@/shared/context";

export default function Home() {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useUser();
  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [tagSearchTerm, setTagSearchTerm] = useState("");

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
    setSearchTags(tags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);
    setTagSearchTerm(e.target.value);
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });
    console.log("create response", createResponse);
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);

    setPosts((prev) => [...prev, newPost]);
  };

  const filteredTags = searchTags.filter((tag) =>
    tag.content?.toLowerCase().includes(tagSearchTerm.toLowerCase()),
  );

  const filteredPosts = posts.filter(
    (post) =>
      !tagSearchTerm ||
      post.tags?.some((tag) =>
        tag.content?.toLowerCase().includes(tagSearchTerm.toLowerCase()),
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
      <div className="mt-10 items-center"></div>
      {isLoggedIn && (
        <PostDialog
          handleCreatePost={handleCreatePost}
          author={user?.username}
        />
      )}
    </div>
  );
}
