import { DayCurriculum } from "@/models/types";
import { curriculum as curriculum6e4e } from "./6e-4e";
import { curriculum as curriculumCpCe1 } from "./cp-ce1";
import { curriculum as curriculumCe1Ce2 } from "./ce1-ce2";
import { curriculum as curriculumCe2Cm1 } from "./ce2-cm1";
import { curriculum as curriculumCm1Cm2 } from "./cm1-cm2";
import { curriculum as curriculumCm2_6e } from "./cm2-6e";

export const curriculumBySchoolLevel: Record<string, DayCurriculum[]> = {
  "cp-ce1": curriculumCpCe1,
  "ce1-ce2": curriculumCe1Ce2,
  "ce2-cm1": curriculumCe2Cm1,
  "cm1-cm2": curriculumCm1Cm2,
  "cm2-6e": curriculumCm2_6e,
  "6e-4e": curriculum6e4e
};

export function getDayCurriculum(
  schoolLevelCode: string,
  dayNumber: number
): DayCurriculum | undefined {
  const curriculum = curriculumBySchoolLevel[schoolLevelCode];
  return curriculum?.find((day) => day.dayNumber === dayNumber);
}

export const TOTAL_DAYS = 30;
