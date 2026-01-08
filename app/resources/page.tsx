"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Resources & Credits</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Primary Sources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Practical Guide to Robotics</h3>
              <p className="text-sm text-muted-foreground">By Phoebe Xu & Grace Yu (Entradox Robotics, 2021)</p>
            </div>
            <div>
              <h3 className="font-semibold">CTRL ALT FTC</h3>
              <p className="text-sm text-muted-foreground">Control Theory Resources</p>
            </div>
            <div>
              <h3 className="font-semibold">FIRST Official Documentation</h3>
              <p className="text-sm text-muted-foreground">Game Manuals and Guidelines</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
