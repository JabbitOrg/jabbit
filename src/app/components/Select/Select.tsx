import { Portal, Select as ChakraSelect } from '@chakra-ui/react';
import { ListCollection } from '@chakra-ui/react';

const Select = ({
  options,
  placeholder,
}: {
  options: ListCollection<{ label: string; value: string }>;
  placeholder: string;
}) => {
  return (
    <ChakraSelect.Root collection={options} width="100%">
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Control>
        <ChakraSelect.Trigger borderRadius="12px" height="50px">
          <ChakraSelect.ValueText
            placeholder={placeholder}
            textStyle="xs"
            fontWeight={600}
            color="main.black_2"
          />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>
      <Portal>
        <ChakraSelect.Positioner>
          <ChakraSelect.Content w="190px" borderRadius="12px">
            {options.items.map((option) => (
              <ChakraSelect.Item
                item={option}
                key={option.value}
                textStyle="xs"
                fontWeight={600}
                color="main.black_2"
              >
                {option.label}
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </ChakraSelect.Content>
        </ChakraSelect.Positioner>
      </Portal>
    </ChakraSelect.Root>
  );
};

export default Select;
