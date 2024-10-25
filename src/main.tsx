import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "@react-spectrum/provider";
import {theme} from "@react-spectrum/theme-default";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider theme={theme}>
        <App />
      </Provider>
  </StrictMode>,
)
