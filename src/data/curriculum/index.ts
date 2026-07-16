import { DayCurriculum } from "@/models/types";
import { day01 } from "./day01";
import { day02 } from "./day02";
import { day03 } from "./day03";
import { day04 } from "./day04";
import { day05 } from "./day05";
import { buildPlaceholderDays } from "./placeholders";

export const curriculum: DayCurriculum[] = [
  day01,
  day02,
  day03,
  day04,
  day05,
  ...buildPlaceholderDays(6, 30)
];

export function getDayCurriculum(dayNumber: number): DayCurriculum | undefined {
  return curriculum.find((day) => day.dayNumber === dayNumber);
}

export const TOTAL_DAYS = 30;
