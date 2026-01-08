"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, TrendingUp, Gauge, Filter, Route, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const topics = [
  {
    icon: Activity,
    title: "PID Controller",
    description: "Master proportional-integral-derivative control for precise robot movement and system stability.",
    href: "/control-theory/pid",
    difficulty: "Intermediate",
  },
  {
    icon: TrendingUp,
    title: "Feedforward Control",
    description: "Model-based control using kV, kA, and kS constants for predictive system behavior.",
    href: "/control-theory/feedforward",
    difficulty: "Intermediate",
  },
  {
    icon: Gauge,
    title: "Full State Feedback",
    description: "Advanced LQR control for optimal system response using complete state information.",
    href: "/control-theory/state-feedback",
    difficulty: "Advanced",
  },
  {
    icon: Filter,
    title: "Kalman Filter",
    description: "Sensor fusion and noise rejection for accurate state estimation.",
    href: "/control-theory/kalman-filter",
    difficulty: "Advanced",
  },
  {
    icon: Route,
    title: "Motion Profiling",
    description: "Generate smooth trapezoidal and S-curve profiles for autonomous movement.",
    href: "/control-theory/motion-profiling",
    difficulty: "Intermediate",
  },
];

export default function ControlTheoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Control Theory</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Master advanced control systems for precise, reliable robot performance
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <topic.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="text-xs text-muted-foreground">{topic.difficulty}</span>
                <Button asChild variant="ghost" size="sm">
                  <Link href={topic.href}>
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
