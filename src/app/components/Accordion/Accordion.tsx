import { Flex, Text } from '@chakra-ui/react';
import AccordionItemType from '../../types/accordionItem';
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from '@/src/components/ui/accordion';

interface AccordionProps {
  title?: string;
  content: Array<AccordionItemType>;
}

const Accordion = ({ title, content }: AccordionProps) => {
  if (title) {
    return (
      <Flex flexDirection="column" width="1280px">
        <Text fontSize="45px" fontWeight="600">
          {title}
        </Text>
        <AccordionRoot multiple>
          {content.map((item, index) => (
            <AccordionItem key={index} value={item.value}>
              <AccordionItemTrigger fontSize="28px" padding="44px 0">
                {item.title}
              </AccordionItemTrigger>
              <AccordionItemContent
                fontSize="23px"
                color="#666"
                paddingLeft="32px"
              >
                {item.text}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Flex>
    );
  }

  return (
    <AccordionRoot collapsible>
      {content.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
          <AccordionItemContent>{item.text}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

export default Accordion;
