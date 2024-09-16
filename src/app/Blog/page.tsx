// "use client";
// import { PostCard } from "@/components/PostCard/PostCard";
// import { useLimit } from "@/hooks/useLimit";
// import Link from "next/link";
// import { useState } from "react";

// export default function Blog() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6; // Number of posts per page

//   // Use the modified hook to fetch the current page's posts
//   const { data, loading, error } = useLimit(postsPerPage, currentPage);

//   interface PostDataType {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
//   }

//   // Function to handle page change
//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="p-4">
//       <main className="flex flex-col items-center justify-center h-[76vh] bg-gray-100 p-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Posts</h1>
//       </main>

//       {loading && <div className="mt-4 text-gray-500 text-lg">Loading...</div>}
//       {error && <div className="mt-4 text-red-500 text-lg">Error: {error}</div>}

//       {!loading && !error && data && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
//           {data.map((item: PostDataType, index) => (
//             <Link key={index} href={`/Blog/${item.id}`}>
//               <PostCard postData={item} />
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* Pagination controls */}
//       <div className="flex justify-center mt-6 space-x-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 bg-gray-200 rounded ${
//             currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           Previous
//         </button>

//         <span className="px-4 py-2">Page {currentPage}</span>

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           className="px-4 py-2 bg-gray-200 rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";
import { PostCard } from "@/components/PostCard/PostCard";
import { useLimit } from "@/hooks/useLimit";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page

  // Use the modified hook to fetch the current page's posts
  const { data, loading, error, hasMore } = useLimit(postsPerPage, currentPage);

  interface PostDataType {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <main className="flex flex-col items-center justify-center h-[76vh] bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Posts</h1>
      </main>

      {loading && <div className="mt-4 text-gray-500 text-lg">Loading...</div>}
      {error && <div className="mt-4 text-red-500 text-lg">Error: {error}</div>}

      {!loading && !error && data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item: PostDataType, index) => (
            <Link key={index} href={`/Blog/${item.id}`}>
              <PostCard postData={item} />
            </Link>
          ))}
        </div>
      )}

      {/* Pagination controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>

        <span className="px-4 py-2">Page {currentPage}</span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!hasMore}
          className={`px-4 py-2 bg-gray-200 rounded ${
            !hasMore ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
