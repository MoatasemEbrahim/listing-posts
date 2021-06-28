import React, { Suspense } from 'react';
import Layout from './containers/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/shared/Loader/Loader';

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Layout />
    </Suspense>
  </BrowserRouter>
  );
}

export default App;
