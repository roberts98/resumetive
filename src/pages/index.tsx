import React from 'react';

import Header from '../components/layout/Header';
import Hero from '../components/hero/Hero';
import Testimonials from '../components/testimonials/Testimonials';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonials />
    </div>
  );
}

export default Home;
