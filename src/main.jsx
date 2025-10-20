import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import English from './English.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <English />
  </StrictMode>,
)
