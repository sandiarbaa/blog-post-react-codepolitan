"use client";
import { useState } from "react";
import MainLayout from "./components/layouts/MainLayout";
import SearchBar from "./components/fragments/SearchBar";

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
  const [posts, setPosts] = useState<PostsData[]>(postsData); // data asli posts
  const [searchQuery, setSearchQuery] = useState<string>(""); // keyword pencarian

  // untuk mengisi keyword pencarian
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // filter berdasarkan keyword pencarian
  const handleSearchClick = () => {
    if (searchQuery.trim() === "") {
      setPosts(postsData); // Reset ke semua data jika input kosong
    } else {
      const filteredPosts: PostsData[] = postsData.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setPosts(filteredPosts);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick(); // Panggil fungsi pencarian saat Enter ditekan
    }
  };

  const handleSearchClear = () => {
    setSearchQuery("");
    setPosts(postsData);
  };

  return (
    <MainLayout>
      <h1 className="font-semibold text-lg">Home</h1>

      {/* Search Input */}
      <SearchBar
        onSearchChange={onSearchChange}
        handleSearchClick={handleSearchClick}
        handleSearchClear={handleSearchClear}
        handleKeyDown={handleKeyDown}
        searchQuery={searchQuery}
      />

      {posts?.map((post) => (
        <div key={post.id} className="p-3 w-56 border rounded-md my-3 shadow">
          <h2 className="font-semibold text-lg">{post.title}</h2>
          <p>{post.body}</p>
          <p className="text-sm text-slate-500">{post.date}</p>
        </div>
      ))}
    </MainLayout>
  );
}
