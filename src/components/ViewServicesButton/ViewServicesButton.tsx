import { useTranslations } from 'next-intl';
import { Button, type MantineSize } from '@mantine/core';

type ViewServicesButtonProps = {
  size?: MantineSize;
};

export function ViewServicesButton({ size = 'md' }: ViewServicesButtonProps) {
  const t = useTranslations('components.view_services_button');

  return (
    <Button size={size} variant="outline" component="a" href="/services">
      {t('label')}
    </Button>
  );
}
