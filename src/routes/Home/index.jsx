import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog, Button } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useUser } from "@/shared/context";

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn, userid, username, logIn, logOut } = useUser();

  const [posts, setPosts] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchPosts();
      fetchTags();
    } else {
      setPosts([]);
      setStoredTags([]);
      setSearchTags([]);
    }
  }, [isLoggedIn]); // TODO: 나중에 post 게시되었을 때도 갱신되게

  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
    console.log("post fetch response", posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    setStoredTags(tags);
    setSearchTags(tags);
    console.log("tag fetch response", tags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    setSearchTags(
      storedTags.filter((storedTag) => storedTag.content.includes(value)),
    );
    console.log("search tag input change", value);
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);

    fetchPosts();
    fetchTags();
  };

  // TODO: 로그인한 사용자 정보를 가져와서 PostDialog에 전달하고, 게시글 작성 버튼 추가

  return (
    <div className="pb-20 pt-14">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-black">my blog</h1>
        </div>
        <div className="w-[90vw] max-w-md flex justify-center">
          <Input
            onChange={handleSearchTagInputChange}
            type="text"
            placeholder="태그로 검색하기"
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {searchTags.map((tag) => {
            return <TagBadge key={tag.id} tag={tag} />;
          })}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 my-10 lg:w-[950px] md:w-[640px] w-[320px]">
        {posts.map((post) => {
          if (
            post.tags
              .map((tag) => tag.id)
              .some((tagId) => searchTags.map((tag) => tag.id).includes(tagId))
          ) {
            return (
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
            );
          }
        })}
      </div>
      {/* TODO: 로그인한 사용자만 게시글 작성 버튼 표시 */}
      {isLoggedIn ? (
        <PostDialog
          handleCreatePost={handleCreatePost}
          author={username}
        ></PostDialog>
      ) : null}
      {/* TODO: PostDialog 컴포넌트 구현 */}
    </div>
  );
}
