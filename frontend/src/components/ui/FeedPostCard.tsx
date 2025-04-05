// FeedCardPost.tsx
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PostProps {
  type: string;
  title: string;
  educator: string;
  description: string;
}

export const FeedPostCard: FC<PostProps> = ({
  type,
  title,
  educator,
  description,
}) => {
  const handleClick = () => {
    const isSignedIn = false; // placeholder

    if (!isSignedIn) alert("User is not signed in.");
    else console.log("Navigate to expanded post...");
  };

  return (
    <div className="bg-white text-black rounded-lg p-4 flex justify-between items-start shadow-sm">
      <div className="w-full">
        <div className="flex justify-between text-sm font-semibold mb-1">
          <span>{type}</span>
          <span>{title}</span>
          <span className="text-muted-foreground">{educator}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="ml-4 mt-2">
        <Button size="sm" variant="default" onClick={handleClick}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};
