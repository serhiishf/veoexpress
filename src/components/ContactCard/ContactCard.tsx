import { useTranslations } from 'next-intl';
import { LiaPhoneSolid } from 'react-icons/lia';
import { Anchor, Button, Flex, Stack, Text } from '@mantine/core';
import { company } from '@/constants/company';
import { CallNowButton } from '../CallNowButton/CallNowButton';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';

export function ContactCard() {
  const t = useTranslations('components.contact_card');

  return (
    <CardWrapper>
      <Flex
        gap={28}
        align="center"
        justify={{ base: 'center', sm: 'space-between' }}
        direction={{ base: 'column', sm: 'row' }}
      >
        <Stack>
          <Anchor
            fw="bold"
            fz="xl"
            href={`tel:${company.contact.phoneTel}`}
            underline="never"
            style={{ fontWeight: 700, fontSize: 'var(--mantine-font-size-xl)' }}
            c="inherit"
          >
            {company.contact.phoneLabel}
          </Anchor>
          <Anchor href={`mailto:${company.contact.email}`} underline="never" c="inherit">
            <Text fz="md" component="span" size="lg">
              {company.contact.email}
            </Text>
          </Anchor>
          <Text>{company.workArea}</Text>
        </Stack>
        <Stack>
          <RequestQuoteButton size="lg"></RequestQuoteButton>
          <CallNowButton />
        </Stack>
      </Flex>
    </CardWrapper>
  );
}
