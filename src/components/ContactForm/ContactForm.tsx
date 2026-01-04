'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button, Checkbox, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { routing } from '@/i18n/routing';
import { CardWrapper } from '../CardWrapper/CardWrapper';

const netlifyFormName = 'contact';
const netlifyPostEndpoint = '/netlify-forms.html';

function buildSuccessPath(locale: string): string {
  return locale === routing.defaultLocale ? '/success' : `/${locale}/success`;
}

function formDataToUrlEncoded(formData: FormData): string {
  const params = new URLSearchParams();

  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') {
      params.append(key, value);
    }
  }

  return params.toString();
}

type ContactFormProps = {
  id?: string;
};

export function ContactForm({ id }: ContactFormProps) {
  const t = useTranslations('components.contact_form');
  const locale = useLocale();
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pagePath = useMemo(() => {
    const queryString = searchParams.toString();
    return queryString.length > 0 ? `${pathname}?${queryString}` : pathname;
  }, [pathname, searchParams]);

  const [pageUrl, setPageUrl] = useState('');
  const [pageReferrer, setPageReferrer] = useState('');

  useEffect(() => {
    setPageReferrer(document.referrer);

    const origin = window.location.origin;
    setPageUrl(`${origin}${pagePath}`);
  }, [pagePath]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      phone: '',
      message: '',
      on_site_estimate: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : t('email_input.validate_error')),
      message: (value) => (value.trim().length >= 10 ? null : t('message_input.validate_error')),
    },
  });

  const handleSubmit = form.onSubmit(async (values, event) => {
    if (!event) return;

    event.preventDefault();

    try {
      setIsSubmitting(true);

      const htmlForm = event.currentTarget;
      const formData = new FormData(htmlForm);

      // Ensure stable, single values (no duplicates)
      formData.set('on_site_estimate', values.on_site_estimate ? 'true' : 'false');

      // Add current page context for Netlify + GTM analysis
      formData.set('page_locale', locale);
      formData.set('page_path', pagePath);
      formData.set('page_url', window.location.href);
      formData.set('page_referrer', document.referrer);

      // POST to a static asset (public/) so Netlify Forms can capture it
      const response = await fetch(netlifyPostEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataToUrlEncoded(formData),
      });

      if (!response.ok) {
        setIsSubmitting(false);
        return;
      }

      router.push(buildSuccessPath(locale));
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <CardWrapper>
      <form
        name={netlifyFormName}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        id={id}
        // GTM-friendly attributes (easy CSS selectors / DOM variables)
        data-form-name={netlifyFormName}
        data-form-locale={locale}
        data-form-page-path={pagePath}
        data-form-page-url={pageUrl}
      >
        {/* Required for Netlify JS forms */}
        <input type="hidden" name="form-name" value={netlifyFormName} />
        <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

        {/* These will be stored/sent by Netlify together with the submission */}
        <input type="hidden" name="page_locale" value={locale} />
        <input type="hidden" name="page_path" value={pagePath} />
        <input type="hidden" name="page_url" value={pageUrl} />
        <input type="hidden" name="page_referrer" value={pageReferrer} />

        <Stack>
          <TextInput
            withAsterisk
            label={t('email_input.label')}
            placeholder={t('email_input.placeholder')}
            description={t('email_input.description')}
            key={form.key('email')}
            size="md"
            inputMode="email"
            autoComplete="email"
            {...form.getInputProps('email')}
            name="email"
          />

          <TextInput
            label={t('phone_input.label')}
            placeholder={t('phone_input.placeholder')}
            description={t('phone_input.description')}
            key={form.key('phone')}
            size="md"
            inputMode="tel"
            type="tel"
            autoComplete="tel"
            {...form.getInputProps('phone')}
            name="phone"
          />

          <Textarea
            withAsterisk
            label={t('message_input.label')}
            placeholder={t('message_input.placeholder')}
            description={t('message_input.description')}
            autosize
            minRows={8}
            key={form.key('message')}
            size="md"
            {...form.getInputProps('message')}
            name="message"
          />

          <Group justify="space-between" mt="md">
            <Checkbox
              label={t('on_site_estimate_checkbox.label')}
              description={t('on_site_estimate_checkbox.description')}
              key={form.key('on_site_estimate')}
              size="md"
              {...form.getInputProps('on_site_estimate', { type: 'checkbox' })}
              name="on_site_estimate"
              value="true"
            />

            <Button type="submit" size="lg" loading={isSubmitting}>
              {t('confirmation_button.label')}
            </Button>
          </Group>
        </Stack>
      </form>
    </CardWrapper>
  );
}
