import {Formulary as Form} from "./Form";
import {useRecoilState} from "recoil";
import {myTypeOfBody} from "../measure/states";
import {SideBarMain} from "./SideBar";
import {CardInitial} from "./CardInitial";

export const Measurements = () => {
  return(
    <div>

      <div className="container">
        <CardInitial/> {/* Pagina about*/}
        <SideBarMain/> {/*Esto es la barra lateral*/}
      </div>

    </div>
  )
}