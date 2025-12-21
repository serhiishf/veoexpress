import { Container, type ContainerProps } from '@mantine/core';

type PageContainerProps = ContainerProps & {
  children: React.ReactNode;
};

export function PageContainer({ children, ...containerProps }: PageContainerProps) {
  return (
    <Container size="xl" p={0} h="100%" {...containerProps}>
      {children}
    </Container>
  );
}
