import { Fragment } from 'react';
import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import ConnectItem from './components/ConnectItem';

export interface ConnectableAsset {
  id: number;
  type: string;
  description: string;
  amount: number;
}

const CONNECTABLE_ASSETS: ConnectableAsset[] = [
  {
    id: 1,
    type: '예금',
    description: '새마을금고 3.7%, 25.11.12',
    amount: 60000000,
  },
  {
    id: 2,
    type: '적금',
    description:
      '새마을금고(1,900만, 0.1%, 새마을금고), Young하나통장 (930만, 0.1%, 하나은행) / 청년DREAM통장(9만, 0.1%, 신한은행), 농협저축예금 (250만, 0.1%), OK짠테크통장 (50만, 0.1%)',
    amount: 40000000,
  },
  {
    id: 3,
    type: '적금',
    description:
      '청년도약계좌 4.5%  (840만 원, 25.05.30 가입, 5년 만기, 하나은행) /  쏠만해적금  5%(180만 원, 25.11.06. , 1년 만기, 신한은행) / 청년처음적금 8.5% (180만 원, 25.11.06., 1년 만기,, 신한은행) / 주거래하나월복리 3.5% (150만, 26.03.22., 1년 만기) /신한토스페이적금 (30만, 25.11.04. , 6개월 만기)',
    amount: 380000,
  },
  {
    id: 4,
    type: '적금',
    description:
      '새마을금고 3.7%, 25.11.12 / 25.11.12 / 25.12.12. 만기, 1년 만기 (3,000/ 1,000 / 1,600) , 369 정기 예금 (25.10.15. 만기, 3%, 하나은행)',
    amount: 138000000,
  },
];

function GoalStatusConnect() {
  return (
    <Fragment>
      <Stack gap="16px" p="20px" pt="10px">
        <Stack gap="8px">
          <Text textStyle="mobile_h2">
            이 목표와 연동할 자산을 선택해주세요
          </Text>
          <Text textStyle="mobile_cap" color="font.600">
            2025.05 업데이트
          </Text>
        </Stack>
        <Stack gap="12px">
          {CONNECTABLE_ASSETS.map((asset) => (
            <ConnectItem key={asset.id} data={asset} />
          ))}
        </Stack>
      </Stack>

      <Flex
        position="fixed"
        bottom="18px"
        left="0"
        right="0"
        py="20px"
        zIndex="100"
        justifyContent="center"
      >
        <Button
          bgColor="brand.blue"
          borderRadius="14px"
          w="calc(100% - 40px)"
          h="62px"
        >
          설정하기
        </Button>
      </Flex>
    </Fragment>
  );
}

export default GoalStatusConnect;
