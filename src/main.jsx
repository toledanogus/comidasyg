import React from 'react'
import ReactDOM from 'react-dom/client'
import { ComidasApp } from './ComidasApp'
import { ComidasProvider } from './context/ComidasProvider'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ComidasProvider>
    {/* <React.StrictMode> */}
      <ComidasApp />
    {/* </React.StrictMode> */}
  </ComidasProvider>
)