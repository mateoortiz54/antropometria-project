import React,{Fragment, useState} from 'react'
import {Button, Form} from 'react-bootstrap';
import {validateIsNumber} from "../measure/Utils";
import {createMeasure} from "../measure/controller";
import {useRecoilState} from "recoil";
import {closedSideBar, myTypeOfBody} from "../measure/states";
export const Formulary = () => {


  const [measurement, setMeasurement] = useState({})

  const [bust, setBust] = useState(null)
  const [waist, setWaist] = useState(null)
  const [hip, setHip] = useState(null)

  const [typeOfBody, setTypeOfBody] = useRecoilState(myTypeOfBody)
  const [showSide, setShowSide] = useRecoilState(closedSideBar);

  const handleChange = (e) => {
    //console.log([e.target.name])
    const isValid = validateIsNumber(e.target.value)
    switch (e.target.name) {
      case 'bust':
        setBust(isValid)
        break
      case 'waist' :
        setWaist(isValid)
        break
      case 'hip' :
        setHip(isValid)
        break
    }

    const meas = {...measurement, [e.target.name]: e.target.value}
    //console.log(meas)
    //console.log(typeOfBody)
    setMeasurement(meas)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    createMeasure(measurement, setTypeOfBody, setShowSide)
  }

  return(
    <Fragment>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBust">
          <Form.Label>Busto</Form.Label>
          <Form.Control size="lg" type="text" name="bust" inputmode="numeric" onChange={handleChange}/>
          {
            bust === false && (
              <Form.Text className="text-danger" >
                Por favor ingrese un número de 1 a 200.
              </Form.Text>
            )
          }

        </Form.Group>

        <Form.Group className="mb-3" controlId="formWaist">
          <Form.Label>Cintura</Form.Label>
          <Form.Control size="lg" type="text" name="waist" inputmode="numeric" onChange={handleChange}/>
          {
            waist === false && (
              <Form.Text className="text-danger">
                Por favor ingrese un número de 1 a 200.
              </Form.Text>
            )
          }

        </Form.Group>

        <Form.Group className="mb-3" controlId="formHip">
          <Form.Label>Cadera</Form.Label>
          <Form.Control size="lg" type="text" name="hip" inputmode="numeric" onChange={handleChange}/>
          {
            hip === false && (
              <Form.Text className="text-danger">
                Por favor ingrese un número de 1 a 200.
              </Form.Text>
            )
          }

        </Form.Group>
        <div className="d-grid gap-2">
          <Button
            variant="dark"
            size="lg"
            type="submit"
            disabled={!bust || !waist || !hip}>
            Enviar
          </Button>
        </div>

      </Form>
    </Fragment>
  )
}