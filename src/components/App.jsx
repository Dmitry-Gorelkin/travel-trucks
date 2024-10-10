import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="catalog" element={<CatalogPage />} /> */}
        {/* <Route path="catalog/:id" element={<CatalogPageId />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
