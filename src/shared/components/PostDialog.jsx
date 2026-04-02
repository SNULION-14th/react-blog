//TODO: 게시글 작성 모달 다이얼로그 구현
// import { useState } from "react";
// import { Button } from "@/shared/components";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Label } from "@/shared/components";
// import { Input } from "@/shared/components";
// import { Textarea } from "@/shared/components";
// import { Title } from "@radix-ui/react-dialog";
// import { TagBadge } from "@/shared/components";

// export function PostDialog({ onSubmit }) {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [tag, setTag] = useState("");
//   const [tags, setTags] = useState([]);
//   const handleSubmit = () => {
//     onSubmit({
//       title,
//       content,
//       tags,
//     });
//   };
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button>작성하기</Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogTitle className="flex text-2xl font-bold">
//           게시글 작성
//         </DialogTitle>
//         <Input
//           id="title"
//           type="text"
//           placeholder="제목을 입력하세요"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <Input
//           id="content"
//           type="text"
//           placeholder="내용을 입력하세요"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <Input
//           placeholder="태그 입력 후 Enter"
//           value={tag}
//           onChange={(e) => setTag(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               e.preventDefault();

//               if (!tag.trim()) return;

//               setTags((prev) => [
//                 ...prev,
//                 {
//                   id: Date.now(),
//                   content: tag.trim(),
//                 },
//               ]);

//               setTag("");
//             }
//           }}
//         />

//         <div className="mt-2 flex flex-wrap gap-2">
//           {tags.map((item) => (
//             <TagBadge tag={item} />
//           ))}
//         </div>

//         <div className="mt-4 flex justify-end">
//           <Button onClick={handleSubmit}>작성하기</Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default PostDialog;
import { useState } from "react";
import { Button, Input, Textarea, TagBadge } from "@/shared/components";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export function PostDialog({ onSubmit }) {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) return;

    await onSubmit({
      title,
      content,
      tags,
    });

    setTitle("");
    setContent("");
    setTag("");
    setTags([]);
    setOpen(false);
  };

  const handleAddTag = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    const trimmedTag = tag.trim();
    if (!trimmedTag) return;

    setTags((prev) => {
      const alreadyExists = prev.some((item) => item.content === trimmedTag);

      if (alreadyExists) return prev;

      return [
        ...prev,
        {
          id: Date.now(),
          content: trimmedTag,
        },
      ];
    });

    setTag("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>작성하기</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle className="text-2xl font-bold">게시글 작성</DialogTitle>

        <Input
          id="title"
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Textarea
          id="content"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Input
          placeholder="태그 입력 후 Enter"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={handleAddTag}
        />

        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((item) => (
            <TagBadge key={item.id} tag={item} />
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <Button onClick={handleSubmit}>작성하기</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PostDialog;
