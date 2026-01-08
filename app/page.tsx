"use client";

import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Calculator, Cpu, BookOpen } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Animated Background Paths */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaths />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4">
        {/* Hero Section */}
        <div className="max-w-5xl text-center space-y-8">
          {/* Animated Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            <span className="inline-block bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              Master Your
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              Drivetrain
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Speed, Control, and Precision for{" "}
            <span className="font-semibold text-foreground">FTC</span>,{" "}
            <span className="font-semibold text-foreground">FRC</span> &{" "}
            <span className="font-semibold text-foreground">FLL</span>
          </p>

          {/* Stats Banner */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 py-6">
            {[
              { icon: Zap, label: "4 Drivetrain Types" },
              { icon: Calculator, label: "Interactive Calculators" },
              { icon: Cpu, label: "3D Simulator" },
              { icon: BookOpen, label: "Complete Guides" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 group">
                <stat.icon className="w-5 h-5 text-muted-foreground group-hover:scale-110 group-hover:text-foreground transition-all" />
                <span className="text-sm md:text-base font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button - MAIN ENTRY POINT */}
          <div className="pt-8">
            <Link href="/drivetrains">
              <div className="inline-block group relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                
                {/* Button */}
                <Button
                  size="lg"
                  className="relative px-12 py-7 text-xl font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl transition-all duration-300 group-hover:-translate-y-1"
                >
                  <span>Enter the Guide</span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="pt-12 flex flex-wrap justify-center gap-4">
            <Link href="/calculators">
              <Button variant="outline" className="rounded-lg">
                Try Calculator
              </Button>
            </Link>
            <Link href="/simulator">
              <Button variant="outline" className="rounded-lg">
                Launch Simulator
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="ghost" className="rounded-lg">
                View Resources
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
            <div className="w-1.5 h-3 bg-muted-foreground rounded-full mx-auto animate-scroll" />
          </div>
        </div>
      </div>
    </div>
  );
}
