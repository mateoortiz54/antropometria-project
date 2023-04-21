import { useState, useRef, useEffect} from "react";
import {Button, ButtonGroup} from "react-bootstrap";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Modal from 'react-bootstrap/Modal';



import {
  Video, 
  NavBottomStone, 
  PreloaderVideo, 
  ModalInfo
} from "../components";

import {useRecoilState} from "recoil";
import {closedSideBar} from "../../measure";
import {infoStone} from '../data';
import { TipsGenerales } from "../components";



export const StoneMain = ({stone, url, title}) => {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);

  const[showModal, setShowModal] = useState(false )

  const [showSide, setShowSide] = useRecoilState(closedSideBar);

  const [openOverlay, setOpenOverlay] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const [information, setInformation] = useState([]);

  const handleClick = (e) => {
    setOpenOverlay(!openOverlay);
    setTarget(e.target);
  }

  useEffect(() => {
    setInformation(infoStone)
  }, [])

  

  return (
    <>

      <Modal show={showModal} fullscreen={true} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <ModalInfo information={information} title={title} />
        </Modal.Body>
      </Modal>
      


      <div className="tips" ref={ref}>
        <Button variant="outline-dark" onClick={handleClick}>
          Tips generales
        </Button>
      </div>

      <Overlay
        show={openOverlay}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3"></Popover.Header>
          <Popover.Body>
            <TipsGenerales/> 
            
          </Popover.Body>
        </Popover>
      </Overlay>

      <div className="centerHor showInfo">
        <h1 className="text-center text-capitalize fw-bold">{title}</h1>
        <div className="d-flex justify-content-center">
          <ButtonGroup size="lg" className="mb-2">
            <Button onClick={()=> setShowSide(true)} variant="outline-dark">Nueva medida</Button>
            <Button href={url} target="_blank" variant="outline-dark">Ver más información</Button>
            <Button variant="outline-dark" onClick={()=> setShowModal(true)}>Ver más información</Button>
            <Button onClick={()=> setShowNav(!showNav)} variant="outline-dark">
              {showNav ? 'Ocultar' : 'Más cuerpos'} 
            </Button>
          </ButtonGroup>
        </div>
        {
          showNav && <NavBottomStone/>
        }
      </div>

      { loading &&  <PreloaderVideo/> }
      <Video
        setLoading={setLoading}
        video={stone}/>
    </>
  )
}