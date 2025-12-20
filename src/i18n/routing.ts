import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'et', 'ru'],
  defaultLocale: 'et',
  localePrefix: 'as-needed',
});
