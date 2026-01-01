// src/components/CookieBanner/CookieBanner.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Affix, Button, Container, Group, Paper, Text, Transition } from '@mantine/core';
import { trackingConfig } from '@/libs/tracking/config.tracking';
import { grantConsentForEverything } from '@/libs/tracking/utils.tracking';

const consentCookieValue = 'accepted';
const cookieMaxAgeDays = 365;

function readCookie(cookieName: string): string | null {
  const parts = document.cookie.split('; ');
  const found = parts.find((part) => part.startsWith(`${cookieName}=`));
  if (!found) return null;
  return decodeURIComponent(found.slice(cookieName.length + 1));
}

function writeCookie(cookieName: string, value: string, maxAgeDays: number): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + maxAgeDays * 24 * 60 * 60 * 1000);

  document.cookie = [
    `${cookieName}=${encodeURIComponent(value)}`,
    `expires=${expires.toUTCString()}`,
    'path=/',
    'samesite=lax',
  ].join('; ');
}

function tryGrantConsent(): void {
  try {
    grantConsentForEverything();
  } catch (error) {
    // If gtag is not ready yet, do not crash the app.
    console.warn('[Tracking] Consent was accepted, but gtag is not ready yet.', error);
  }
}

export function CookieBanner() {
  const cookieName = trackingConfig.cookieBannerCookieName;
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('components.cookie_banner');

  useEffect(() => {
    const storedValue = readCookie(cookieName);
    const isAccepted = storedValue === consentCookieValue;

    if (isAccepted) {
      tryGrantConsent();
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
  }, [cookieName]);

  const acceptAll = () => {
    writeCookie(cookieName, consentCookieValue, cookieMaxAgeDays);
    tryGrantConsent();
    setIsVisible(false);
  };

  return (
    <Affix position={{ bottom: 0, left: 0 }} style={{ width: '100%', pointerEvents: 'none' }}>
      <Transition mounted={isVisible} transition="slide-up" duration={220} timingFunction="ease">
        {(transitionStyles) => (
          <div style={{ ...transitionStyles, pointerEvents: 'auto' }}>
            <Paper
              withBorder
              p="md"
              style={{
                borderLeft: 0,
                borderRight: 0,
                borderBottom: 0,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                backgroundImage:
                  // 'linear-gradient(270deg, rgba(255, 236, 179, 0.98) 0%, rgba(255, 214, 153, 0.90) 55%, rgba(255, 244, 214, 0.90) 100%)',
                  'linear-gradient(270deg, rgba(255, 233, 204, 0.95) 0%, rgba(255, 214, 214, 0.85) 45%, rgba(207, 231, 255, 0.85) 100%)',
              }}
            >
              <Container size="xl" p={0}>
                <Group justify="space-between" align="center" wrap="wrap" gap="md">
                  <Text size="md">{t('description')}</Text>
                  <Group gap="xl" justify="flex-end" w={{ base: '100%', sm: 'auto' }}>
                    <Button
                      size="lg"
                      radius="lg"
                      variant="outline"
                      component="a"
                      href={'/cookie-policy'}
                    >
                      {t('read_more')}
                    </Button>

                    <Button size="lg" radius="lg" onClick={acceptAll}>
                      {t('accept_button')}
                    </Button>
                  </Group>
                </Group>
              </Container>
            </Paper>
          </div>
        )}
      </Transition>
    </Affix>
  );
}
