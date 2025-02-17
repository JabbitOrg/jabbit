import { Expert } from '../types/expert';

import { Activity, Experience } from '../types/expert';

export class ExpertDto {
  id: number;
  name: string;
  certificates: string[];
  specialties: string[];
  experiences: Experience[];
  activities: Activity[];
  isVerified: boolean;
  profileImageUrl?: string;

  constructor(expert: Expert) {
    this.id = expert.id;
    this.name = expert.name;
    this.certificates = expert.certificates;
    this.specialties = expert.specialties;
    this.experiences = expert.experiences;
    this.activities = expert.activities;
    this.isVerified = expert.isVerified;
    this.profileImageUrl = expert.profileImageUrl;
  }
}
