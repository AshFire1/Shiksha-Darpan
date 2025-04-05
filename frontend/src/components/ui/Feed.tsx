// Feed.tsx
import { FC } from "react";
import { FeedPostCard }  from "./FeedPostCard"

export const Feed: FC = () => {
  const posts = [
    {
      type: "Course",
      title: "Intro to AI",
      educator: "Dr. Jane Doe",
      description: "A beginner-friendly course on Artificial Intelligence.",
    },
    {
      type: "Scholarship",
      title: "STEM Scholars 2025",
      educator: "XYZ Foundation",
      description: "Apply now for a fully-funded STEM scholarship.",
    },
    {
      type: "Course",
      title: "Web Development Bootcamp",
      educator: "CodeCamp",
      description: "Learn HTML, CSS, JS and React in 12 weeks.",
    },
    {
      type: "Scholarship",
      title: "TechWomen Fellowship",
      educator: "TechWomen Org",
      description: "Opportunity for women in tech to learn and grow globally.",
    },
    {
      type: "Course",
      title: "Machine Learning Basics",
      educator: "AI Institute",
      description: "Understand the basics of machine learning and algorithms.",
    },
    {
      type: "Scholarship",
      title: "Diversity in STEM",
      educator: "Global STEM Fund",
      description: "Grants to support diversity in science and engineering.",
    },
    {
        type: "Course",
        title: "Intro to AI",
        educator: "Dr. Jane Doe",
        description: "A beginner-friendly course on Artificial Intelligence.",
      },
      {
        type: "Scholarship",
        title: "STEM Scholars 2025",
        educator: "XYZ Foundation",
        description: "Apply now for a fully-funded STEM scholarship.",
      },
      {
        type: "Course",
        title: "Web Development Bootcamp",
        educator: "CodeCamp",
        description: "Learn HTML, CSS, JS and React in 12 weeks.",
      },
      {
        type: "Scholarship",
        title: "TechWomen Fellowship",
        educator: "TechWomen Org",
        description: "Opportunity for women in tech to learn and grow globally.",
      },
      {
        type: "Course",
        title: "Machine Learning Basics",
        educator: "AI Institute",
        description: "Understand the basics of machine learning and algorithms.",
      },
      {
        type: "Scholarship",
        title: "Diversity in STEM",
        educator: "Global STEM Fund",
        description: "Grants to support diversity in science and engineering.",
      },  
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Explore Opportunities</h2>
      <div className="flex flex-col gap-4">
        {posts.map((post, idx) => (
          <FeedPostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
};
