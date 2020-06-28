import React from 'react';

import Hero from '../components/hero/Hero';
import Testimonials from '../components/testimonials/Testimonials';
import Layout from '../components/layout/Layout';

function Home() {
  return (
    <Layout>
      <Hero />
      <Testimonials />
    </Layout>
  );
}

export default Home;
