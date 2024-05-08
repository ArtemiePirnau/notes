import { auth, currentUser } from "@clerk/nextjs/server";
import { PrismaClient, Prisma } from "@prisma/client";

import { sql } from "@vercel/postgres";

export default function Home() {
  return <div>Hi</div>;
}
