import * as React from "react";

function Tag({ content, ...props }) {
  return (
    <div className="bg-[#FF9100] text-white text-xs font-bold rounded-md py-1 px-2 m-1">
      #{content}
    </div>
  );
}

function TagList({ contents, ...props }) {
  return (
    <div className="flex justify-start gap-1">
      {contents.map(({ id, content }) => (
        <Tag tag-id={id} content={content}></Tag>
      ))}
    </div>
  );
}

export { Tag, TagList };
