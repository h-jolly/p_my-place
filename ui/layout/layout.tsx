import Footer from './footer';
import Header from './header';
import Main from './main';

import { LayoutProps } from '../types/layout/layout';

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div>
        <Main />
        {children}
      </div>
      <Footer />
    </div>
  );
}
