'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button, type ButtonProps } from '@mantine/core';
import { CONTACT_FROM_SECTION_ID } from '@/constants/anchors';

type ContactFormAnchorProps = Omit<ButtonProps, 'onClick'> & {
  contact_page_href?: string;
  label?: string;
};

//TODO: implement translations here
export function ContactFormAnchor({
  contact_page_href = '/contact',
  label = 'Send a message',
  ...button_props
}: ContactFormAnchorProps) {
  const router = useRouter();

  const handle_click = useCallback(() => {
    const contact_form_element = document.getElementById(CONTACT_FROM_SECTION_ID);

    if (contact_form_element) {
      contact_form_element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    router.push(`${contact_page_href}#${CONTACT_FROM_SECTION_ID}`);
  }, [router, contact_page_href]);

  return (
    <Button onClick={handle_click} {...button_props}>
      {label}
    </Button>
  );
}
