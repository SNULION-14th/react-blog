import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";

//HINT: State
const posts = [];
const searchTags = [];
const storedTags = [];

export default function Home() {
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);
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
      {/* TODO: PostDialog 컴포넌트 구현 */}
    </div>
  );
}
