import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Game } from './Pages/Game/Game.tsx';
import { Scores } from './Pages/Scores/Scores.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Learn } from './Pages/Learn/Learn.tsx';
import TapProvider from './contexts/TapContext.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <div className='hidden md:block'>
        please switch to mobile view
      </div>
      <div className='md:hidden h-screen overflow-hidden'>
        <App />
      </div>
    </div>,
    children:[
      {
        path: "",
        element: <Game/>,
      },
      {
        path: "scores",
        element: <Scores/>,
      },
      {
        path: "learn",
        element: <Learn/>,
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TapProvider>
      <RouterProvider router={router} />
    </TapProvider>
  </React.StrictMode>,
)
