import React from 'react'
import { Button, Card, Nav } from 'react-bootstrap'

export const ButtonModalInfo = () => {

    const showInfo = () => {
        console.log('Funcionó')
    }
     

  return (
    <Card className="cardCBC text-center">
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#Busto">
            <Nav.Item>
              <Nav.Link href="#Busto">Busto</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Cadera">Cadera</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Cintura" onClick={showInfo}>Cintura</Nav.Link>
            </Nav.Item>
            
            
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  )
    // intentar hacer un useButtonModalInfo: const {stoneInfoActive, showInfoStone}



}
