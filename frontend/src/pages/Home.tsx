// Home.tsx
import { FC } from "react";
import { Feed } from "../components/ui/Feed";
import  AuthCard  from "../components/ui/AuthCard";

const Home: FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-black text-white flex items-start p-6 gap-6">
      {/* Feed section */}
      <div className="w-2/3 bg-neutral-900 rounded-xl p-6 h-[90vh] overflow-y-auto">
        <Feed />
      </div>

      {/* Signup/Login section */}
      <div className="w-1/3 bg-neutral-900 rounded-xl p-6 flex flex-col items-center h-screen m-2 justify-center">
        <AuthCard/>
      </div>
    </div>
  );
};

export default Home;
