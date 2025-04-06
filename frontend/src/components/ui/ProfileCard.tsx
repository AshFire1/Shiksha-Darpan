import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProfileCard() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3000/student/getstudent", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("here")

        if (!response.ok) {
          throw new Error("Failed to fetch student data");
        }

        const data = await response.json();
        console.log(data);

        setName(data.student.name); // Adjust based on actual response shape
      } catch (error) {
        console.error("Error fetching student:", error);
        setName("Unknown");
      }
    };

    fetchStudent();
  }, []);

  return (
    <Card className="w-full max-w-sm bg-white text-black rounded-xl shadow-md">
      <CardContent className="space-y-4 p-6">
        <h3 className="text-lg font-semibold text-center">Welcome</h3>
        <div className="text-center text-xl font-bold">
          {name ? name : "Loading..."}
        </div>
        <Button
          className="w-full"
          variant="default"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload(); // Or handle via context/router
          }}
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
}
