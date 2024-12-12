import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="mb-3">
      <Link className="nav" href={"/"}>
        Home
      </Link>{" "}
      |{" "}
      <Link className="nav" href={"/blog"}>
        Blog
      </Link>{" "}
      |{" "}
      <Link className="nav" href={"/about"}>
        About
      </Link>
    </nav>
  );
};

export default Navbar;
