'use client';

import { Button, ButtonGroup, Steps } from '@chakra-ui/react';

const steps = [
  {
    title: 'Step 1',
  },
  {
    title: 'Step 2',
  },
  {
    title: 'Step 3',
  },
  {
    title: 'Step 4',
  },
  {
    title: 'Step 5',
  },
];

function InfoPage() {
  return (
    <Steps.Root defaultStep={0} count={steps.length}>
      <Steps.List width="640px" alignSelf="center" mb="50px">
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index}>
            <Steps.Indicator
              borderWidth="1px"
              bgColor="transparent"
              borderColor="#d9d9d9"
              color="main.black_3"
              _current={{
                borderColor: 'primary',
                bgColor: 'primary',
                color: 'main.white_1',
              }}
              _complete={{
                borderColor: 'primary',
                bgColor: 'primary',
                color: 'main.white_1',
              }}
            >
              <Steps.Status incomplete={index + 1} complete={index + 1} />
            </Steps.Indicator>
            <Steps.Separator
              marginInline="0px"
              height="6px"
              borderBlock="1px solid"
              borderColor="#d9d9d9"
              bgColor="transparent"
              _complete={{
                borderColor: 'primary',
                bgColor: 'primary',
              }}
            />
          </Steps.Item>
        ))}
      </Steps.List>

      {/* TODO: add contents */}
      {steps.map((step, index) => (
        <Steps.Content key={index} index={index}>
          content
        </Steps.Content>
      ))}

      <ButtonGroup alignSelf="center">
        <Steps.PrevTrigger asChild>
          <Button
            variant="solid"
            textStyle="sm"
            bgColor="#A9ABBC"
            mt="72px"
            w="112px"
            h="49px"
            borderRadius="16px"
          >
            이전으로
          </Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button
            variant="solid"
            textStyle="sm"
            bgColor="primary"
            mt="72px"
            w="112px"
            h="49px"
            borderRadius="16px"
          >
            다음으로
          </Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  );
}

export default InfoPage;
