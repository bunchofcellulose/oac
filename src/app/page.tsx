'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Registration from '@/components/Registration';
import SampleProblems from '@/components/SampleProblems';
import FAQ from '@/components/FAQ';
import RegistrationForm from '@/components/RegistrationForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <StarryBackground />
      <Navigation />
      <Hero />
      <About />
      <Registration />
      <SampleProblems />
      <FAQ />
      <RegistrationForm />
      <Contact />
      <Footer />
    </div>
  );
}
