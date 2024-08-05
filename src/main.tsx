import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Game } from './Pages/Game/Game.tsx';
import { Scores } from './Pages/Scores/Scores.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Learn } from './Pages/Learn/Learn.tsx';
import TapProvider from './contexts/TapContext.tsx';

import { SwitchToMobileView } from './AppComponents/SwitchToMobileView/SwitchToMobileView.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <SwitchToMobileView/>,
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
