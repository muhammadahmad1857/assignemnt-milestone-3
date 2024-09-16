"use client";
import { PostCard } from "@/components/PostCard/PostCard";
import { useLimit } from "@/hooks/useLimit";
import Link from "next/link";

export default function Home() {
  const { data, loading, error } = useLimit(6);

  interface PostDataType {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  return (
    <div>
      <main className="flex flex-col items-center justify-center h-[76vh] bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Blogging Website
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This is a simple home page built with Next.js and Tailwind CSS.
          Explore our website to learn more about our services and offerings.
        </p>
      </main>

      {loading && <div className="mt-4 text-gray-500 text-lg">Loading...</div>}

      {error && <div className="mt-4 text-red-500 text-lg">Error: {error}</div>}

      {!loading && !error && data && (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center w-full">
          {data.map((item: PostDataType, index) => {
            return (
              <Link key={index} href={`/Blog/${item.id}`}>
                <PostCard postData={item} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
