"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  ChevronDown, 
  Zap, 
  Activity,
  Calculator,
  Cpu,
  BookOpen,
  Wrench,
  TestTube,
  PanelLeftClose,
  PanelLeft
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Drivetrains",
    icon: Zap,
    items: [
      { title: "Overview", href: "/drivetrains" },
      { title: "Tank Drive", href: "/drivetrains/tank" },
      { title: "Mecanum Drive", href: "/drivetrains/mecanum" },
      { title: "Swerve Drive", href: "/drivetrains/swerve" },
      { title: "Omni Drive", href: "/drivetrains/omni" },
    ],
  },
  {
    title: "Control Theory",
    icon: Activity,
    items: [
      { title: "Overview", href: "/control-theory" },
      { title: "PID Controller", href: "/control-theory/pid" },
      { title: "Feedforward", href: "/control-theory/feedforward" },
      { title: "State Feedback", href: "/control-theory/state-feedback" },
      { title: "Kalman Filter", href: "/control-theory/kalman-filter" },
      { title: "Motion Profiling", href: "/control-theory/motion-profiling" },
    ],
  },
  {
    title: "Calculators",
    icon: Calculator,
    items: [
      { title: "Speed Calculator", href: "/calculators/speed" },
      { title: "Torque Calculator", href: "/calculators/torque" },
      { title: "Gear Ratio Optimizer", href: "/calculators/gear-ratio" },
      { title: "Complete Designer", href: "/calculators/complete" },
    ],
  },
  {
    title: "Simulator",
    icon: Cpu,
    href: "/simulator",
  },
  {
    title: "Motor Selection",
    icon: Wrench,
    href: "/motor-selection",
  },
  {
    title: "Testing",
    icon: TestTube,
    href: "/testing",
  },
  {
    title: "Resources",
    icon: BookOpen,
    href: "/resources",
  },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState(["Drivetrains"]);
  const pathname = usePathname();

  const toggleSection = (title) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] border-r border-border bg-background transition-all duration-300 hidden lg:block",
        isCollapsed ? "w-12" : "w-52"
      )}
    >
      {/* Collapse Toggle */}
      <div className="flex h-10 items-center justify-end px-2 border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-6 w-6"
        >
          {isCollapsed ? (
            <PanelLeft className="h-3.5 w-3.5" />
          ) : (
            <PanelLeftClose className="h-3.5 w-3.5" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <div className="overflow-y-auto h-[calc(100vh-6.5rem)] py-2">
        <div className="space-y-0.5 px-1.5">
          {navigation.map((section) => (
            <div key={section.title}>
              {section.items ? (
                // Section with sub-items
                <div>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-2 px-2 py-1.5 h-auto font-normal hover:bg-muted",
                      isCollapsed && "justify-center px-0.5"
                    )}
                    onClick={() => !isCollapsed && toggleSection(section.title)}
                  >
                    <section.icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left text-xs font-medium text-foreground">
                          {section.title}
                        </span>
                        {openSections.includes(section.title) ? (
                          <ChevronDown className="h-3 w-3 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-3 w-3 text-muted-foreground" />
                        )}
                      </>
                    )}
                  </Button>

                  {/* Sub-items */}
                  {!isCollapsed && openSections.includes(section.title) && (
                    <div className="ml-4 space-y-0.5 border-l border-border pl-2 mt-0.5 mb-0.5">
                      {section.items.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start text-xs h-auto py-1 px-2 font-normal",
                              pathname === item.href
                                ? "bg-muted text-foreground font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                          >
                            {item.title}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Single link
                <Link href={section.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-2 px-2 py-1.5 h-auto font-normal hover:bg-muted",
                      isCollapsed && "justify-center px-0.5",
                      pathname === section.href && "bg-muted text-foreground"
                    )}
                  >
                    <section.icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    {!isCollapsed && (
                      <span className="text-xs font-medium text-foreground">{section.title}</span>
                    )}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
