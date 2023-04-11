import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/base.css'
import { Header } from './components/header'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Header/>
   </React.StrictMode>
)
