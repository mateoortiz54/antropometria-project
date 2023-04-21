import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const CardStone = ({stone}) => {


    console.log({stone})
    const stoneNoAccents = stone.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    return (
        <Card className="card" style={{backgroundColor:"#EAEAEA"}}>
            <div className="info" >
                <h1>{stone.title}</h1>
                {/*className='text-info'*/}
                <p className='text-info1'>{stone.description}</p>
                <Button variant="outline-primary" className='button-info' href={`/${stoneNoAccents}`} >Ver más</Button>
            </div>
            <video className='videoCard' >
                    <source src={`${stone.data.video360}`} type='video/mp4'></source>
                </video>
                <video className='videoCard1' autoPlay loop>
                    <source src={`${stone.data.video360}`} type='video/mp4'></source>
                </video>
        </Card>
    );
};
