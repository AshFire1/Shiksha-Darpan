// src/pages/MyProgressPage.tsx
import React from "react";
import CourseCard from "@/components/ui/CourseCard";
import img from "../assets/python.png";

const MyProgressPage: React.FC = () => {
  const ongoingCourses = [
    {
      thumbnail: img,
      title: "Intro to Python",
      educator: "Jane Doe",
      description: "Learn Python with real-world examples and interactive challenges.",
      completedChapters: 4,
      totalChapters: 10,
    },
    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },    {
        thumbnail: img,
        title: "Intro to Python",
        educator: "Jane Doe",
        description: "Learn Python with real-world examples and interactive challenges.",
        completedChapters: 4,
        totalChapters: 10,
      },

  ];

  const completedCourses = [
    {
      thumbnail: img,
      title: "HTML & CSS Basics",
      educator: "Emily Carter",
      description: "Build and style web pages using HTML and CSS.",
      completedChapters: 12,
      totalChapters: 12,
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#0f0f1f] text-white relative overflow-hidden px-6 py-10">
      {/* Background balls */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-blue-500 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] w-72 h-72 bg-yellow-400 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Progress</h1>

        {/* Ongoing Courses */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ongoing Courses</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-6 py-2 min-w-full scroll-smooth custom-scrollbar">
              {ongoingCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Completed Courses */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Completed Courses</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-6 py-2 min-w-full scroll-smooth custom-scrollbar">
              {completedCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyProgressPage;
