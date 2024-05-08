import { auth, currentUser } from "@clerk/nextjs/server";
import { PrismaClient, Prisma } from "@prisma/client";

import { sql } from "@vercel/postgres";

export default function Home() {
  return <div>Hi</div>;
}
//TODO: E pizdet, DB nu merge ceva cu userId, daca ceva sa sterg nahui acest ORM,
// Apoi sa sterg componenta LoadingSpinner ca nu i a mea si Note tot
// Si sa sterg tot codul din acest file si din Notes.tsx
