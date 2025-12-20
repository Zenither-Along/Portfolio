"use client";


import Footer from "@/components/footer/Footer";
import ProfileBar from "@/components/hero/ProfileBar";
import ServicesList from "@/components/services/ServicesList";
import FloatingShapes3D from "@/components/services/FloatingShapes3D";
import ServicesHeader from "@/components/services/ServicesHeader";
import PricingSection from "@/components/services/PricingSection";

export default function ServicesPage() {

  return (
    <>
      <ProfileBar />
      <div 
        className="min-h-screen w-full bg-[#ffffff] text-[#1C1C1C] flex flex-col justify-center items-center relative overflow-hidden"
      >
        <FloatingShapes3D />
        
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 relative z-10 flex flex-col items-center justify-center">
           {/* Header Section */}
           <ServicesHeader />

           {/* Services List */}
            <ServicesList />
            
            {/* Pricing Section */}
            <PricingSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
