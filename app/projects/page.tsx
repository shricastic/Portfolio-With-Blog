import Link from "next/link";
import { formatDate, getProjects } from "app/lib/posts";

export const metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function ProjectPosts() {
  let allProjects = getProjects();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My Projects</h1>
      <div>
        <div className="h-[1px] w-full bg-gray-300 mb-4" />
        {allProjects
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
              href={`/projects/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="">
                  {post.metadata.title}
                </h2>
                <p className="text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
