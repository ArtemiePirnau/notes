"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export default function Note({
  id,
  title,
  content,
  published,
}: {
  id?: number;
  title: string;
  content: string;
  published?: Date;
}) {
  const { userId } = useAuth();

  const pathname = usePathname();

  return (
    <div className="flex h-fit w-72 flex-col gap-3 break-words rounded-md border-2 p-5 text-center">
      <div className="flex items-start justify-between">Ku</div>
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="text-lg">{content}</p>
      <div className="flex items-end justify-between">
        <p className="text-xs">
          {published !== undefined
            ? JSON.stringify(published).slice(1, 11)
            : ""}
        </p>
        {pathname === "/notes" ? (
          <Link
            href={`/notes/${id}`}
            className="duration-200 md:hover:text-purple-400"
          >
            Sageata de sus
          </Link>
        ) : (
          <p className="text-xs">id: {id}</p>
        )}
      </div>
    </div>
  );
}
