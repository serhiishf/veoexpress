import { Anchor, type AnchorProps } from '@mantine/core';
import { company } from '@/constants/company';

export function CompanyPhone({ ...anchorProps }: AnchorProps) {
  return (
    <Anchor
      fw="bold"
      fz="xl"
      href={`tel:${company.contact.phoneTel}`}
      underline="never"
      style={{
        fontWeight: 700,
        fontSize: 'var(--mantine-font-size-xl)',
        display: 'inline-flex',
        width: 'fit-content',
      }}
      c="inherit"
      {...anchorProps}
    >
      {company.contact.phoneLabel}
    </Anchor>
  );
}
