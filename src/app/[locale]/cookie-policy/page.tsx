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

type CookiePolicySectionKey =
  | 'what_is_cookie'
  | 'how_we_use'
  | 'types_of_cookies'
  | 'third_party'
  | 'manage_cookies'
  | 'contact';

type CookiePolicySectionDefinition = {
  key: CookiePolicySectionKey;
  paragraphKeys: readonly string[];
  bulletKeys: readonly string[];
};

const sectionDefinitions: readonly CookiePolicySectionDefinition[] = [
  { key: 'what_is_cookie', paragraphKeys: ['p1', 'p2'], bulletKeys: [] },
  { key: 'how_we_use', paragraphKeys: ['p1', 'p2'], bulletKeys: ['b1', 'b2', 'b3'] },
  { key: 'types_of_cookies', paragraphKeys: ['p1'], bulletKeys: ['b1', 'b2', 'b3', 'b4'] },
  { key: 'third_party', paragraphKeys: ['p1', 'p2'], bulletKeys: [] },
  { key: 'manage_cookies', paragraphKeys: ['p1', 'p2'], bulletKeys: ['b1', 'b2', 'b3'] },
  { key: 'contact', paragraphKeys: ['p1'], bulletKeys: [] },
];

export default function CookiePolicyPage() {
  const t = useTranslations('pages.cookie_policy');

  return (
    <Container size="md" py={{ base: 48, sm: 80 }}>
      <Paper radius={28} p={{ base: 24, sm: 36 }} withBorder>
        <Stack gap="lg">
          <Stack align="center" gap="md">
            <Image
              src="/illustrations/van_with_cookie.webp"
              alt={t('image_alt')}
              width={440}
              height={320}
              style={{ objectFit: 'contain' }}
            />

            <Title order={1} ta="center">
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

                  {section.key === 'manage_cookies' ? (
                    <Text size="sm" c="dimmed">
                      {t('manage_note')}{' '}
                      <Anchor component="a" href="/privacy-policy" underline="hover">
                        {t('privacy_policy_link_label')}
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
