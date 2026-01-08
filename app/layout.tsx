import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FTC Drivetrain Mastery | Speed, Control, Precision",
  description: "Comprehensive guide to robot drivetrains for FTC, FRC, and FLL. Learn tank, mecanum, swerve, and omni drives with interactive calculators and 3D simulators.",
  keywords: ["FTC", "FRC", "FLL", "drivetrain", "mecanum", "swerve", "tank drive", "robot", "FIRST robotics"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 lg:ml-52 transition-all duration-300">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                  {children}
                </div>
              </main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
