"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Moon, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="hidden sm:inline-block">FTC Drivetrain</span>
            <span className="sm:hidden">FTC DT</span>
          </Link>
        </div>

        {/* Center: Main Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/drivetrains">
            <Button variant="ghost" className="text-sm font-medium">
              Drivetrains
            </Button>
          </Link>
          <Link href="/control-theory">
            <Button variant="ghost" className="text-sm font-medium">
              Control Theory
            </Button>
          </Link>
          <Link href="/calculators">
            <Button variant="ghost" className="text-sm font-medium">
              Calculators
            </Button>
          </Link>
          <Link href="/simulator">
            <Button variant="ghost" className="text-sm font-medium">
              Simulator
            </Button>
          </Link>
          <Link href="/resources">
            <Button variant="ghost" className="text-sm font-medium">
              Resources
            </Button>
          </Link>
        </nav>

        {/* Right: Search + Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Theme Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col space-y-1 p-4">
            <Link href="/drivetrains">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                Drivetrains
              </Button>
            </Link>
            <Link href="/control-theory">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                Control Theory
              </Button>
            </Link>
            <Link href="/calculators">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                Calculators
              </Button>
            </Link>
            <Link href="/simulator">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                Simulator
              </Button>
            </Link>
            <Link href="/resources">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
