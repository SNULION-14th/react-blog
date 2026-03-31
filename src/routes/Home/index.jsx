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
  const [storedTags, setStoredTags] = useState([]);

  const [searchTags, setSearchTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false);

  const displayTags = searchTags.length > 0 ? searchTags : storedTags;

  //3. 페이지가 처음 로드될 때 데이터 가져오기 (useEffect)
  useEffect(() => {
    const initData = async () => {
      try {
        const fetchedPosts = await getPosts();
        const fetchedTags = await getTags();
        // console.log(fetchedTags[0]);
        setPosts(fetchedPosts);
        setStoredTags(fetchedTags);
      } catch (error) {
        console.error("데이터 로드 실패: ", error);
      }
    };

    initData();
  }, []);

  //검색창 입력 감지
  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  //엔터 키 입력 시 검색 태그 추가
  const handleSearchKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();

      const newTag = {
        id: searchTags.length,
        content: searchQuery,
      };

      setSearchTags([...searchTags, newTag]);
      setSearchQuery("");
    }
  };

  //필터링 로직
  const filteredPosts = posts.filter((post) => {
    if (searchTags.length === 0) return true;

    const searchTagContents = searchTags.map((tag) => tag.content);
    return post.tags.some((postTag) =>
      searchTagContents.includes(postTag.content),
    );
  });

  //게시글 작성 함수
  const handleCreatePost = async (post) => {
    const createResponse = await createPost({
      title: post.title,
      content: post.content,
      author: user, //작성자 정보를 현재 로그인한 유저로 설정
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
        <div className="w-[90vw] flex flex-col items-center">
          {/* 검색창 */}
          <Input
            type="text"
            placeholder="태그로 검색하기"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyDown={handleSearchKeyDown}
            className="max-w-md"
          />

          {/* 검색창 아래 태그 리스트 */}
          <div className="flex mt-2 flex-wrap justify-center gap-1">
            {displayTags.map((tag) => {
              return <TagBadge key={tag.id} tag={tag} />;
            })}
          </div>
        </div>
      </div>

      {/* 게시글 목록 */}
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
