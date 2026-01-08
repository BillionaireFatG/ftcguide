"use client";

import Link from "next/link";
import { useSidebar } from "./SidebarContext";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { isCollapsed } = useSidebar();

  return (
    <footer
      className={cn(
        "border-t border-border bg-background transition-all duration-300",
        isCollapsed ? "lg:ml-12" : "lg:ml-52"
      )}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* About */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">FTC Drivetrain</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Comprehensive guide for FIRST competitions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/drivetrains" className="text-muted-foreground hover:text-foreground transition-colors">
                  Drivetrains
                </Link>
              </li>
              <li>
                <Link href="/control-theory" className="text-muted-foreground hover:text-foreground transition-colors">
                  Control Theory
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-muted-foreground hover:text-foreground transition-colors">
                  Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/motor-selection" className="text-muted-foreground hover:text-foreground transition-colors">
                  Motor Selection
                </Link>
              </li>
              <li>
                <Link href="/testing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testing
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Credits
                </Link>
              </li>
            </ul>
          </div>

          {/* Credits */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Credits</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Entradox Robotics, CTRL ALT FTC, FIRST Official Docs
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© {currentYear} FTC Drivetrain Mastery. Educational resource.</p>
        </div>
      </div>
    </footer>
  );
}
