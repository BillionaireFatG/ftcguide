import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number, decimals: number = 2): string {
  return num.toFixed(decimals);
}

export function formatSpeed(fps: number, unit: 'fps' | 'mps' | 'mph'): string {
  switch(unit) {
    case 'fps':
      return `${formatNumber(fps)} ft/s`;
    case 'mps':
      return `${formatNumber(fps * 0.3048)} m/s`;
    case 'mph':
      return `${formatNumber(fps * 0.681818)} mph`;
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
