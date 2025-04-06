export interface FutureFinancialPrediction {
  income: {
    current: number;
    future: number;
  };
  asset: {
    current: number;
    future: number;
  };
  debt: {
    current: number;
    future: number;
  };
}

export interface GoalAchievementPrediction {
  title: string;
  targetAmount: number;
  targetDate: string; // "YYYY-MM-DD"
  estimatedAchievementDate: string; // "YYYY-MM-DD"
}

export interface FinancialPrediction {
  id: string;
  userId: string;
  futureFinancialPrediction: FutureFinancialPrediction;
  goalAchievementPredictions: GoalAchievementPrediction[];
  consultingPoints: string[];
}
