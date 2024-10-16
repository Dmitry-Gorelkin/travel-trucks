import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const CardTrukPage = lazy(() => import('../pages/CardTrukPage/CardTrukPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CardTrukPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
