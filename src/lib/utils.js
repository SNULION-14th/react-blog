import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function searchTags(posts, input) {
  let tags = posts
    .map((post) => post.tags)
    .flat()
    .filter((tag) => tag.content.includes(input))
    .map((tag) => [tag.id, tag]);

  tags = new Map(tags).values();
  tags = Array.from(tags);
  console.log(tags);

  return tags;
}
