import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Formulary as Form} from "./Form";
import {useRecoilState} from "recoil";
import {closedSideBar} from "../measure/states";

export function SideBarMain() {
  const [show, setShow] = useRecoilState(closedSideBar);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
           Antropometría <b>App</b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
