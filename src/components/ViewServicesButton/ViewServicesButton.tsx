'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button, type MantineSize } from '@mantine/core';

type ViewServicesButtonProps = {
  size?: MantineSize;
};

export function ViewServicesButton({ size = 'md' }: ViewServicesButtonProps) {
  const t = useTranslations('components.view_services_button');
  const router = useRouter();

  return (
    <Button size={size} variant="outline" onClick={() => router.push('/services')}>
      {t('label')}
    </Button>
  );
}
