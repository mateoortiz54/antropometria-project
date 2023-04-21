
import {AboutPageText} from "../components";


export const CardInitial = () => {

  function index() {
    window.location.href = '/';
  }
  
 return (
   <>
    <nav className="navbar bg-light fixed-top">
      <div className="container justify-content-center">
        <button className="btn btn-outline-dark me-2" type="button" onClick={index}>
          Inicio
        </button>
      </div>
    </nav>

    <div className="centerVerHor">
      <hr/>
        <img src="https://bodies-app.s3.amazonaws.com/images/inamod.png" alt="" className="imgInamod"/>
        <AboutPageText/> 
        <figure className="d-none d-lg-block">
          <blockquote className="blockquote">
            <p>Centro de Formación en Diseño, Confección y Moda</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <b>SENA</b> <cite title="Source Title">2018</cite>
          </figcaption>
        </figure>
    </div>

   </>
 )
}