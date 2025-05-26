import { IDENTIFIER_TO_PATH_MAP } from './routes';

export const GUIDE_BUTTONS = {
  goal: {
    title: '루틴 생성 기준',
    description: '이 루틴, 왜 따라야 하나요?',
    link: IDENTIFIER_TO_PATH_MAP['GOAL_GUIDE'],
  },
  status: {
    title: '가계부 작성 이유',
    description: '가계부, 귀찮은데 왜 써야 하나요?',
    link: IDENTIFIER_TO_PATH_MAP['MONEY_TRACKER_GUIDE'],
  },
};
