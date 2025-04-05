// components/AuthCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AuthCard() {
  return (
    <Card className="w-full max-w-sm bg-white text-black rounded-xl shadow-md">
      <CardContent className="space-y-4 p-6">
        <h3 className="text-lg font-semibold text-center">Login As</h3>
        <Button className="w-full" variant="default">
           Student
        </Button>
        <Button className="w-full" variant="default">
          Educator
        </Button>
        <Button className="w-full" variant="default">
            Organisation
        </Button>
      </CardContent>
    </Card>
  );
}
