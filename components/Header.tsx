import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
export default function Header() {
  const { userId } = auth();
  return (
    <header className="header pt-10">
      <div className="container">
        <div className="bg-[#010409] text-neutral-100">
          <div className="container mx-auto flex items-center justify-between py-4">
            <Link href="/">Home</Link>
            <div>
              {userId ? (
                <div className="flex gap-4 items-center">
                  <Link href="/dashboard">Dashboard</Link>
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <Link href="/sign-in">Sign In</Link>
                  <Link href="/sign-up">Sign up</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
