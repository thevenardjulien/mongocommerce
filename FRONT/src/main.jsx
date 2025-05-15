import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
  </StrictMode>,
)
