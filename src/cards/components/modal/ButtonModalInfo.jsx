import React, { useEffect, useState } from 'react'
import { Button, Card, Nav } from 'react-bootstrap'

export const ButtonModalInfo = ({infoStoneModal}) => {

  let keysStone = []
  
  
  if (infoStoneModal.recomendaciones.general){
    keysStone.push({'title': 'Información general', 'keysBusto': Object.keys(infoStoneModal.recomendaciones.general)})
  }else{
    if (infoStoneModal.recomendaciones.busto){
      keysStone.push({'title': `Busto`, 'type': `${infoStoneModal.recomendaciones.busto.tipo}`, 'keys': (infoStoneModal.recomendaciones.busto)})
    }
    if (infoStoneModal.recomendaciones.cadera){
      keysStone.push({'title': `Cadera`, 'type': `${infoStoneModal.recomendaciones.cadera.tipo}`, 'keys': (infoStoneModal.recomendaciones.cadera)})
    }
    if (infoStoneModal.recomendaciones.cintura){
      keysStone.push({'title': `Cintura`, 'type': `${infoStoneModal.recomendaciones.cintura.tipo}`, 'keys': (infoStoneModal.recomendaciones.cintura)})

    }
    if (infoStoneModal.recomendaciones.espalda){
      keysStone.push({'title': `Espalda`, 'type': `${infoStoneModal.recomendaciones.espalda.tipo}`, 'keys': (infoStoneModal.recomendaciones.espalda)})
    }
  }
 
  const [valueStone, setValueStone] = useState({...keysStone[0].keys});
  const [titleStone, setTitleStone] = useState(`${keysStone[0].title} ${keysStone[0].type}`);

  const showInfo = (stoneKeys, title) => {
    setValueStone({...stoneKeys});
    setTitleStone(`${title} ${stoneKeys.tipo}`);

  }

  return (
    <Card className="cardCBC text-center">
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#0">
            {
              keysStone.map((stone, i)=>
                
                <Nav.Item>
                  <Nav.Link href={`#${i}`} onClick={()=>showInfo(stone.keys, stone.title)}>{`${stone.title}`}</Nav.Link>
                </Nav.Item> 
              )
            }
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title style={{fontSize:'27px'}}>{titleStone}</Card.Title>
          <Card.Text>
          <ul >
            {
              Object.values(valueStone).map(e => {
                if (e.length > 10) {
                  return <li style={{fontSize: '20px'}}>{e}</li> 
                }
                
              })
            }
          </ul>
            
          </Card.Text>
          <Button variant="primary">Ver en PDF...</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  )
    // intentar hacer un useButtonModalInfo: const {stoneInfoActive, showInfoStone}



}
