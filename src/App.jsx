import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayouts from '@/layouts/MainLayouts';
import All from '@/pages/All/All';
import Catalog from '@/pages/Catalog/Catalog';

// import s from './App.module.scss';

function App() {
  return (
    <BrowserRouter basename="/react-sneakers">
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<All />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
