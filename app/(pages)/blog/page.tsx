"use client";
import MainLayout from "@/app/components/layouts/MainLayout";
import { useEffect, useState } from "react";

interface PostInterface {
  id: number;
  title: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <MainLayout>
      <h1>Blog</h1>
      {posts?.map((post) => (
        <div key={post.id}>- {post.title}</div>
      ))}
    </MainLayout>
  );
};

export default BlogPage;
