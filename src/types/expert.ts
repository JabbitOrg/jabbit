export interface Experience {
  status: string;
  description: string;
}

export interface Activity {
  type: string;
  year: number;
  description: string;
}

export interface Expert {
  id: number;
  name: string;
  certificates: string[];
  specialties: string[];
  experiences: Experience[];
  activities: Activity[];
  isVerified: boolean;
  profileImageUrl?: string;
}
