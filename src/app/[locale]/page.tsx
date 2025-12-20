import Image from 'next/image';
import { Container } from '@mantine/core';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { HomeHero } from '@/components/HomeHero/HomeHero';
import { PricingSection } from '@/components/PricingSection/PricingSection';
import { ServicesSection } from '@/components/ServicesSection/ServicesSection';
import { TrustedBySection } from '@/components/TrustedBySection/TrustedBySection';
import { WhyWeSection } from '@/components/WhyWeSection/WhyWeSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Container size="xl">
        <HomeHero background="grey"></HomeHero>
        <ServicesSection></ServicesSection>
        <WhyWeSection background="grey"></WhyWeSection>
        <PricingSection></PricingSection>
        <TrustedBySection background="grey"></TrustedBySection>
        <ContactSection></ContactSection>
      </Container>
    </main>
  );
}
