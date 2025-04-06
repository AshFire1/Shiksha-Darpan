import { Card } from "@/components/ui/card";
import React from "react";

interface CourseCardProps {
  thumbnail: string;
  title: string;
  educator: string;
  description: string;
  completedChapters: number;
  totalChapters: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  thumbnail,
  title,
  educator,
  description,
  completedChapters,
  totalChapters,
}) => {
  const progress = (completedChapters / totalChapters) * 100;

  return (
    <Card className="w-64 min-w-64 bg-gray-200 text-black rounded-xl shadow-md overflow-hidden flex flex-col justify-between h-96">
      <div>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-32 object-contain bg-white rounded-t-lg"
        />

        <div className="p-4 flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-700">by {educator}</p>
          <p className="text-sm text-gray-800 line-clamp-3">{description}</p>
        </div>
      </div>

      {/* Progress section */}
      <div className="px-4 pb-4 mt-auto">
        <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-700 mt-1 text-center">
          {completedChapters} / {totalChapters} chapters
        </p>
      </div>
    </Card>
  );
};

export default CourseCard;
