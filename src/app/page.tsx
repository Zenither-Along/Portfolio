import HeroSection from '@/components/hero/HeroSection';
import SelectedWorks from '@/components/work/SelectedWorks';
import ExpertiseSection from '@/components/expertise/ExpertiseSection';
import ProcessSection from '@/components/process/ProcessSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SelectedWorks />
      <ExpertiseSection />
      <ProcessSection />
    </main>
  );
}
