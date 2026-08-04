/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header, Footer } from '@/src/components/Layout';
import { Hero } from '@/src/components/Hero';
import { Services } from '@/src/components/Services';
import { Industries } from '@/src/components/Industries';
import { Pricing } from '@/src/components/Pricing';
import { FreeAudit } from '@/src/components/FreeAudit';
import { WhyUs } from '@/src/components/WhyUs';
import { Contact } from '@/src/components/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Industries />
        <Pricing />
        <FreeAudit />
        <div id="about">
          <WhyUs />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
