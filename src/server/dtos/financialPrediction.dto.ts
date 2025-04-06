import {
  FinancialPrediction,
  FutureFinancialPrediction,
  GoalAchievementPrediction,
} from '../domains/financialPrediction';

export class FinancialPredictionDto {
  id: string;
  userId: string;
  futureFinancialPrediction: FutureFinancialPrediction;
  goalAchievementPredictions: GoalAchievementPrediction[];
  consultingPoints: string[];

  constructor(financialDiagnosis: FinancialPrediction) {
    this.id = financialDiagnosis.id;
    this.userId = financialDiagnosis.userId;
    this.futureFinancialPrediction =
      financialDiagnosis.futureFinancialPrediction;
    this.goalAchievementPredictions =
      financialDiagnosis.goalAchievementPredictions;
    this.consultingPoints = financialDiagnosis.consultingPoints;
  }
}
