import React, {Fragment} from "react";

import Button from "react-bootstrap/Button";

export const ErrorRoute = () => {

 return (
   <Fragment>
     <div className="centerVerHor">
       <img src="https://bodies-app.s3.amazonaws.com/images/inamod.png" alt="" className="imgInamod"/>
       <h1 className="h4 fw-light mb-4">
         "Lo siento, la página que estás intentando
         acceder no existe,  por favor
         revisa la URL que ingresaste e intenta nuevamente."
       </h1>

       <div>
         <Button variant="dark" href="/">
           Regresar a inicio
         </Button>
       </div>

     </div>

   </Fragment>
 )
}