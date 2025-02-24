import Link from "next/link";
import type { Metadata } from "next";
import { PersonalBlogs, TechBlogs } from "./blogs-data";

export const metadata: Metadata = {
  title: "Blogs",
  description: "My Blogs",
};

export default function Blogs() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Blogs</h1>
      <div className="mb-8">
        <h2 className="italic">Around Engineering</h2>
        <div className="h-[1px] w-full bg-gray-300 mb-4" />
        {TechBlogs.map((blog, index) => (
          <Link
            key={index}
            href={blog.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="">{blog.title}</h2>
              <p className="tracking-tight">{blog.year}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <h2 className="italic">Beyond Engineering</h2>
        <div className="h-[1px] w-full bg-gray-300 mb-4" />
        {PersonalBlogs.map((blog, index) => (
          <Link
            key={index}
            href={blog.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="">{blog.title}</h2>
              <p className="tracking-tight">{blog.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
