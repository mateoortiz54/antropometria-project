import {Video} from "../Video";
import React, {Fragment, useState, useRef, useEffect} from "react";
import {Button, ButtonGroup} from "react-bootstrap";
import {NavBottomStone} from "./NavBottomStone";
import {useRecoilState} from "recoil";
import {closedSideBar} from "../../measure/states";
import PreloaderVideo from "./PreLoader";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import {infoStone} from '../../infoStone';


// modal
import Modal from 'react-bootstrap/Modal';
import { object } from "prop-types";


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

  const ModalInfo = () => {

    const infoStoneModal = information.find(info => info.title == title)
      
      if(infoStoneModal){

        let keysGeneral = '';
        let keysBusto = '';
        let keysCadera = '';
        let keysCintura = '';
        let keysEspalda = '';

        const {busto, cintura, cadera} = (infoStoneModal.porcentaje)

        if (infoStoneModal.recomendaciones.general){
          keysGeneral = Object.keys(infoStoneModal.recomendaciones.general)
        }else{
          if (infoStoneModal.recomendaciones.busto){
            keysBusto = Object.keys(infoStoneModal.recomendaciones.busto)
          }
          if (infoStoneModal.recomendaciones.cadera){
            keysCadera = Object.keys(infoStoneModal.recomendaciones.cadera)
            
          }
          if (infoStoneModal.recomendaciones.cintura){
            keysCintura = Object.keys(infoStoneModal.recomendaciones.cintura)

          }
          if (infoStoneModal.recomendaciones.espalda){
            keysEspalda = Object.keys(infoStoneModal.recomendaciones.espalda)
          }
        }

        console.log(keysCintura)
        

        return <>
          <div >
            <h2 className="titleStone">{infoStoneModal.title}</h2> 

            

            <div className="descModal">
              
                <p>{infoStoneModal.description}</p>
            </div>

            
            {/*Probando el grid*/}
            <div className="grid-container">
              <div className="item1">Busto: {busto}</div>
              <div className="item2"></div>
              <div className="item3"></div>  
              <div className="item4">Cintura: {cintura}</div>
              <div className="item5">Cadera: {cadera}</div>
              <div className="item6"></div>
              <div className="item7">
                <img width='100%' src="../../public/imagenPruebaWomen.jpg" alt="" />
              </div>  
            </div>

            

            {
              keysGeneral && (
              <div>
                <h3>información general.</h3>
                {keysGeneral && (keysGeneral.map((value) => 
                  <ul>
                    <li>{infoStoneModal.recomendaciones.general[value]}</li>
                  </ul>))
                }
              </div>
              )
            } 
            
            {
              keysBusto && (
              <div>
                <h3>Busto {infoStoneModal.recomendaciones.busto.tipo}</h3>
                {keysBusto && (keysBusto.map((value) => 
                  <ul>
                    <li>{infoStoneModal.recomendaciones.busto[value]}</li>
                  </ul>))
                }
              </div>
              )
            } 
            {
              keysEspalda && (
              <div>
                <h3>Espalda {infoStoneModal.recomendaciones.espalda.tipo}</h3>
                {keysEspalda && (keysEspalda.map((value) => 
                  <ul>
                    <li>{infoStoneModal.recomendaciones.espalda[value]}</li>
                  </ul>))
                }
              </div>
              )
            }
           
            {
              keysCintura && (
              <div>
                <h3>Cintura {infoStoneModal.recomendaciones.cintura.tipo}</h3>
                {keysCintura && (keysCintura.map((value) => 
                  <ul>
                    <li>{infoStoneModal.recomendaciones.cintura[value]}</li>
                  </ul>))
                }
              </div>
              )
            } 
            
            {
              keysCadera && (
              <div>
                <h3>Cadera {infoStoneModal.recomendaciones.cadera.tipo}</h3>
                {keysCadera && (keysCadera.map((value) => 
                  <ul>
                    <li>{infoStoneModal.recomendaciones.cadera[value]}</li>
                  </ul>))
                }
              </div>
              )
            } 
            
          </div>
          
        </>
      }
    

  }

  return (
    <Fragment>
      <Modal show={showModal} fullscreen={true} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className="ModalHeader">

        </Modal.Header>
        <Modal.Body className="ModalBody">
          <ModalInfo/>
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
          <Popover.Header as="h3">Tips generales</Popover.Header>
          <Popover.Body>
            <h4>Buenos Dias</h4>
            <button>Siguiente Tip</button> 
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
    </Fragment>
  )
}