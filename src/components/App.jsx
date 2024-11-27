import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';
import CardTruckFeatures from './CardTruckFeatures/CardTruckFeatures';
import CardTruckReviews from './CardTruckReviews/CardTruckReviews';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const CardTruckPage = lazy(() => import('../pages/CardTruckPage/CardTruckPage'));
// const CardTruckFeatures = lazy(() => import('./CardTruckFeatures/CardTruckFeatures'));
// const CardTruckReviews = lazy(() => import('./CardTruckReviews/CardTruckReviews'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CardTruckPage />}>
          <Route path="features" element={<CardTruckFeatures />} />
          <Route path="reviews" element={<CardTruckReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
