import { useState, useEffect } from "react";
import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog, Button } from "@/shared/components";
// import { getPosts, getTags, getPostById } from "@/shared/api";
// import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useUser } from "@/shared/context";
import { posts as dummyPosts } from "@/data/posts";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  const [posts, setPosts] = useState(dummyPosts);
  const [storedTags, setStoredTags] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  // 모든 태그를 posts에서 추출
  useEffect(() => {
    const allTags = [];
    const seen = new Set();
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        if (!seen.has(tag.id)) {
          seen.add(tag.id);
          allTags.push(tag);
        }
      });
    });
    setStoredTags(allTags);
  }, [posts]);

  // 검색 입력에 따라 태그 필터링
  const searchTags = searchInput
    ? storedTags.filter((tag) => tag.content.includes(searchInput))
    : storedTags;

  // 검색 입력에 따라 포스트 필터링
  const filteredPosts = searchInput
    ? posts.filter((post) =>
        post.tags.some((tag) => tag.content.includes(searchInput))
      )
    : posts;

  const handleSearchTagInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleCreatePost = async (post, author) => {
    const newPost = {
      id: posts.length + 1,
      title: post.title,
      content: post.content,
      author: { id: author.id, username: author.username },
      tags: post.tags,
      like_users: [],
      created_at: new Date().toISOString(),
    };
    setPosts([...posts, newPost]);
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
            value={searchInput}
            onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {searchTags.map((tag) => {
            return (
              <TagBadge
                key={tag.id}
                tag={tag}
                onClick={() => setSearchInput(tag.content)}
              />
            );
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
                console.log(post.id);
                navigate(`/post/${post.id}`);
              }}
            />
          </div>
        ))}
      </div>

      {user && (
        <div className="flex justify-center mt-10">
          <Button onClick={() => setDialogOpen(true)}>작성</Button>
        </div>
      )}

      {dialogOpen && (
        <PostDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          onCreatePost={handleCreatePost}
          user={user}
        />
      )}
    </div>
  );
}
