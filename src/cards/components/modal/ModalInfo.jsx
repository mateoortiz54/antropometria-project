import { Accordion } from "react-bootstrap";
import { ButtonModalInfo } from "./ButtonModalInfo";
import {amatistaFoto} from "../../../../public/fotoStone";
// import ambarSinFondo from '../../../../public/fotoStone/Amatista- SIN FONDO.png';

export const ModalInfo = ({information, title, url}) => {
  
   

  const infoStoneModal = information.find(info => info.title == title)
      
  if(infoStoneModal){
    console.log('Entró al if');
    console.log(infoStoneModal);

    const {busto, cintura, cadera} = infoStoneModal.porcentaje;    

  
    return (
      <>
        <h1 className="titleStone">{infoStoneModal.title}</h1> 

        <Accordion flush>
          <Accordion.Item style={{ backgroundColor: 'transparent' }} eventKey="0">
            <Accordion.Header><strong>Descripción y mas</strong> </Accordion.Header>
            <Accordion.Body style={{ fontSize: '30px' }}>
              <p>{infoStoneModal.description}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="containerPorcentajes">
          <div className="porcentajes" >
            <div className="divBustoCadera">
              <div className="divBusto"> Busto: {busto}</div>
              <div className="divCadera"> Cadera: {cadera}</div>
            </div>
            
            <div className="divImg">
              <img src={amatistaFoto.default} alt="" />
            </div>
            
            <div className="containerCintura">
              <div className="divCintura"> Cintura: {cintura}</div>
            </div>
          </div>
        </div>
              
        <ButtonModalInfo infoStoneModal={infoStoneModal} url={url}/>
          
      </>)
    }
  }
  

