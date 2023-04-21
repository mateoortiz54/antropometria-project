import Nav from 'react-bootstrap/Nav';

export const NavBottomStone = () => {

  const stones = [
    {
      title: 'Perla',
      url: 'perla'
    },
    {
      title: 'Ámbar',
      url: 'ambar'
    },
    {
      title: 'Esmeralda',
      url: 'esmeralda'
    },
    {
      title: 'Lapislázuli',
      url: 'lapislazuli'
    },
    {
      title: 'Topacio',
      url: 'topacio'
    },
    {
      title: 'Rubí',
      url: 'rubi'
    },
    {
      title: 'Amatista',
      url: 'amatista'
    },
    {
      title: 'Inicio',
      url: ''
    }
  ]

  return(
    <Nav className="justify-content-center" activeKey="/home">
      {
        stones.map((stone, i)=> {
          return(
            <Nav.Item key={i}>
              <Nav.Link eventKey="link-1" className={`text-capitalize text-dark ${stone.title !== 'Inicio' ? 'fw-bold' : '' } `} href={`/${stone.url}`}>
                {stone.title}
              </Nav.Link>
            </Nav.Item>
          )
        })
      }

    </Nav>
  )
}