import React, { Suspense } from 'react';
import Layout from './containers/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Loader from './components/shared/Loader/Loader';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <Layout />
        </Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
