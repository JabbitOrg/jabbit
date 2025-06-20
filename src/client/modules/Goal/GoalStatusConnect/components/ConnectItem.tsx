import { Flex, Checkbox, Stack, Text } from '@chakra-ui/react';
import { ConnectableAsset } from '../GoalStatusConnect';

interface ConnectItemProps extends Checkbox.RootProps {
  data: ConnectableAsset;
}

const CHECKBOX_STYLE = {
  completed: {
    box: {
      bgColor: 'blue_gray.100',
      color: 'blue_gray.400',
    },
    checkbox: {
      _checked: {
        bgColor: 'blue_gray.400',
        borderColor: 'blue_gray.400',
      },
    },
  },
  uncompleted: {
    box: {
      bgColor: 'app_background',
    },
    checkbox: {
      _checked: {
        bgColor: 'brand.blue',
        borderColor: 'brand.blue',
      },
    },
  },
};

function ConnectItem({ data, ...props }: ConnectItemProps) {
  const { type, description, amount } = data;

  const checkboxStyle =
    CHECKBOX_STYLE[props.checked ? 'completed' : 'uncompleted'];

  return (
    <Flex
      alignItems="center"
      px="16px"
      py="12px"
      borderRadius="16px"
      {...checkboxStyle.box}
    >
      <Checkbox.Root
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="16px"
        variant="solid"
        {...props}
      >
        <Checkbox.Label textStyle="mobile_b1_med" display="flex" flex={1}>
          <Stack gap="8px" flex={1}>
            <Flex
              textStyle="mobile_b1_semi"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>{type}</Text>
              <Text>{amount.toLocaleString()}원</Text>
            </Flex>
            <Text textStyle="mobile_cap" color="font.700">
              {description}
            </Text>
          </Stack>
        </Checkbox.Label>
        <Checkbox.HiddenInput />
        <Checkbox.Control
          cursor="pointer"
          bgColor="brand.white"
          border="1.5px solid"
          borderColor="#C9CBCE"
          {...checkboxStyle.checkbox}
        />
      </Checkbox.Root>
    </Flex>
  );
}

export default ConnectItem;
