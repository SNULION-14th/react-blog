import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog, Button } from "@/shared/components";
import { getPosts, getTags } from "@/shared/api";
import { useNavigate } from "react-router";
import { useEffect, useState, useMemo, use } from "react";
import { useUser } from "@/shared/context/userContext";

export default function Home() {
  const { user } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false);

  const normalizeTag = (t, idx) => {
    if (typeof t === "object" && t !== null) {
      return {
        id: t.id || `tag-${idx}`,
        content: String(t.content || ""),
      };
    }
    return { id: `tag-${idx}`, content: String(t) };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const initFetch = async () => {
      try {
        const [fetchedPosts, fetchedTags] = await Promise.all([
          getPosts(),
          getTags(),
        ]);

        const cleanedTags = (fetchedTags || []).map(normalizeTag);

        const cleanedPosts = (fetchedPosts || []).map((post) => ({
          ...post,
          tags: post.tags?.map(normalizeTag) || [],
          author: post.author || { username: "익명" },
          like_users: post.like_users || [],
        }));

        setPosts(cleanedPosts);
        setAllTags(cleanedTags);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      }
    };
    initFetch();
  }, []);

  const filteredTags = useMemo(() => {
    return allTags.filter((tag) => tag.content.includes(searchInput));
  }, [allTags, searchInput]);

  const filteredPosts = useMemo(() => {
    const term = searchInput.trim();
    if (!term) return posts;

    return posts.filter((post) =>
      post.tags?.some((tag) => tag.content.includes(term)),
    );
  }, [posts, searchInput]);

  const handleCreatePost = (postData) => {
    const newPost = {
      id: Date.now(),
      title: postData.title,
      content: postData.content,
      author: {
        id: user?.id || 999,
        username: user?.username,
      },

      tags: postData.tags.map((t, idx) => normalizeTag(t, idx)),
      like_users: [],
      comments: [],
      created_at: new Date().toISOString(),
    };

    setPosts((prev) => [newPost, ...prev]);
    setIsPostDialogOpen(false);
  };

  return (
    <div className="pb-20 pt-14">
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="uppercase text-6xl font-bold text-black mb-16">
          my blog
        </h1>
        <div className="w-[90vw] max-w-md flex justify-center">
          <Input
            type="text"
            placeholder="태그로 검색하기"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* 메인 페이지 태그 배지 */}
        <div className="flex mt-5 justify-center flex-wrap gap-2 px-4">
          {filteredTags.map((tag) => (
            <TagBadge key={tag.id} tag={tag} />
          ))}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
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

      {user && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <Button
            className="shadow-lg"
            onClick={() => setIsPostDialogOpen(true)}
          >
            게시글 작성
          </Button>
        </div>
      )}

      <PostDialog
        isOpen={isPostDialogOpen}
        user={user}
        onClose={(data) => {
          if (data) handleCreatePost(data);
          else setIsPostDialogOpen(false);
        }}
      />
    </div>
  );
}
