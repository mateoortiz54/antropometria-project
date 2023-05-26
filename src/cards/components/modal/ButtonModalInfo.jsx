import React, { useEffect, useState } from 'react'
import { Button, Card, Nav } from 'react-bootstrap'

export const ButtonModalInfo = ({infoStoneModal, url}) => {

  let keysStone = []
  
  
  if (infoStoneModal.recomendaciones.general){
    keysStone.push({'title': 'Información general', 'type': ``, 'keys': (infoStoneModal.recomendaciones.general)})
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
    <Card className="cardCBC">
        <Card.Header > 
          <Nav variant="tabs" defaultActiveKey="#0">
            {
              keysStone.map((stone, i)=>
                
                <Nav.Item key={i}  >
                  <Nav.Link href={`#${i}`}   onClick={()=>showInfo(stone.keys, stone.title)}>{`${stone.title}`}</Nav.Link>
                </Nav.Item> 
              )
            }
          </Nav>
        </Card.Header>  
        <Card.Body>
          <Card.Title className='text-center' style={{fontSize:'27px'}}>{titleStone}</Card.Title>
          <ul>
            <Card.Text>
            
              {
                Object.values(valueStone).map((e, i ) => {
                  if (e.length > 10) {
                    return <li key={i} style={{fontSize: '20px'}}>{e}</li> 
                  }
                  
                })
              }
              <div style={{'display': 'flex', 'justifyContent': 'center', 'marginTop': 15}}>
                {/* <Button variant="primary">Ver en PDF...</Button> */}
                <Button href={url} target="_blank" variant="outline-dark">Ver en PDF...</Button>

              </div>
            </Card.Text>
          </ul>
          
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  )
    // intentar hacer un useButtonModalInfo: const {stoneInfoActive, showInfoStone}



}
