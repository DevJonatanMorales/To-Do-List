import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { DataProvider } from './context/ContextLocalStorage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
)
