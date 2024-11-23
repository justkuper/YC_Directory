import { clsx, type ClassValue } from "clsx"; // Utility for conditional classNames
import { twMerge } from "tailwind-merge";
import { T } from "hotscript"; // Merges Tailwind CSS classes intelligently

/**
 * Utility function to combine class names with Tailwind CSS merging.
 * @param inputs - An array of class names or conditional class objects.
 * @returns A single merged class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to format a date string into a human-readable format.
 * @param date - A date string in a format compatible with `Date`.
 * @returns A formatted date string (e.g., "November 21, 2024").
 */
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}
