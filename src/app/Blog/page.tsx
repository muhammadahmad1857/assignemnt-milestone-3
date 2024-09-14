"use client";
import { PostCard } from "@/components/PostCard/PostCard";
import React, { useEffect, useState } from "react";

export default function Blog() {
  const [PostData, setPostData] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);
  const getAllPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    setPostData(data);
    console.log(data);
  };
  console.log(PostData);

  return (
    <div className="flex flex-wrap items-center justify-center">
      {PostData.map((item) => {
        return <PostCard postData={item} />
      })}
    </div>
  );
}
