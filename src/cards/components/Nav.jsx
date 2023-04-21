import {useRecoilState} from 'recoil';
import Navbar from 'react-bootstrap/Navbar';
import {animateScroll as scroll} from 'react-scroll';


import {closedSideBar} from "../../measure";



export const Nav = () => {
  const [show, setShow] = useRecoilState(closedSideBar);
  const handleClose = () => setShow(false); /*¿Cual es su función?*/
  const handleShow = () => setShow(true);

  function aboutLocation() {
    window.location.href = "/about";
  }

  function scrollToTop() { /*Era colocar la palabra function*/
    scroll.scrollToTop();
  }


  return (
    <>
      <Navbar expand="lg" variant="light" bg="transparent" fixed='top'>
        <div id="containerButton">
          <button className="btn btn-dark me-2" type="button" onClick={scrollToTop}>
            Inicio
          </button>
          <button className="btn btn-dark me-2" type="button" onClick={handleShow}>
            Medida
          </button>
          <button className="btn btn-dark me-2" type="button" onClick={aboutLocation}>
            Acerca de
          </button>
        </div>   
      </Navbar>
      <br/>    
    </>
  );
}

