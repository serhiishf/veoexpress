import { Text, Flex, Stack, Button, Anchor } from '@mantine/core';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';
import { LiaPhoneSolid } from 'react-icons/lia';

const PHONE_LABEL = '+372 53 06 9999';
const PHONE_TEL = '+37253069999';
const EMAIL = 'info@veoexpress.ee';

export function ContactCard() {
  return (
    <CardWrapper>
      <Flex gap={28} align="center" justify={{ base: 'center', sm: 'space-between' }} direction={{ base: 'column', sm: 'row' }}>
        <Stack>
          <Anchor fw="bold" fz="xl" href={`tel:${PHONE_TEL}`} underline="never" style={{ fontWeight: 700, fontSize: 'var(--mantine-font-size-xl)' }} c="inherit">
            {PHONE_LABEL}
          </Anchor>
          <Anchor href={`mailto:${EMAIL}`} underline="never" c="inherit">
            <Text fz="md" component="span" size="lg">
              {EMAIL}
            </Text>
          </Anchor>
          <Text>Tallinn • Harjumaa • Estonia</Text>
        </Stack>
        <Stack>
          <RequestQuoteButton size="lg"></RequestQuoteButton>
          <Button component="a" href={`tel:${PHONE_TEL}`} size="lg" variant="outline" leftSection={<LiaPhoneSolid size="24" />}>
            Call Now
          </Button>
        </Stack>
      </Flex>
    </CardWrapper>
  );
}
