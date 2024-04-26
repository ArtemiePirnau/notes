import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import WavyText from "@/components/WavyText";
export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    //return <WavyText text="Log in to your account" />;
  }

  //return <WavyText text="Awesome Wavy Text!" />;
}
