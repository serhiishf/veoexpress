import { useTranslations } from 'next-intl';
import {
  Anchor,
  Button,
  Container,
  Divider,
  Group,
  Image,
  List,
  ListItem,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';

type PrivacyPolicySectionKey =
  | 'overview'
  | 'what_data_we_collect'
  | 'how_we_use_data'
  | 'legal_basis'
  | 'data_sharing'
  | 'data_retention'
  | 'your_rights'
  | 'security'
  | 'cookies'
  | 'contact';

type PrivacyPolicySectionDefinition = {
  key: PrivacyPolicySectionKey;
  paragraphKeys: readonly string[];
  bulletKeys: readonly string[];
};

const sectionDefinitions: readonly PrivacyPolicySectionDefinition[] = [
  { key: 'overview', paragraphKeys: ['p1', 'p2'], bulletKeys: [] },
  {
    key: 'what_data_we_collect',
    paragraphKeys: ['p1', 'p2'],
    bulletKeys: ['b1', 'b2', 'b3', 'b4'],
  },
  { key: 'how_we_use_data', paragraphKeys: ['p1', 'p2'], bulletKeys: ['b1', 'b2', 'b3', 'b4'] },
  { key: 'legal_basis', paragraphKeys: ['p1'], bulletKeys: ['b1', 'b2', 'b3', 'b4'] },
  { key: 'data_sharing', paragraphKeys: ['p1', 'p2'], bulletKeys: ['b1', 'b2', 'b3'] },
  { key: 'data_retention', paragraphKeys: ['p1', 'p2'], bulletKeys: [] },
  { key: 'your_rights', paragraphKeys: ['p1'], bulletKeys: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'] },
  { key: 'security', paragraphKeys: ['p1', 'p2'], bulletKeys: [] },
  { key: 'cookies', paragraphKeys: ['p1'], bulletKeys: [] },
  { key: 'contact', paragraphKeys: ['p1'], bulletKeys: [] },
];

export default function PrivacyPolicyPage() {
  const t = useTranslations('pages.privacy_policy');

  return (
    <Container size="md" py={{ base: 48, sm: 80 }}>
      <Paper radius={28} p={{ base: 24, sm: 36 }} withBorder>
        <Stack gap="lg">
          <Stack align="center" gap="md">
            <Image
              src="/illustrations/van_with_shield.webp"
              alt={t('image_alt')}
              width={440}
              height={320}
              style={{ objectFit: 'contain' }}
            />

            <Title
              order={1}
              ta="center"
              style={{
                overflowWrap: 'anywhere',
                wordBreak: 'break-word',
                hyphens: 'auto',
              }}
            >
              {t('title')}
            </Title>

            <Text ta="center" c="dimmed">
              {t('description')}
            </Text>

            <Text size="sm" c="dimmed" ta="center">
              {t('last_updated_label')}: {t('last_updated_value')}
            </Text>

            <Group justify="center" mt="xs">
              <Button size="lg" component="a" href="/">
                {t('back_home_button')}
              </Button>

              <Button size="lg" variant="light" component="a" href="/contact">
                {t('contact_button')}
              </Button>
            </Group>
          </Stack>

          <Divider />

          <Stack gap="xl">
            {sectionDefinitions.map((section) => {
              const paragraphs = section.paragraphKeys.map((paragraphKey) =>
                t(`sections.${section.key}.paragraphs.${paragraphKey}`)
              );

              const bullets = section.bulletKeys.map((bulletKey) =>
                t(`sections.${section.key}.bullets.${bulletKey}`)
              );

              return (
                <Stack key={section.key} gap="sm">
                  <Title order={3}>{t(`sections.${section.key}.title`)}</Title>

                  {paragraphs.map((text, index) => (
                    <Text key={`${section.key}-p-${index}`} c="dimmed">
                      {text}
                    </Text>
                  ))}

                  {bullets.length > 0 ? (
                    <List spacing="xs" withPadding>
                      {bullets.map((item, index) => (
                        <ListItem key={`${section.key}-b-${index}`}>
                          <Text c="dimmed">{item}</Text>
                        </ListItem>
                      ))}
                    </List>
                  ) : null}

                  {section.key === 'cookies' ? (
                    <Text size="sm" c="dimmed">
                      {t('cookies_note')}{' '}
                      <Anchor href="/cookie-policy" underline="hover">
                        {t('cookie_policy_link_label')}
                      </Anchor>
                      .
                    </Text>
                  ) : null}
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
