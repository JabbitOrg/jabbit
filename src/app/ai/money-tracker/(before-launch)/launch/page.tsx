import LaunchPage from '@/src/app/ai/_components/LaunchPage';

const MONEY_TRACKER_LAUNCH_PAGE_CONTENT = {
  mainTitle: '소비관리 어렵다면?\nAI가 매주 점검해드려요',
  contents: [
    {
      title: '소비 한도를 관리해드려요',
      description:
        '본인이 직접 설정한 예산에 맞춰서\n남은 소비 한도를 계산해줘요',
      image: '/assets/money_tracker_launch_1.png',
    },
    {
      title: '소비 흐름을 한 눈에 볼 수 있어요',
      description: '이번 달 전체 지출과 수입을\n한 눈에 알 수 있어요',
      image: '/assets/money_tracker_launch_2.png',
    },
    {
      title: '개인 맞춤 피드백을 제공해드려요',
      description:
        '매주 한 번, AI가 당신의 재무 습관을 분석해\n개인 맞춤형 피드백을 제공해요',
      image: '/assets/money_tracker_launch_3.png',
    },
  ],
};

function MoneyTrackerLaunchPage() {
  return <LaunchPage launchData={MONEY_TRACKER_LAUNCH_PAGE_CONTENT} />;
}

export default MoneyTrackerLaunchPage;
