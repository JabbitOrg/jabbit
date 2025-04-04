export interface FinancialDiagnosis_FinancialGoal {
    goal: string;
    recommendedGoals: string[];
    advice: string[];
}

export interface FinancialDiagnosis_FinancialRatios {
    expense: number;
    insurance: number;
    saving: number;
    investment: number;
    debtRepayment: number;
    retirement: number;
}

export interface FinancialDiagnosis_GroupComparison {
    income: {
        user: number,
        average: number,
    },
    debtRepayment: {
        user: number,
        average: number,
    },
    asset: {
        user: number,
        average: number,
    },
    expense: {
        user: number,
        average: number,
    },
    savingAndInvestment: {
        user: number,
        average: number,
    },
}

export interface FinancialDiagnosis {
    id: string;
    userId: string;
    birthYear: number;
    mainInvestmentStrategies: string[];
    mainFinancialIssues: string[];
    financialGoal: FinancialDiagnosis_FinancialGoal;
    financialRatios: FinancialDiagnosis_FinancialRatios;
    isMarried: boolean;
    hasChildren: boolean;
    groupComparison: FinancialDiagnosis_GroupComparison;
}