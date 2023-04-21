
export const ModalInfo = ({information, title}) => {
    
   

  const infoStoneModal = information.find(info => info.title == title)
      
  if(infoStoneModal){

    let keysGeneral = '';
    let keysBusto = '';
    let keysCadera = '';
    let keysCintura = '';
    let keysEspalda = '';

    const {busto, cintura, cadera} = infoStoneModal.porcentaje

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
  
  return (
    <>
      <h2 className="titleStone">{infoStoneModal.title}</h2> 

      <div className="descModal">
        
          <p>{infoStoneModal.description}</p>
      </div>

      <div className="containerPorcentajes">
        <div className="porcentajes" >
          <div className="divBustoCadera">
            <div className="divBusto"> llegue yo Busto: {busto}</div>
            <div className="divCadera"> Cadera: {cadera}</div>
          </div>
          
          <div className="divImg">
            <img src="../../public/fotoStone/Ambar- SIN FONDO.png" alt="" />
          </div>
          
          <div className="containerCintura">
            <div className="divCintura"> Cintura: {cintura}</div>
          </div>
        </div>
      </div>
      




      {/*Probando el grid*/}
      {/* <div className="grid-container porcentajes">
        <div className="item1">Busto: {busto}</div>
        <div style={{ opacity:0 }} className="item2"></div>
        <div className="item3"></div>  
        <div className="item4">Cintura: {cintura}</div>
        <div className="item5">Cadera: {cadera}</div>
        <div className="item6"></div>
        <div className="item7">
          <img width='100%' height='100%' src="../../public/fotoStone/Ambar- SIN FONDO.png" alt="" />
        </div>  
      </div> */}

      
      <div className="componentCaracteristic" >
        
        <button>cadera</button>
        <button>
          Busto
        </button>
        <button>
          Cintura
        </button>

      </div>
      <ul>
          {
            keysGeneral && (
            <div>
              <h3>información general.</h3>
              {keysGeneral && (keysGeneral.map((value) => 
                  <li key={ value }>{infoStoneModal.recomendaciones.general[value]}</li>
                ))
              }
            </div>
            )
          } 
        </ul>

        <ul>
          {
            keysBusto && (
            <div>
              <h3>Busto {infoStoneModal.recomendaciones.busto.tipo}</h3>
              {keysBusto && (keysBusto.map((value) => 
                
                  <li key={ value }>{infoStoneModal.recomendaciones.busto[value]}</li>
                ))
              }
            </div>
            )
          } 
        </ul>

        <ul>
        {
          keysEspalda && (
          <div>
            <h3>Espalda {infoStoneModal.recomendaciones.espalda.tipo}</h3>
            {keysEspalda && (keysEspalda.map((value) => 
              
                <li key={ value }>{infoStoneModal.recomendaciones.espalda[value]}</li>
              ))
            }
          </div>
          )
        }
      </ul>

      <ul>
        {
          keysCintura && (
          <div>
            <h3>Cintura {infoStoneModal.recomendaciones.cintura.tipo}</h3>
            {keysCintura && (keysCintura.map((value) => 
              
                <li key={ value }>{infoStoneModal.recomendaciones.cintura[value]}</li>
            ))
            }
          </div>
          )
        } 
      </ul>

      <ul>
        {
          keysCadera && (
          <div>
            <h3>Cadera {infoStoneModal.recomendaciones.cadera.tipo}</h3>
            {keysCadera && (keysCadera.map((value) => 
                <li key={ value }>{infoStoneModal.recomendaciones.cadera[value]}</li>
              ))
            }
          </div>
          )
        } 
      </ul> 
        
    </>)
  }
  
}
