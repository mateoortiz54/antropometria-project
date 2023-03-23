import {
  RecoilRoot
} from 'recoil';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import PageInitial from './components/PageInitial'
import {Measurements} from "./components/Measurements";
import {SideBarMain} from "./components/SideBar";
import {ErrorRoute} from "./components/stones/ErrorRoute";
import {StoneMain} from "./components/stones/StoneMain";
import {CardInitial} from './components/CardInitial';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageInitial/>,
    errorElement: <ErrorRoute/> 
  },
  {
    path: "/about",
    element: <CardInitial/>,
    errorElement: <ErrorRoute/>
  },
  {
    path: "/amatista",
    element: <StoneMain
      title="Amatista"
      url="https://bodies-app.s3.amazonaws.com/pdf/amatista.pdf"
      stone={'amatista'}/>,
  },
  {
    path: "/ambar",
    element: <StoneMain
      title="Ámbar"
      url="https://bodies-app.s3.amazonaws.com/pdf/ambar.pdf"
      stone={'ambar'}/>,
  },
  {
    path: "/esmeralda",
    element: <StoneMain
      title="Esmeralda"
      url="https://bodies-app.s3.amazonaws.com/pdf/esmeralda.pdf"
      stone={'esmeralda'}/>,
  },
  {
    path: "/lapislazuli",
    element: <StoneMain
      title="Lapislázuli"
      url="https://bodies-app.s3.amazonaws.com/pdf/lapislazuli.pdf"
      stone={'lapislazuli'}/>,
  },
  {
    path: "/perla",
    element: <StoneMain
      title="Perla"
      url="https://bodies-app.s3.amazonaws.com/pdf/perla.pdf"
      stone={'perla'}/>,
  },
  {
    path: "/rubi",
    element: <StoneMain
      title="Rubí"
      url="https://bodies-app.s3.amazonaws.com/pdf/rubi.pdf"
      stone={'rubi'}/>,
  },
  {
    path: "/topacio",
    element: <StoneMain
      title="Topacio"
      url="https://bodies-app.s3.amazonaws.com/pdf/topacio.pdf"
      stone={'topacio'}/>,
  },
]);


function App() {


  return (
    <RecoilRoot>
      <RouterProvider router={router} />
      <SideBarMain/>
    </RecoilRoot>
  )
}

export default App
