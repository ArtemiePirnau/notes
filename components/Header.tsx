import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import ThemeSwitch from "./ThemeSwitcher";
export default function Header() {
  const { userId } = auth();
  //TODO: afterSignOutUrl - daca ceva asa sterg
  return (
    <header className="header pt-10 mb-40">
      <div className="container">
        <div className="">
          <div className="container mx-auto flex items-center justify-between py-4">
            <Link
              className="text-2xl transition duration-150 ease-in-out hover:text-[#1abcde]"
              href="/"
            >
              Home
            </Link>
            <ThemeSwitch />
            <div>
              {userId ? (
                <div className="flex gap-4 items-center">
                  <Link
                    className="text-2xl pr-10 transition duration-150 ease-in-out hover:text-[#1abcde]"
                    href="/dashboard"
                  >
                    /dashboard
                  </Link>
                  <Link
                    className="text-2xl pr-10 transition duration-150 ease-in-out hover:text-[#1abcde]"
                    href="/notes"
                  >
                    /notes
                  </Link>

                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <Link
                    className="text-2xl transition duration-150 ease-in-out hover:text-[#1abcde]"
                    href="/sign-in"
                  >
                    Sign In
                  </Link>
                  <Link
                    className="text-2xl transition duration-150 ease-in-out hover:text-[#1abcde]"
                    href="/sign-up"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
