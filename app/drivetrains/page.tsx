"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Star, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DRIVETRAINS, DRIVETRAIN_ORDER } from "@/lib/constants/drivetrains";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DrivetrainsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold sm:text-5xl">Drivetrain Types</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore comprehensive guides for each drivetrain type. Learn the mechanics,
          physics, programming, and best practices for tank, mecanum, swerve, and omni
          drives.
        </p>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12 overflow-x-auto rounded-lg border bg-card"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-4 text-left font-semibold">Drivetrain</th>
              <th className="p-4 text-center font-semibold">Complexity</th>
              <th className="p-4 text-center font-semibold">Cost</th>
              <th className="p-4 text-center font-semibold">Maneuverability</th>
              <th className="p-4 text-center font-semibold">Min Motors</th>
              <th className="p-4 text-center font-semibold">Build Time</th>
            </tr>
          </thead>
          <tbody>
            {DRIVETRAIN_ORDER.map((key, index) => {
              const dt = DRIVETRAINS[key];
              return (
                <motion.tr
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4">
                    <Link
                      href={`/drivetrains/${key}`}
                      className="font-semibold text-primary hover:underline"
                    >
                      {dt.name}
                    </Link>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < dt.complexity
                              ? "fill-primary text-primary"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <DollarSign
                          key={i}
                          className={`h-4 w-4 ${
                            i < dt.cost ? "text-primary" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < dt.maneuverability
                              ? "fill-primary text-primary"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-center font-medium">{dt.minMotors}</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    {dt.buildTimeHours}h
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>

      {/* Drivetrain Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-8 sm:grid-cols-2"
      >
        {DRIVETRAIN_ORDER.map((key) => {
          const dt = DRIVETRAINS[key];
          return (
            <motion.div key={key} variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <CardTitle className="text-2xl">{dt.name}</CardTitle>
                    <div className="flex space-x-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {dt.complexity}/5 Complexity
                      </span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {dt.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Key Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border p-3">
                        <div className="text-xs text-muted-foreground">
                          Min Motors
                        </div>
                        <div className="text-2xl font-bold">{dt.minMotors}</div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="text-xs text-muted-foreground">
                          Build Time
                        </div>
                        <div className="text-2xl font-bold">
                          {dt.buildTimeHours}
                          <span className="text-sm font-normal">h</span>
                        </div>
                      </div>
                    </div>

                    {/* Pros */}
                    <div>
                      <h4 className="mb-2 font-semibold text-sm">Pros</h4>
                      <ul className="space-y-1">
                        {dt.pros.slice(0, 3).map((pro, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <span className="text-green-500">✓</span>
                            <span className="text-muted-foreground">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="mb-2 font-semibold text-sm">Cons</h4>
                      <ul className="space-y-1">
                        {dt.cons.slice(0, 3).map((con, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <span className="text-destructive">✗</span>
                            <span className="text-muted-foreground">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full group">
                    <Link href={`/drivetrains/${key}`}>
                      View Complete Guide
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Quick Comparison Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-lg border bg-muted/50 p-8"
      >
        <h2 className="mb-6 text-2xl font-bold">Need Help Choosing?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-primary">
              Choose Tank Drive if:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• You&apos;re new to robotics</li>
              <li>• You need maximum pushing power</li>
              <li>• You have a limited budget</li>
              <li>• Your game prioritizes speed over precision</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-primary">
              Choose Mecanum Drive if:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• You need to strafe sideways</li>
              <li>• Your game has tight spaces</li>
              <li>• You want field-centric control</li>
              <li>• You have programming experience</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-primary">
              Choose Swerve Drive if:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• You have significant experience</li>
              <li>• Budget is not a concern ($500-1500)</li>
              <li>• You want the ultimate in maneuverability</li>
              <li>• You&apos;re competing in FRC</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-primary">
              Choose Omni Drive if:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• You want holonomic movement</li>
              <li>• You need more speed than mecanum</li>
              <li>• You want simpler programming than mecanum</li>
              <li>• You want a balanced approach</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <h2 className="mb-4 text-2xl font-bold">Ready to Design?</h2>
        <p className="mb-6 text-muted-foreground">
          Use our calculators and simulator to optimize your chosen drivetrain
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/calculators">
              Try Calculators
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/simulator">Launch Simulator</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
