import * as React from "react";
import { TagList } from "./tag";

import { cn } from "@/lib/utils";

function Card({ className, post, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground rounded-xl border shadow-sm",
        className,
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle title={post.title}></CardTitle>
        <CardDescription author={post.author.username}></CardDescription>
      </CardHeader>
      <CardContent tags={post.tags}></CardContent>
      <CardFooter like_count={post.like_users.length}></CardFooter>
    </div>
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 p-6 text-left", className)}
      {...props}
    />
  );
}

function CardTitle({ className, title, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "leading-none font-semibold tracking-tight text-xl font-bold",
        className,
      )}
      {...props}
    >
      {title}
    </div>
  );
}

function CardDescription({ className, author, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {author}
    </div>
  );
}

function CardContent({ className, tags, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-6 pt-0", className)}
      {...props}
    >
      <TagList contents={tags}></TagList>
    </div>
  );
}

function CardFooter({ className, like_count, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    >
      ❤️ {like_count}
    </div>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
