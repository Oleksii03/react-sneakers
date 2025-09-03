import { Outlet } from 'react-router-dom';
import Header from '@/components/Base/Header/Header';
import Footer from '@/components/Base/Footer/Footer';
import Sprite from '@/components/Base/Sprite';
import { useState } from 'react';

function MainLayouts() {
  const [headerHeight, setHeaderHeight] = useState(0);

  const handlerDomEl = domRef => setHeaderHeight(domRef.offsetHeight);

  return (
    <div className="wrapper">
      <Sprite />
      <Header handlerDomEl={handlerDomEl} />
      <main className="main" style={{ paddingTop: headerHeight }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayouts;
