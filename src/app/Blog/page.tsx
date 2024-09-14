"use client"
import { PostCard } from "@/components/PostCard/PostCard";
import React, { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    getAllPost();
  }, []);
  const getAllPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json()
    console.log(data);
    
  };
  return (
    <div>
      <PostCard />
    </div>
  );
}
