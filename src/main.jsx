// src/main.jsx
// src/main.jsx
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'; // ✅ Doğru import

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
