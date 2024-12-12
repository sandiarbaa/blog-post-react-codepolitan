"use client";
import { useState } from "react";
import MainLayout from "./components/layouts/MainLayout";

interface PostsData {
  id: number;
  title: string;
  body: string;
  date: string;
}

const postsData: PostsData[] = [
  {
    id: 1,
    title: "First Post",
    body: "This is the first post",
    date: "2023-01-01",
  },
  {
    id: 2,
    title: "Second Post",
    body: "This is the second post",
    date: "2023-02-01",
  },
  {
    id: 3,
    title: "Third Post",
    body: "This is the third post",
    date: "2023-03-01",
  },
];

export default function Home() {
  const [posts, setPosts] = useState<PostsData[]>(postsData);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter berdasarkan query
    if (query === "") {
      setPosts(postsData); // Reset jika query kosong
    } else {
      const filteredPosts: PostsData[] = postsData.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setPosts(filteredPosts);
    }
  };

  return (
    <MainLayout>
      <h1 className="font-semibold text-lg">Home</h1>

      {/* Search Input */}
      <div className="my-3">
        <label htmlFor="search" className="text-sm font-semibold mr-3">
          Search :
        </label>
        <input
          type="text"
          id="search"
          className="border text-sm px-2 py-1 rounded-md shadow"
          value={searchQuery}
          onChange={onSearchChange}
        />
        <button
          type="button"
          // onClick={}
          className="bg-black text-white font-semibold text-sm rounded-md px-2 py-1 ml-2 active:bg-slate-700"
        >
          Search
        </button>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="p-3 w-56 border rounded-md my-3 shadow">
          <h2 className="font-semibold text-lg">{post.title}</h2>
          <p>{post.body}</p>
          <p className="text-sm text-slate-500">{post.date}</p>
        </div>
      ))}
    </MainLayout>
  );
}
