import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayouts from '@/layouts/MainLayouts';
import All from '@/pages/All/All';
import Men from '@/pages/Men/Men';

// import s from './App.module.scss';

function App() {
  return (
    <BrowserRouter basename="/react-sneakers">
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<All />} />
          {/* <Route path="woman" element={<Woman />} /> */}
          <Route path="men" element={<Men />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
