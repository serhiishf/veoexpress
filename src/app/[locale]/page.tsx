import { ContactSection } from '@/components/ContactSection/ContactSection';
import { HomeHeroSection } from '@/components/HomeHeroSection/HomeHeroSection';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { PricingSection } from '@/components/PricingSection/PricingSection';
import { ServicesSection } from '@/components/ServicesSection/ServicesSection';
import { TrustedBySection } from '@/components/TrustedBySection/TrustedBySection';
import { WhyWeSection } from '@/components/WhyWeSection/WhyWeSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <PageContainer>
      <HomeHeroSection background="grey"></HomeHeroSection>
      <ServicesSection></ServicesSection>
      <WhyWeSection background="grey"></WhyWeSection>
      <PricingSection></PricingSection>
      <TrustedBySection background="grey"></TrustedBySection>
      <ContactSection></ContactSection>
    </PageContainer>
  );
}
