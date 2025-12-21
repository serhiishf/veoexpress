'use client';

import { useTranslations } from 'next-intl';
import { Button, Checkbox, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { CardWrapper } from '../CardWrapper/CardWrapper';

const NETLIFY_FORM_NAME = 'contact';

export function ContactForm() {
  const t = useTranslations('components.contact_form');

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

  return (
    <CardWrapper>
      <form
        name={NETLIFY_FORM_NAME}
        method="POST"
        action="success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        encType="application/x-www-form-urlencoded"
        noValidate
        onSubmit={form.onSubmit((_values, event) => {
          if (!event) return;
          event.currentTarget.submit(); // native submit -> Netlify handles it
        })}
      >
        {/* Required for Netlify Forms */}
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

          <Group justify="space-between" mt="md">
            <Checkbox
              label={t('on_site_estimate_checkbox.label')}
              description={t('on_site_estimate_checkbox.description')}
              key={form.key('on_site_estimate')}
              size="md"
              {...form.getInputProps('on_site_estimate', { type: 'checkbox' })}
              name="on_site_estimate"
            />

            <Button type="submit" size="lg">
              {t('confirmation_button.label')}
            </Button>
          </Group>
        </Stack>
      </form>
    </CardWrapper>
  );
}
