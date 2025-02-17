import { Expert, Activity, Experience } from '@/src/types/expert';

export class ExpertMapper {
  static fromSheetRow(row: string[]): Expert {
    return {
      id: Number(row[0]),
      name: row[1],
      certificates: JSON.parse(row[2]) as string[],
      specialties: JSON.parse(row[3]) as string[],
      experiences: JSON.parse(row[4]) as Experience[],
      activities: JSON.parse(row[5]) as Activity[],
      isVerified: row[6] === 'TRUE',
      profileImageUrl: row[7] || undefined,
    };
  }
}
