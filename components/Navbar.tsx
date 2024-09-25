import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="mr-4">
          <h1 className="text-xl font-bold">Task Manager</h1>
        </Link>
        <div>
          <Link href="/tasks">Tasks</Link>
        </div>
      </div>
    </nav>
  );
};
