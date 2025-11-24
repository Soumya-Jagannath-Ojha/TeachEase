import React from 'react'
import "./index.css";
import { paths } from './routing/routing';
import { RouterProvider } from 'react-router-dom';
import GlobalContextHome, { Authcontext } from './globalcontext/GlobalContextHome';

const App = () => {
  return ( 
    <GlobalContextHome>
      <RouterProvider router={paths}/>

    </GlobalContextHome>
  )
}

export default App