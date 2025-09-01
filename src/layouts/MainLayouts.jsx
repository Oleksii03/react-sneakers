import { Outlet } from 'react-router-dom';

import Header from '@/components/Base/Header/Header';
import Footer from '@/components/Base/Footer/Footer';

function MainLayouts() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayouts;
