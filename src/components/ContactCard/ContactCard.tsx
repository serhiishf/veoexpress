import { Flex, Stack, Text } from '@mantine/core';
import { company } from '@/constants/company';
import { CallNowButton } from '../CallNowButton/CallNowButton';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { CompanyEmail } from '../CompanyEmail/CompanyEmail';
import { CompanyPhone } from '../CompanyPhone/CompanyPhone';
import { CompanyWorkArea } from '../CompanyWorkArea/CompanyWorkArea';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';

export function ContactCard() {
  return (
    <CardWrapper>
      <Flex
        gap={28}
        align="center"
        justify={{ base: 'center', sm: 'space-between' }}
        direction={{ base: 'column', sm: 'row' }}
      >
        <Stack>
          <CompanyPhone></CompanyPhone>
          <CompanyEmail></CompanyEmail>
          <CompanyWorkArea></CompanyWorkArea>
        </Stack>
        <Stack>
          <RequestQuoteButton size="lg"></RequestQuoteButton>
          <CallNowButton />
        </Stack>
      </Flex>
    </CardWrapper>
  );
}
