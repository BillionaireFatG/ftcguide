"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box } from "lucide-react";

export default function SimulatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">3D Drivetrain Simulator</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="h-6 w-6" />
            Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Interactive 3D simulator with React Three Fiber is under development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
