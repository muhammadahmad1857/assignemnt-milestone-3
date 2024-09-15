"use client";
import { PostCard } from "@/components/PostCard/PostCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface PostDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Blog() {
  const [PostData, setPostData] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);
  const getAllPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    setPostData(data);
  };
  console.log(PostData);

  return (
    <div className="md:grid grid-cols-3 w-full">
      {PostData.map((item: PostDataType, index) => {
        return (
          <Link key={index} href={`/Blog/${item.id}`}>
            <PostCard postData={item} />
          </Link>
        );
      })}
    </div>
  );
}
