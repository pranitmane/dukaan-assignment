import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import HomePage from './pages/homePage.jsx'
import PaymentsPage from './pages/paymentPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<HomePage/>}/>
    <Route path="payments" element={<PaymentsPage/>}/>
  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
