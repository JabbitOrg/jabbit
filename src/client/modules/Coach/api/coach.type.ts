export interface GetAiFeedbackResponse {
  statusCheckRoutine?: string;
  statusCheckBudget?: string;
  emotionCarePositive?: string;
  emotionCareNegative?: string;
  forecastAssetChange?: string;
  forecastCashFlow?: string;
  routineRecoList?: {
    name: string;
    category: string;
    frequency: string;
    description: string;
  }[];
}

export interface PostAiFeedbackRequest {
    "q1": string;
    "q2": string[];
    "q3": string[];
    "q4": string[];
    "q5": string;
}