import { Button } from 'react-bootstrap';
import { tipsInfo } from '../data';
import { useState } from "react";

export const TipsGenerales = () => {

    const [tips, setTips] = useState(0);
    console.log(tipsInfo[tips])

    const hadleTip = () => {
      if (tips === 6){
        setTips(0)
        return
      }
      setTips((n)=>n+1)
    }
    
    return (
    <>
      <p>{tipsInfo[tips]}</p>
      <Button variant="outline-dark" onClick={hadleTip}>Siguiente Tip</Button> 
    </>
    
  )
}
