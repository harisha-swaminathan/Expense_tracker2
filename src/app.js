import React, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import getStore from './store/configureStore';

import 'normalize.css/normalize.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import './styles/styles.scss';


const app = document.getElementById('appId');
const appRoot = createRoot(app);

const store = getStore();

appRoot.render(
   <StrictMode>
      <Provider store={store}>
         <AppRouter/>
      </Provider>
   </StrictMode>
);
