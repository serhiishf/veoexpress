import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type Messages = Record<string, unknown>;

function is_record(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deep_merge_messages(base_messages: Messages, override_messages: Messages): Messages {
  const result: Messages = { ...base_messages };

  for (const [key, override_value] of Object.entries(override_messages)) {
    const base_value = result[key];

    if (is_record(base_value) && is_record(override_value)) {
      result[key] = deep_merge_messages(base_value, override_value);
      continue;
    }

    result[key] = override_value;
  }

  return result;
}

async function load_messages(locale: string): Promise<Messages> {
  const module_value = await import(`../../locales/${locale}.json`);

  if (is_record(module_value.default)) {
    return module_value.default;
  }

  return {};
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested_locale = await requestLocale;
  const locale = hasLocale(routing.locales, requested_locale)
    ? requested_locale
    : routing.defaultLocale;

  // Choose your fallback language here:
  // - routing.defaultLocale (e.g. 'et'), or
  // - 'en' if you want English as the fallback.
  const fallback_locale = routing.defaultLocale;

  const fallback_messages = await load_messages(fallback_locale);
  const locale_messages = locale === fallback_locale ? {} : await load_messages(locale);

  return {
    locale,
    messages: deep_merge_messages(fallback_messages, locale_messages),
  };
});

/* import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../locales/${locale}.json`)).default,
  };
});
 */
