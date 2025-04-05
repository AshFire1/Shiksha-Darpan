import { Feed } from "../components/ui/Feed";
import AuthCard from "../components/ui/AuthCard";

const Home = () => {
  return (
    <div className="relative min-h-screen min-w-screen w-full bg-[#34265B] text-white flex flex-col overflow-x-hidden">
      {/* Background Blobs */}
      <div className="absolute w-60 h-60 bg-gradient-to-b from-[#3ee4f0] to-[#0b94ef] rounded-full top-[-4rem] left-[-4rem] blur-3xl opacity-60 z-0" />
      <div className="absolute w-72 h-72 bg-gradient-to-r from-[#fff62f] to-[#ffa204] rounded-full bottom-[-5rem] right-[-5rem] blur-3xl opacity-70 z-0" />

      {/* Navbar */}
      <nav className="relative z-10 w-full bg-[#1e1933] text-blue-400 py-4 px-6 flex justify-center shadow-md">
        <ul className="flex gap-6 text-lg font-semibold">
          <li className="cursor-pointer hover:text-blue-300">Home</li>
          <li className="cursor-pointer hover:text-blue-300">Learning</li>
          <li className="cursor-pointer hover:text-blue-300">Scholarships</li>
          <li className="cursor-pointer hover:text-blue-300">Search</li>
          <li className="cursor-pointer hover:text-blue-300">My Progress</li>
          <li className="cursor-pointer hover:text-blue-300">Profile</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 flex-col md:flex-row p-6 gap-6 max-w-7xl w-full self-center">
        {/* Feed */}
        <div className="flex-1 bg-[#1e1933] p-6 rounded-2xl overflow-y-auto max-h-[80vh] shadow-xl">
          <h2 className="text-lg font-bold mb-4">Explore Opportunities</h2>
          <Feed />
        </div>

        {/* Auth Card */}
        <div className="w-full md:w-1/3 bg-[#1e1933] p-6 rounded-2xl flex items-center justify-center shadow-xl">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
