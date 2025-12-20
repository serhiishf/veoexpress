import { useTranslations } from 'next-intl';
import { LiaPhoneSolid } from 'react-icons/lia';
import { Button } from '@mantine/core';
import { company } from '@/constants/company';

export function CallNowButton() {
  const t = useTranslations('components.call_now_button');

  return (
    <Button
      component="a"
      href={`tel:${company.contact.phoneTel}`}
      size="lg"
      variant="outline"
      leftSection={<LiaPhoneSolid size="24" />}
    >
      {t('call_now')}
    </Button>
  );
}
