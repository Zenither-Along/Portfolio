import HeroSection from '@/components/hero/HeroSection';
import SelectedWorks from '@/components/work/SelectedWorks';
import ExpertiseSection from '@/components/expertise/ExpertiseSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SelectedWorks />
      <ExpertiseSection />
    </main>
  );
}
