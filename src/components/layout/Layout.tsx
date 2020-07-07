import React from 'react';

import Header from './Header';
import PageAnimation from './PageAnimation';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <PageAnimation>
        <main>{children}</main>
      </PageAnimation>
    </div>
  );
}

export default Layout;
