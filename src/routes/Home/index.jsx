import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useUser } from "@/shared/context";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [storedTags, setStoredTags] = useState([]);

  const { isLoggedIn } = useUser();
  const navigate = useNavigate();

  const tagsToShow =
    tagInput === ""
      ? storedTags
      : storedTags.filter((t) => t.content.includes(tagInput));

  const postsToShow =
    tagInput === ""
      ? posts
      : posts.filter((post) =>
          post.tags.some((t) => t.content.includes(tagInput.trim())),
        );

  const fetchPosts = async () => {
    const posts = await getPosts();
    // console.log("post fetch response", posts);
    return posts;
  };

  const fetchTags = async () => {
    const tags = await getTags();
    // console.log("tag fetch response", tags);
    return tags;
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    setTagInput(value);
    // console.log("search tag input change", value);
  };

  const handleCreatePost = async (post, author) => {
    const formattedPost = {
      ...post,
      tags: post.tags.map((t) => t.content),
    };

    const createResponse = await createPost({
      ...formattedPost,
      author,
    });

    const newPost = await getPostById(createResponse.postId);
    setPosts((prev) => [...prev, newPost]);
    // console.log("new post", newPost);
    return newPost;
  };

  // load all posts
  useEffect(() => {
    const initPosts = async () => {
      setPosts(await fetchPosts());
    };

    initPosts();
  }, []);

  // load all stored tags
  useEffect(() => {
    const initTags = async () => {
      setStoredTags(await fetchTags());
    };

    initTags();
  }, []);

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
          {tagsToShow.map((tag) => (
            <TagBadge key={tag.id} tag={tag}></TagBadge>
          ))}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
        {postsToShow.map((post) => (
          <div
            key={post.id}
            className="w-full flex justify-center items-center"
          >
            {
              <SmallPost
                post={post}
                onClick={() => {
                  console.log(post.id);
                  navigate(`/post/${post.id}`);
                }}
              />
            }
          </div>
        ))}
      </div>
      <div className="m-5 p-5">
        {isLoggedIn ? (
          <PostDialog onCreate={handleCreatePost}></PostDialog>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
