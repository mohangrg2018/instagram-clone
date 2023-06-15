import { signOut, useSession } from "next-auth/react";

const RightSidebar = () => {
  const { data: session } = useSession();
  return (
    <section className="mt-12 px-10 hidden lg:inline-block">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={session?.user?.image}
            alt="Profile Image"
            className="w-[70px] object-cover rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{session?.user?.name}</p>
            <p className="text-sm">Website Developer</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => signOut()}
            className="text-sm text-blue-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
