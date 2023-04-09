import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from './router/Router'

import './assets/css/bootstrap.css'
import './assets/css/theme.css'
import './assets/css/maicons.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
