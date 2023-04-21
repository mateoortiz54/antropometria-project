import { infoStone } from '../data';
import { CardStone } from './CardStone';


export function ListCardsStones() {


    
  return (
    <div className='container'>
        
        <div className='spaceLeft'>

        </div>
        <div className='spaceFocus'>  
            
            {
                infoStone.map((stone)=>(    
                    <CardStone key={stone.title} stone={stone} />
                ))
            }



            {/* ------------------------------------ */}
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

