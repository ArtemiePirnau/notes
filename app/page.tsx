import { auth, currentUser } from "@clerk/nextjs/server";
import TypingText from "@/components/TypingText";
export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return (
      <div className="flex justify-center">
        <TypingText text="Log in to your account" />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <TypingText text="Go to /notes" />
    </div>
  );
}
