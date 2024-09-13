import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Index from './react-TODO/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
