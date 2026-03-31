import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog, Button } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";

import { useState, useEffect } from "react";
import { useLoggedIn } from "@/shared/context"; //src 폴더 기준으로 절대 경로 (vs. 상대경로)

//HINT: State

export default function Home() {
  const navigate = useNavigate();

  //1. 로그인 정보 가져오기
  const { user, isLoggedIn } = useLoggedIn();

  //2. 변수에서 state으로 변경 (state 변경 시 리렌더링)
  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false);

  //3. 페이지가 처음 로드될 때 데이터 가져오기 (useEffect)
  useEffect(() => {
    const initData = async () => {
      try {
        const fetchedPosts = await getPosts();
        const fetchedTags = await getTags();
        setPosts(fetchedPosts);
        setStoredTags(fetchedTags);
      } catch (error) {
        console.error("데이터 로드 실패: ", error);
      }
    };

    initData();
  }, []);

  // const fetchPosts = async () => {
  //   const posts = await getPosts();
  //   console.log("post fetch response", posts);
  // };

  // const fetchTags = async () => {
  //   const tags = await getTags();
  //   console.log("tag fetch response", tags);
  // };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);
  };

  //4. 게시글 작성 함수
  const handleCreatePost = async (post) => {
    //작성자 정보를 현재 로그인한 유저로 설정
    const createResponse = await createPost({
      title: post.title,
      content: post.content,
      author: user,
      tags: post.tags,
    });

    //작성 성공 후 상세 정보 가져오기
    const newPost = await getPostById(createResponse.postId);

    //화면 내 posts state에 newPost 추가하기
    setPosts((prev) => [...prev, newPost]);
  };

  // TODO: 로그인한 사용자 정보를 가져와서 PostDialog에 전달하고, 게시글 작성 버튼 추가

  return (
    <div className="pb-20 pt-14">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-black">my blog</h1>
        </div>
        <div className="w-[90vw] max-w-md flex justify-center">
          <Input type="text" placeholder="태그로 검색하기" />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {searchTags.map((tag) => {
            return <TagBadge key={tag.id} tag={tag} />;
          })}
        </div>
      </div>

      {/* 게시글 목록 */}
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
      {/* TODO: 로그인한 사용자만 게시글 작성 버튼 표시 */}
      {isLoggedIn && (
        <div className="flex justify-center mt-10">
          <Button onClick={() => setIsPostDialogOpen(true)}>작성</Button>

          {isPostDialogOpen && (
            <PostDialog
              user={user}
              onSubmit={handleCreatePost}
              onClose={() => setIsPostDialogOpen(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}
