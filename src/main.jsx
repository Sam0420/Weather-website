import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import 'tachyons'
import App from './container/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
