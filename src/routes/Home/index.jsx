import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import {useUser} from "@/shared/context/userContext";
import {Button} from "@/shared/components";
import { useEffect, useMemo, useState } from "react";
import {posts as dummyPosts} from "../../../server/data/posts.js";
import {tags as dummyTags} from "../../../server/data/tags.js";

//HINT: State

export default function Home() {
  const navigate = useNavigate();
  const {isLoggedIn} = useUser();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [posts, setPosts] = useState(dummyPosts);
  const [allTags, setAllTags] = useState(dummyTags);
  const [tagSearchInput,setTagSearchInput] =useState("");

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
    setPosts(posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
    setAllTags(tags);
  };

  useEffect(()=> {
    fetchPosts();
    fetchTags();
  },[]);

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);
    setTagSearchInput(value);
  };

  const filteredTags = useMemo(()=>{
    if(!tagSearchInput.trim()) return [];
    return allTags.filter((tag)=>
      tag.content.toLowerCase().includes(tagSearchInput.toLowerCase())
    );
  }, [tagSearchInput, allTags]);

  const filteredPosts = useMemo(() => {
      if (!tagSearchInput.trim()) return posts;
      
      return posts.filter((post) => {
        return post.tags.some((tag) => {
          const tagContent = typeof tag === 'number' 
            ? allTags.find((t) => t.id === tag)?.content || "" 
            : tag.content || "";
            
          return tagContent.toLowerCase().includes(tagSearchInput.toLowerCase());
        });
      });
    }, [posts, tagSearchInput, allTags]);

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);

    setPosts((prevPosts)=>[...prevPosts, newPost]);
    setIsDialogOpen(false);
  };

  // FIXME: 로그인한 사용자 정보를 가져와서 PostDialog에 전달하고, 게시글 작성 버튼 추가

  return (
    <div className="pb-20 pt-14">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-black">my blog</h1>
        </div>
        <div className="w-[90vw] max-w-md flex justify-center">
          <Input type="text" 
                  placeholder="태그로 검색하기" 
                  value={tagSearchInput}
                  onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {filteredTags.map((tag) => {
            return <TagBadge key={tag.id} tag={tag} />;
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
      {/* FIXME: 로그인한 사용자만 게시글 작성 버튼 표시 */}
      {
        isLoggedIn && (
          <Button onClick={()=>setIsDialogOpen(true)}>작성</Button>
        )
      }
      {/* FIXME: PostDialog 컴포넌트 구현 */}
      <PostDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        onSubmit={(postData) => {
          handleCreatePost(postData, "준영"); 
        }} 
      />
    </div>
  );
}
