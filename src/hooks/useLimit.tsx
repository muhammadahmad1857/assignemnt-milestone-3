"use client";

import { useState, useEffect } from "react";

export const useLimit = (limit: number, page?: number) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true); // Track if there are more posts

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      // Build the URL based on page and limit
      const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        
        // Check if the result length is less than limit, indicating no more data
        setHasMore(result.length === limit);

        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);

  return { data, loading, error, hasMore };
};
