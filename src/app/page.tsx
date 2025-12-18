import HeroSection from '@/components/hero/HeroSection';
import SelectedWorks from '@/components/work/SelectedWorks';
import ExpertiseSection from '@/components/expertise/ExpertiseSection';
import ProcessSection from '@/components/process/ProcessSection';
import QuestionsSection from '@/components/questions/QuestionsSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SelectedWorks />
      <ExpertiseSection />
      <ProcessSection />
      <QuestionsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
