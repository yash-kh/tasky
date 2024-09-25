"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
      <p className="text-lg mb-8">
        Organize your tasks efficiently and boost your productivity!
      </p>
      <Link href="/tasks">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default HomePage;
