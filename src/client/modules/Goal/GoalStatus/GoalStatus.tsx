import { Stack } from '@chakra-ui/react';
import GoalStatusCard from './components/GoalStatusCard';

export interface GoalStatus {
  title: string;
  description: string;
  goal: number;
  current: number | null;
}

const GOAL_STATUS_LIST = [
  {
    title: '단기 목표 ㅣ 1년 (~2026년)',
    description: '투자 시드 모으고 수익내기',
    goal: 10000000,
    current: null,
  },
  {
    title: '중기 목표 ㅣ 4년 (~2029년)',
    description: '내 집 마련 자금 모으기',
    goal: 800000000,
    current: 3250000,
  },
  {
    title: '장기 목표 ㅣ 10년 (~2033년)',
    description: '내 집 마련',
    goal: 900000000,
    current: 800043,
  },
];

function GoalStatus() {
  return (
    <Stack gap="20px" p="20px">
      {GOAL_STATUS_LIST.map((goal) => (
        <GoalStatusCard key={goal.title} data={goal} />
      ))}
    </Stack>
  );
}

export default GoalStatus;
