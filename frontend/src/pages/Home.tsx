import {Feed }from "../components/ui/Feed";
import AuthCard from "..//components/ui/AuthCard";

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 text-blue-400 py-4 px-6 flex justify-center shadow-md">
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
      <div className="flex flex-1 flex-col md:flex-row p-6 gap-6 max-w-7xl w-full self-center">
        {/* Feed */}
        <div className="flex-1 bg-zinc-900 p-4 rounded-2xl overflow-y-auto max-h-[80vh]">
          <h2 className="text-lg font-bold mb-4">Explore Opportunities</h2>
          <Feed />
        </div>

        {/* Auth Card */}
        <div className="w-full md:w-1/3 bg-zinc-900 p-4 rounded-2xl flex items-center justify-center">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
