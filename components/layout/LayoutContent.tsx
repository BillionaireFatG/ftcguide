"use client";

import { useSidebar } from "./SidebarContext";
import { cn } from "@/lib/utils";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <main
      className={cn(
        "flex-1 transition-all duration-300",
        isCollapsed ? "lg:ml-12" : "lg:ml-52"
      )}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </main>
  );
}
