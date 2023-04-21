
import {
    Navigate,
    createBrowserRouter
} from 'react-router-dom';



import {
  CardInitial,
  ErrorRoute, 
  PageInitial, 
  StoneMain
} from '../cards/';



export const router = createBrowserRouter([
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
    {
      path: '/*',
      element: <Navigate to={'/'}/>
    },
  ]);