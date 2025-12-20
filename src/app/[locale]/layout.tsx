import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono, Roboto, Open_Sans } from 'next/font/google';
import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';
import { NextIntlClientProvider } from 'next-intl';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
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
  fontFamilyMonospace: 'var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  components: {
    Button: { defaultProps: { radius: 12 } },
  },
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${open_sans.variable} ${roboto.variable} ${geistMono.variable}`}>
        <MantineProvider theme={theme} forceColorScheme="light" defaultColorScheme="light">
          <NextIntlClientProvider>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
