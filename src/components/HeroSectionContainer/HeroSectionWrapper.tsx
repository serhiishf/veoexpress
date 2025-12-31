import { Group, Image, SimpleGrid, Stack, Text } from '@mantine/core';
import { SectionProps } from '../../types/shared';
import { BulletPointContainer } from '../BulletPointContainer/BulletPointContainer';
import { CallNowButton } from '../CallNowButton/CallNowButton';
import { ContactFormAnchor } from '../ContactFormAnchor/ContactFormAnchor';
import { RequestQuoteButton } from '../RequestQuoteButton/RequestQuoteButton';
import { SectionDescription } from '../SectionDesctiption/SectionDescription';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { ViewServicesButton } from '../ViewServicesButton/ViewServicesButton';

type HeroSectionContainerProps = SectionProps & {
  title: string;
  subtitle: string;
  description?: string;
  bulletPoints?: string[];
  callToActions?: 'general' | 'specified';
  imageSrc?: string;
  imageAlt?: string;
};

export function HeroSectionContainer({
  title,
  subtitle,
  description,
  bulletPoints,
  callToActions = 'specified',
  imageSrc,
  imageAlt,
  ...sectionProps
}: HeroSectionContainerProps) {
  return (
    <SectionWrapper {...sectionProps}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 'xl', md: 48 }} verticalSpacing="sm">
        <Stack gap="xl">
          <SectionHeader title={title} subtitle={subtitle}></SectionHeader>
          <SectionDescription>{description}</SectionDescription>

          {bulletPoints && (
            <Stack>
              {bulletPoints.map((bulletPoint) => (
                <BulletPointContainer key={bulletPoint}>{bulletPoint}</BulletPointContainer>
              ))}
            </Stack>
          )}

          {callToActions === 'specified' && (
            <Group>
              <ContactFormAnchor></ContactFormAnchor>
              <CallNowButton></CallNowButton>
            </Group>
          )}
          {callToActions === 'general' && (
            <Group>
              <RequestQuoteButton size="lg"></RequestQuoteButton>
              <ViewServicesButton size="lg"></ViewServicesButton>
            </Group>
          )}
        </Stack>
        <Stack justify="center">
          <Image src={imageSrc} alt={imageAlt}></Image>
        </Stack>
      </SimpleGrid>
    </SectionWrapper>
  );
}
