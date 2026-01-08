"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestTube } from "lucide-react";

export default function TestingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Testing & Calibration</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube className="h-6 w-6" />
            Testing Procedures
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Comprehensive testing and calibration procedures coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
