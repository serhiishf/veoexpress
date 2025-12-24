import { Flex, Stack } from '@mantine/core';
import { CallNowButton } from '../CallNowButton/CallNowButton';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { CompanyEmail } from '../CompanyEmail/CompanyEmail';
import { CompanyPhone } from '../CompanyPhone/CompanyPhone';
import { CompanyWorkArea } from '../CompanyWorkArea/CompanyWorkArea';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';

type ContactCardVariant = 'full' | 'short';

type ContactCardProps = {
  variant?: ContactCardVariant;
};

function ContactDetails() {
  return (
    <Stack>
      <CompanyPhone />
      <CompanyEmail />
      <CompanyWorkArea />
    </Stack>
  );
}

export function ContactCard({ variant = 'full' }: ContactCardProps) {
  const content =
    variant === 'full' ? (
      <Flex
        gap={28}
        align="center"
        justify={{ base: 'center', sm: 'space-between' }}
        direction={{ base: 'column', sm: 'row' }}
      >
        <ContactDetails />
        <Stack>
          <RequestQuoteButton size="lg" />
          <CallNowButton />
        </Stack>
      </Flex>
    ) : (
      <Stack>
        <ContactDetails />
        <CallNowButton />
      </Stack>
    );

  return <CardWrapper>{content}</CardWrapper>;
}
