import React from 'react'
import ReactDOM from 'react-dom/client'
import { DictionaryApp } from './DictionaryApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DictionaryApp />
  </React.StrictMode>,
)
