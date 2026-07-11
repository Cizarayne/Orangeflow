import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Toaster position="bottom-center" expand={true} richColors duration={3000}/>
    <App />
  </StrictMode>,
  </BrowserRouter>,
)
