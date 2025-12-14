import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Header } from '@/components/Header/Header';
import './globals.css';

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
  fontFamily: 'Karla, sans-serif',
  components: {
    Button: {
      defaultProps: {
        radius: 12,
      },
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider theme={theme} forceColorScheme="light" defaultColorScheme="light">
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
