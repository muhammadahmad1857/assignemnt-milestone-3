"use client";
import Comments from "@/components/Comments";
import React, { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function BlogId({ params }:{params:{blogId:string}}) {
  console.log(params);
  
  const [postData, setPostData] = useState<Post | null>(null);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    currentPost();
  }, []);

  const currentPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
    );
    if (response.ok) {
      const currentData = await response.json();
      setPostData(currentData);
      const commentRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`
      );
      const commentData = await commentRes.json();
      setComments(commentData);
    }
  };
  return (
    <div>
      {/* Post Content */}
      <div className="px-6 py-4">
        {/* Post Title */}
        <div className="font-bold text-xl mb-2">{(postData || {}).title}</div>
        {/* Post Body */}
        <p className=" text-base">{(postData || {}).body}</p>

        {/* Comments Section */}
        {comments && comments.map((com) => {
          return <Comments  commentData={com}/>;
        })}
      </div>
    </div>
  );
}
