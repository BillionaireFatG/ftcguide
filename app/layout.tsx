import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "FTC Drivetrain Mastery | Speed, Control, Precision",
  description: "Comprehensive guide to robot drivetrains for FTC, FRC, and FLL. Learn tank, mecanum, swerve, and omni drives with interactive calculators, 3D simulators, and advanced control theory.",
  keywords: "FTC, FRC, FLL, drivetrain, mecanum, swerve, tank drive, robot, FIRST robotics, PID control, control theory",
  authors: [{ name: "FTC Drivetrain Guide" }],
  openGraph: {
    title: "FTC Drivetrain Mastery",
    description: "Master robot drivetrains with our interactive guide featuring calculators, simulators, and control theory",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FTC Drivetrain Mastery",
    description: "Master robot drivetrains for FTC, FRC, and FLL competitions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
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
              <main className="flex-1 lg:ml-56">
                {children}
              </main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
