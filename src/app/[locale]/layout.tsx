import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono, Open_Sans, Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import { Alert } from '@/components/Alert/Alert';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { routing } from '@/i18n/routing';

import './globals.css';

const open_sans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'VeoExpress',
  description: 'Moving everything',
};

const theme = createTheme({
  fontFamily: 'var(--font-open-sans), sans-serif',
  headings: {
    fontFamily: 'var(--font-roboto), var(--font-karla), var(--font-open-sans), sans-serif',
  },
  fontFamilyMonospace:
    'var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  components: {
    Button: {
      defaultProps: { radius: 12 },
      styles: {
        label: {
          whiteSpace: 'normal',
          textAlign: 'center',
        },
      },
    },
  },
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${open_sans.variable} ${roboto.variable} ${geistMono.variable}`}>
        <MantineProvider theme={theme} forceColorScheme="light" defaultColorScheme="light">
          <NextIntlClientProvider>
            <Alert style={{ position: 'static', top: 0, zIndex: 2500 }}></Alert>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
