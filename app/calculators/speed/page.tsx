"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateSpeed } from "@/lib/calculations/speed";
import { formatNumber } from "@/lib/utils";

const commonMotors = [
  { name: "REV HD Hex", rpm: 6000, torque: 0.17 },
  { name: "REV Core Hex", rpm: 9000, torque: 0.09 },
  { name: "NeveRest 20", rpm: 340, torque: 0.56 },
  { name: "NeveRest 40", rpm: 160, torque: 1.10 },
  { name: "NeveRest 60", rpm: 105, torque: 1.67 },
  { name: "Yellow Jacket 5.2:1", rpm: 1150, torque: 1.40 },
  { name: "Yellow Jacket 13.7:1", rpm: 435, torque: 3.70 },
];

const commonWheels = [
  { size: 2, name: '2" Wheel' },
  { size: 3, name: '3" Wheel' },
  { size: 4, name: '4" Wheel' },
  { size: 6, name: '6" Wheel' },
];

export default function SpeedCalculatorPage() {
  const [motorRPM, setMotorRPM] = useState(6000);
  const [wheelDiameter, setWheelDiameter] = useState(4);
  const [gearRatio, setGearRatio] = useState(1);

  const result = calculateSpeed(motorRPM, wheelDiameter, gearRatio);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/calculators" className="hover:text-primary transition-colors">
            Calculators
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Speed Calculator</span>
        </nav>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold sm:text-5xl">Speed Calculator</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Calculate maximum robot speed based on motor RPM, wheel size, and gear
          ratio
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>
                Enter your drivetrain specifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Motor Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Motor (Common FTC Motors)
                </label>
                <select
                  className="w-full rounded-lg border bg-background px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  onChange={(e) => setMotorRPM(Number(e.target.value))}
                  value={motorRPM}
                >
                  {commonMotors.map((motor) => (
                    <option key={motor.name} value={motor.rpm}>
                      {motor.name} ({motor.rpm} RPM)
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom RPM */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Motor Free Speed (RPM)
                </label>
                <input
                  type="number"
                  className="w-full rounded-lg border bg-background px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={motorRPM}
                  onChange={(e) => setMotorRPM(Number(e.target.value))}
                  min={0}
                  max={20000}
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  The no-load speed of your motor
                </p>
              </div>

              {/* Wheel Diameter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Wheel Diameter (inches)
                </label>
                <div className="flex gap-2 mb-2">
                  {commonWheels.map((wheel) => (
                    <button
                      key={wheel.size}
                      onClick={() => setWheelDiameter(wheel.size)}
                      className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                        wheelDiameter === wheel.size
                          ? "bg-primary text-primary-foreground"
                          : "bg-background hover:bg-accent"
                      }`}
                    >
                      {wheel.name}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  className="w-full rounded-lg border bg-background px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={wheelDiameter}
                  onChange={(e) => setWheelDiameter(Number(e.target.value))}
                  min={1}
                  max={12}
                  step={0.1}
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Diameter of your drive wheels
                </p>
              </div>

              {/* Gear Ratio */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Gear Ratio (reduction)
                </label>
                <input
                  type="number"
                  className="w-full rounded-lg border bg-background px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={gearRatio}
                  onChange={(e) => setGearRatio(Number(e.target.value))}
                  min={0.1}
                  max={100}
                  step={0.1}
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Enter 1 for direct drive, 2 for 2:1 reduction, 0.5 for 1:2 overdrive
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Maximum Speed</CardTitle>
              <CardDescription>
                Theoretical maximum speed (no-load)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-6 text-center">
                <div className="text-5xl font-bold text-primary">
                  {formatNumber(result.speedFPS, 2)}
                </div>
                <div className="mt-2 text-lg text-muted-foreground">ft/s</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-4 text-center">
                  <div className="text-2xl font-bold">
                    {formatNumber(result.speedMPS, 2)}
                  </div>
                  <div className="text-sm text-muted-foreground">m/s</div>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="text-2xl font-bold">
                    {formatNumber(result.speedMPH, 2)}
                  </div>
                  <div className="text-sm text-muted-foreground">mph</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Field Performance</CardTitle>
              <CardDescription>
                Time to cross 12x12 ft FTC field
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border bg-muted/50 p-6 text-center">
                <div className="text-4xl font-bold">
                  {formatNumber(result.timeToCross12Ft, 2)}
                </div>
                <div className="mt-2 text-lg text-muted-foreground">seconds</div>
              </div>
              <div className="mt-4 rounded-lg bg-primary/10 p-4">
                <div className="flex items-start space-x-2">
                  <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div className="text-sm text-foreground/90">
                    <strong>Note:</strong> This is theoretical maximum speed. Actual
                    speed will be lower due to motor load, battery voltage, and robot
                    weight. Expect 60-80% of calculated speed under load.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommendation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {result.speedFPS > 10 && (
                  <p className="text-green-600 dark:text-green-400">
                    ✓ Excellent for fast-paced games requiring quick field traversal
                  </p>
                )}
                {result.speedFPS >= 6 && result.speedFPS <= 10 && (
                  <p className="text-primary">
                    ✓ Good balanced speed for most FTC games
                  </p>
                )}
                {result.speedFPS < 6 && (
                  <p className="text-yellow-600 dark:text-yellow-400">
                    ⚠ May be too slow for competitive play. Consider higher speed or
                    lower gear ratio.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Formula Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Card>
          <CardHeader>
            <CardTitle>How It&apos;s Calculated</CardTitle>
            <CardDescription>Understanding the formula</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm">
                Speed (ft/s) = (Motor RPM × π × Wheel Diameter) / (Gear Ratio × 12
                × 60)
              </code>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong className="text-foreground">Step 1:</strong> Calculate wheel
                RPM by dividing motor RPM by gear ratio
              </p>
              <p>
                <strong className="text-foreground">Step 2:</strong> Calculate wheel
                circumference (π × diameter)
              </p>
              <p>
                <strong className="text-foreground">Step 3:</strong> Multiply wheel
                RPM by circumference, divide by 12 (inches to feet) and 60 (minutes
                to seconds)
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t pt-8">
        <Button asChild variant="ghost">
          <Link href="/calculators">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Link>
        </Button>
        <Button asChild>
          <Link href="/calculators/torque">
            Next: Torque Calculator
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
