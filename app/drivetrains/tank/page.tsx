"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Star,
  DollarSign,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Code,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DRIVETRAINS } from "@/lib/constants/drivetrains";

const tankDrive = DRIVETRAINS.tank;

export default function TankDrivePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href="/drivetrains"
            className="hover:text-primary transition-colors"
          >
            Drivetrains
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{tankDrive.name}</span>
        </nav>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-bold sm:text-5xl">{tankDrive.name}</h1>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center space-x-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Star className="h-4 w-4" />
              <span>{tankDrive.complexity}/5 Complexity</span>
            </span>
            <span className="flex items-center space-x-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <DollarSign className="h-4 w-4" />
              <span>{tankDrive.cost}/5 Cost</span>
            </span>
            <span className="flex items-center space-x-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Star className="h-4 w-4" />
              <span>{tankDrive.maneuverability}/5 Maneuverability</span>
            </span>
          </div>
        </div>
        <p className="text-lg text-muted-foreground">{tankDrive.description}</p>
      </motion.div>

      {/* Quick Specs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Minimum Motors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{tankDrive.minMotors}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Build Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {tankDrive.buildTimeHours}
              <span className="text-lg font-normal text-muted-foreground">h</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Programming
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < tankDrive.programmingDifficulty
                      ? "fill-primary text-primary"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {tankDrive.programmingDifficulty}/5 Difficulty
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Wheel Config
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">{tankDrive.wheelConfiguration}</div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Pros and Cons */}
      <div className="mb-12 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-500">
                <CheckCircle2 className="h-5 w-5" />
                <span>Advantages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tankDrive.pros.map((pro, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-foreground/90">{pro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-destructive">
                <XCircle className="h-5 w-5" />
                <span>Disadvantages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tankDrive.cons.map((con, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                    <span className="text-foreground/90">{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">How Tank Drive Works</CardTitle>
            <CardDescription>
              Understanding the mechanics and physics behind tank drive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Basic Principle</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tank drive, also known as differential drive, uses two independently
                controlled sets of wheels - one on each side of the robot. By varying
                the speed and direction of each side, the robot can move forward,
                backward, and turn. This is the same mechanism used in tanks and
                bulldozers, hence the name.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Movement Mechanics</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Forward/Backward:</strong> Both
                  sides rotate in the same direction at the same speed.
                </p>
                <p>
                  <strong className="text-foreground">Point Turn:</strong> One side
                  forward, the other backward at equal speeds. The robot rotates
                  around its center.
                </p>
                <p>
                  <strong className="text-foreground">Arc Turn:</strong> One side
                  moves faster than the other. The robot follows a curved path.
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-muted/50 p-6">
              <h4 className="mb-3 font-semibold">Key Physics Concept</h4>
              <p className="text-sm text-muted-foreground">
                Tank drive relies on <span className="font-semibold text-foreground">differential steering</span>. The difference in wheel velocities between the left and right sides determines the turning radius. When the difference is zero, the robot moves straight. When the difference is maximum (equal but opposite), the robot spins in place.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Programming Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <Code className="h-6 w-6" />
              <span>Programming Guide</span>
            </CardTitle>
            <CardDescription>
              Basic teleop control for tank drive in Java (FTC)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-muted p-4">
              <pre className="overflow-x-auto text-sm">
                <code className="text-foreground">{`// Tank Drive Teleop Example

public void teleopPeriodic() {
    // Get joystick inputs
    double leftPower = -gamepad1.left_stick_y;
    double rightPower = -gamepad1.right_stick_y;
    
    // Apply deadzone
    if (Math.abs(leftPower) < 0.1) leftPower = 0;
    if (Math.abs(rightPower) < 0.1) rightPower = 0;
    
    // Set motor powers
    leftFront.setPower(leftPower);
    leftRear.setPower(leftPower);
    rightFront.setPower(rightPower);
    rightRear.setPower(rightPower);
}

// Alternative: Arcade Drive
public void arcadeDrive() {
    double drive = -gamepad1.left_stick_y;  // Forward/backward
    double turn = gamepad1.right_stick_x;   // Left/right
    
    double leftPower = drive + turn;
    double rightPower = drive - turn;
    
    // Normalize if any power > 1.0
    double maxPower = Math.max(
        Math.abs(leftPower), 
        Math.abs(rightPower)
    );
    if (maxPower > 1.0) {
        leftPower /= maxPower;
        rightPower /= maxPower;
    }
    
    // Set motor powers
    leftFront.setPower(leftPower);
    leftRear.setPower(leftPower);
    rightFront.setPower(rightPower);
    rightRear.setPower(rightPower);
}`}</code>
              </pre>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Tank Drive:</strong> Left stick
                controls left side, right stick controls right side.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">Arcade Drive:</strong> One stick
                for forward/backward, another for turning. More intuitive for most
                drivers.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* When to Use */}
      <div className="mb-12 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-green-500/20 bg-green-500/5">
            <CardHeader>
              <CardTitle className="text-green-600 dark:text-green-400">
                Best For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tankDrive.bestFor.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-destructive">Avoid For</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tankDrive.avoidFor.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-lg border bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center"
      >
        <h2 className="mb-4 text-2xl font-bold">Ready to Build Your Tank Drive?</h2>
        <p className="mb-6 text-muted-foreground">
          Use our calculators to optimize your gear ratios and motor selection
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/calculators/speed">
              <Calculator className="mr-2 h-5 w-5" />
              Speed Calculator
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/motor-selection">Motor Selection Guide</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/control-theory/pid">Learn PID Control</Link>
          </Button>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t pt-8">
        <Button asChild variant="ghost">
          <Link href="/drivetrains">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Overview
          </Link>
        </Button>
        <Button asChild>
          <Link href="/drivetrains/mecanum">
            Next: Mecanum Drive
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
