import React from 'react'
import ReactDOM from 'react-dom/client'
import { inject } from '@vercel/analytics'
import ProductAnalyticsLandscape from '../product-analytics-landscape.jsx'

inject()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductAnalyticsLandscape />
  </React.StrictMode>
)
