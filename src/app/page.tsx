import Image from 'next/image';
import { Container } from '@mantine/core';
import styles from './page.module.css';
import { HomeHero } from '@/components/HomeHero/HomeHero';
import { ServicesSection } from '@/components/ServicesSection/ServicesSection';
import { WhyWeSection } from '@/components/WhyWeSection/WhyWeSection';
import { PricingSection } from '@/components/PricingSection/PricingSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { TrustedBySection } from '@/components/TrustedBySection/TrustedBySection';

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
