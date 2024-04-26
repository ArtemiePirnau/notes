import { auth, currentUser } from "@clerk/nextjs/server";
export default async function DashboardPage() {
  // get user id
  const { userId } = auth();
  // current user
  const user = await currentUser();

  // check if we're logged in or not
  if (!userId || !user) {
    return (
      <div className="text-center text-4xl font-semibold">
        You are not logged in 🙁
      </div>
    );
  }

  return (
    <div className="mt-10 text-start max-w-xl mx-auto p-5 rounded">
      <h1 className="text-6xl font-bold">Welcome 🙂</h1>
      <ul className="list-none mt-10">
        <li className="mb-2">
          <span className="font-semibold text-2xl pr-2">First Name:</span>
          <span className="font-semibold">{user.firstName}</span>
        </li>
        <li className="mb-2">
          <span className="font-semibold text-2xl pr-2">Last Name:</span>
          <span className="font-semibold">{user.lastName}</span>
        </li>
        <li className="mb-2">
          <span className="font-semibold text-2xl pr-2">Email:</span>
          <span className="font-semibold">
            {user.emailAddresses[0].emailAddress}
          </span>
        </li>
      </ul>
    </div>
  );
}
