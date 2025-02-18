import { Expert } from '@/src/types/expert';

/**
 * Google Sheet 응답 (Row 데이터) → Expert 객체로 변환하는 DTO 역할
 */
export class ExpertSimpleDto {
  id: string;
  name: string;
  isVerified: boolean;
  specialties: string[];
  profileImageUrl: string | undefined;

  constructor(expert: Expert) {
    this.id = expert.id;
    this.name = expert.name;
    this.isVerified = expert.isVerified;
    this.specialties = expert.specialties;
    this.profileImageUrl = expert.profileImageUrl;
  }
}
