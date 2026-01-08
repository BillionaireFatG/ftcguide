"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator,
  Zap,
  Cog,
  TrendingUp,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const calculators = [
  {
    icon: Zap,
    title: "Speed Calculator",
    description:
      "Calculate maximum robot speed based on motor RPM, wheel size, and gear ratio. See time to cross field and recommended configurations.",
    href: "/calculators/speed",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Cog,
    title: "Torque Calculator",
    description:
      "Determine wheel torque, pushing force, and acceleration. Check if your robot can climb ramps and push opponents.",
    href: "/calculators/torque",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "Acceleration Calculator",
    description:
      "Calculate 0-5ft time, acceleration curves, and stopping distance. Optimize for quick starts and responsive control.",
    href: "/calculators/acceleration",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Settings,
    title: "Gear Ratio Optimizer",
    description:
      "Find the optimal gear combination for your target speed and torque. Get recommendations from available gears in your kit.",
    href: "/calculators/gear-ratio",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Calculator,
    title: "Complete Drivetrain Designer",
    description:
      "Full wizard to design your entire drivetrain. Select motors, wheels, gear ratios, and get a complete parts list with cost estimate.",
    href: "/calculators/complete",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold sm:text-5xl">Drivetrain Calculators</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Precision engineering tools to calculate speed, torque, acceleration, and
          optimize your drivetrain design with real-time results.
        </p>
      </motion.div>

      {/* Calculator Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {calculators.map((calc, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${calc.bgColor}`}>
                  <calc.icon className={`h-6 w-6 ${calc.color}`} />
                </div>
                <CardTitle>{calc.title}</CardTitle>
                <CardDescription>{calc.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                  <Link href={calc.href}>
                    Launch Calculator
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-lg border bg-muted/50 p-8"
      >
        <h2 className="mb-4 text-2xl font-bold">How to Use These Calculators</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Our calculators provide real-time results as you adjust parameters. All
            calculations are based on proven physics formulas and real-world FTC/FRC
            motor specifications.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>All inputs have tooltips explaining what they mean</li>
            <li>Results update instantly as you change values</li>
            <li>Save configurations to compare different designs</li>
            <li>Export results as PDF reports for your team</li>
            <li>Formulas and explanations provided for learning</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
