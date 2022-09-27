import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App/App';
import { theme } from './components/Common/Theme';
import { persistor, store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <PersistGate loading="loading..." persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </Provider>
  </ThemeProvider>
);
