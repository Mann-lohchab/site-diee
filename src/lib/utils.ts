import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility to merge Tailwind + conditional classNames.
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
