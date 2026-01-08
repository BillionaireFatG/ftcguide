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
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] border-r border-sidebar-border bg-sidebar transition-all duration-300 hidden lg:block",
        isCollapsed ? "w-16" : "w-72"
      )}
    >
      {/* Collapse Toggle */}
      <div className="flex h-14 items-center justify-end px-4 border-b border-sidebar-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8"
        >
          {isCollapsed ? (
            <PanelLeft className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <div className="overflow-y-auto h-[calc(100vh-8rem)] py-4">
        <div className="space-y-1 px-2">
          {navigation.map((section) => (
            <div key={section.title}>
              {section.items ? (
                // Section with sub-items
                <div>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-2 px-3 py-2",
                      isCollapsed && "justify-center px-2"
                    )}
                    onClick={() => !isCollapsed && toggleSection(section.title)}
                  >
                    <section.icon className="h-4 w-4 shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left text-sm font-medium">
                          {section.title}
                        </span>
                        {openSections.includes(section.title) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </>
                    )}
                  </Button>

                  {/* Sub-items */}
                  {!isCollapsed && openSections.includes(section.title) && (
                    <div className="ml-6 space-y-1 border-l border-sidebar-border pl-3 mt-1">
                      {section.items.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start text-sm",
                              pathname === item.href
                                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
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
                      "w-full justify-start gap-2 px-3 py-2",
                      isCollapsed && "justify-center px-2",
                      pathname === section.href && "bg-sidebar-accent"
                    )}
                  >
                    <section.icon className="h-4 w-4 shrink-0" />
                    {!isCollapsed && (
                      <span className="text-sm font-medium">{section.title}</span>
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
