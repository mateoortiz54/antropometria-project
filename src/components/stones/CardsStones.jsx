import Button from 'react-bootstrap/Button';
import {useState, useEffect, useRef} from 'react'
import Card from 'react-bootstrap/Card';
//import {Video} from '../Video'

export function CardsStones() {
    const [loading, setLoading] = useState(true);
    const [newStyle, setnewStyle] =  useState({width:'300px'});
    const [idStone, setidStone]= useState([])
    

    const handleMoreInfo = (stone)=>{
        console.log("Este es el numero de la piedra:", stone)
        window.location.href = "/"+stone;
        
    }

    const Video = ({setLoading}) => {
        const vidRef = useRef();
      
        useEffect(() => { vidRef.current.play(); },[]);
        return (
          
              <video
                ref={vidRef}
                muted
                autoPlay={"autoplay"}
                preload="auto"
                loop
                className="responsive-video"
                onLoadedData={() => setLoading(false)}
                src={`../../../public/perla video.mp4`}></video>
          
        )
    }
    
  return (
    <div className='container'>
        
        <div className='spaceLeft'>

        </div>
        <div className='spaceFocus'>  
            
            <Card className="card" style={{backgroundColor:"#EAEAEA"}}>
                <div className="info" >
                    <h1>Perla</h1>
                    {/*className='text-info'*/}
                    <p >El cuerpo Perla se distingue por tener las caderas amplias y contorno cerrado</p>
                    <Button variant="outline-primary" href='/Perla'>Ver más</Button>
                </div>
               <video className='videoCard' >
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
                <video className='videoCard1' autoPlay loop>
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
            </Card>
            
            <Card className="card" style={{backgroundColor:"#EAEAEA"}}>
                <div className="info" >
                    <h1>Perla</h1>
                    <p>El cuerpo Perla se distingue por tener las caderas amplias y contorno cerrado</p>
                    <Button variant="outline-primary">Ver más</Button>
                </div>
               <video className='videoCard' >
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
                <video className='videoCard1' autoPlay loop>
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
            </Card>
            <Card className="card" style={{backgroundColor:"#EAEAEA"}}>
                <div className="info" >
                    <h1>Perla</h1>
                    <p>El cuerpo Perla se distingue por tener las caderas amplias y contorno cerrado</p>
                    <Button variant="outline-primary">Ver más</Button>
                </div>
               <video className='videoCard' >
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
                <video className='videoCard1' autoPlay loop>
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
            </Card>
            <Card className="card" style={{backgroundColor:"#EAEAEA"}}>
                <div className="info" >
                    <h1>Perla</h1>
                    <p>El cuerpo Perla se distingue por tener las caderas amplias y contorno cerrado</p>
                    <Button variant="outline-primary">Ver más</Button>
                </div>
               <video className='videoCard' >
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
                <video className='videoCard1' autoPlay loop>
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
            </Card>
            <Card className="card" style={{backgroundColor:"#EAEAEA"}}>
                <div className="info" >
                    <h1>Perla</h1>
                    <p>El cuerpo Perla se distingue por tener las caderas amplias y contorno cerrado</p>
                    <Button variant="outline-primary">Ver más</Button>
                </div>
               <video className='videoCard' >
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
                <video className='videoCard1' autoPlay loop>
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
            </Card>
            <Card className="card" style={{backgroundColor:"#EAEAEA"}}>
                <div className="info" >
                    <h1>Perla</h1>
                    <p>El cuerpo Perla se distingue por tener las caderas amplias y contorno cerrado</p>
                    <Button variant="outline-primary">Ver más</Button>
                </div>
               <video className='videoCard' >
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
                <video className='videoCard1' autoPlay loop>
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
            </Card>
            <Card className="card" style={{backgroundColor:"#EAEAEA"}}>
                <div className="info" >
                    <h1>Perla</h1>
                    <p>El cuerpo Perla se distingue por tener las caderas amplias y contorno cerrado</p>
                    <Button variant="outline-primary">Ver más</Button>
                </div>
               <video className='videoCard' >
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
                <video className='videoCard1' autoPlay loop>
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
            </Card>
            <Card className="card" style={{backgroundColor:"#EAEAEA"}}>
                <div className="info" >
                    <h1>Perla</h1>
                    <p>El cuerpo Perla se distingue por tener las caderas amplias y contorno cerrado</p>
                    <Button variant="outline-primary" href='/ff'>Ver más</Button>
                </div>
               <video className='videoCard' >
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
                <video className='videoCard1' autoPlay loop>
                    <source src='../../../public/perla video.mp4' type='video/mp4'></source>
                </video>
            </Card>
            {/* <Card className="bg-darkcard">
                <Card.Img src="../../../public/senaIcon.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Titulo del ultimo</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Card className="bg-darkcard">
                
               <video src='../../../public/perla video.mp4' autoPlay loop width={100} height={100}></video>
                <div className="info" >
                    
                    <p>Texto del cuerpo<br>
                    </br> hghhhhhhhhhhhhhhhg</p>
                    
                </div>
                <Card.ImgOverlay>
                    
                    
                </Card.ImgOverlay>
            </Card> */}
            {/*<div className="wrapperCss"> 
                <div className="cardCss">
                    <img src="../../../public/senaIcon.png"/>
                    <div className="infoCss">
                        <h1>Amatista</h1>
                        <p>Aquí se podrá ver más información sobre este tipo de cuerpo </p>
                        <button onClick={()=>handleMoreInfo("Amatista")}>Read More</button>
                    </div>
                </div>
            </div>*/}
            
            
        </div>
        <div className='spaceRight'>

        </div>
    </div>
  )

}

