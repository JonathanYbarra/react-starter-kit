import React from 'react'
import { router } from './routes';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import { store } from './app/store';
import { Theme } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </Provider>
  </React.StrictMode>,
)
