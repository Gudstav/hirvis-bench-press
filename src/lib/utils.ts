import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lbsToKg(lbs: number): number {
  return roundToNearestPlate(lbs * 0.453592);
}

export function kgToLbs(kg: number): number {
  return Math.round(kg * 2.20462);
}

export function formatWeight(weight: number): string {
  return `${roundToNearestPlate(weight)} kg`;
}

export function roundToNearestPlate(weight: number): number {
  // Round up to nearest 2.5kg
  return Math.ceil(weight / 2.5) * 2.5;
}