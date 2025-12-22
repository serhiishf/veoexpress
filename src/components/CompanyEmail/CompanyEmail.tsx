import { Anchor, Text, type AnchorProps } from '@mantine/core';
import { company } from '@/constants/company';

export function CompanyEmail({ ...anchorProps }: AnchorProps) {
  return (
    <Anchor
      href={`mailto:${company.contact.email}`}
      underline="never"
      c="inherit"
      {...anchorProps}
      style={{
        display: 'inline-flex',
        width: 'fit-content',
      }}
    >
      <Text fz="md" component="span" size="lg">
        {company.contact.email}
      </Text>
    </Anchor>
  );
}
