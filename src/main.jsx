import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/App'
import { Search } from './pages/search/Search'
import { DataProvider } from './context/ContextLocalStorage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<App />}
          ></Route>
          <Route
            path='/search'
            element={<Search />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
)
