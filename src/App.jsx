import {
  RecoilRoot
} from 'recoil';
import {
  RouterProvider,
} from "react-router-dom";

import './App.css'
import { router } from './router/Routes';
import {SideBarMain} from './cards'

function App() {


  return (
    <RecoilRoot>
      <RouterProvider router={router} />
      <SideBarMain/>
    </RecoilRoot>
  )
}

export default App
