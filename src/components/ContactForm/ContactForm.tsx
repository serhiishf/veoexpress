'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button, Checkbox, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { routing } from '@/i18n/routing';
import { CardWrapper } from '../CardWrapper/CardWrapper';

const NETLIFY_FORM_NAME = 'contact';
const NETLIFY_POST_ENDPOINT = '/netlify-forms.html';

function build_success_path(locale: string): string {
  return locale === routing.defaultLocale ? '/success' : `/${locale}/success`;
}

function form_data_to_url_encoded(form_data: FormData): string {
  const params = new URLSearchParams();

  for (const [key, value] of form_data.entries()) {
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

  const [is_submitting, set_is_submitting] = useState(false);

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

  const handle_submit = form.onSubmit(async (_values, event) => {
    if (!event) return;

    event.preventDefault();

    try {
      set_is_submitting(true);

      const html_form = event.currentTarget;
      const form_data = new FormData(html_form);

      // POST to a static asset (public/) so Netlify Forms can capture it
      const response = await fetch(NETLIFY_POST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form_data_to_url_encoded(form_data),
      });

      if (!response.ok) {
        // If you want: show Mantine notification here
        set_is_submitting(false);
        return;
      }

      router.push(build_success_path(locale));
    } finally {
      set_is_submitting(false);
    }
  });

  return (
    <CardWrapper>
      <form
        name={NETLIFY_FORM_NAME}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handle_submit}
        id={id}
      >
        {/* Required for Netlify JS forms */}
        <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
        <input
          type="text"
          name="bot-field"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: 'none' }}
        />

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

          {/* Ensure the field is always present in submission */}
          <input type="hidden" name="on_site_estimate" value="false" />

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

            <Button type="submit" size="lg" loading={is_submitting}>
              {t('confirmation_button.label')}
            </Button>
          </Group>
        </Stack>
      </form>
    </CardWrapper>
  );
}
