"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface PostDetailInterface {
  id: number;
  title: string;
  body: string;
}

const PostDetailPage = () => {
  const { id } = useParams(); // Ambil parameter `id` dari URL
  const [post, setPost] = useState<PostDetailInterface | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) {
    return <p className="p-5">Loading...</p>;
  }

  return (
    <div className="p-5">
      <h1 className="font-semibold text-lg mb-3">{post.title}</h1>
      <p className="text-sm">{post.body}</p>

      <Link href="/blog" className="mt-5 text-sm underline">
        Back to Blog
      </Link>
    </div>
  );
};

export default PostDetailPage;
