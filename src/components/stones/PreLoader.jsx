import {Spinner} from 'react-bootstrap';
import {Fragment} from "react";

function PreloaderVideo() {
  return (
    <Fragment>
      <div className="centerVerHor">
        <Spinner animation="grow" size="sm"/>
        <Spinner animation="grow" size="lg"/>
        <Spinner animation="grow" size="sm"/>
      </div>
    </Fragment>
  )
}

export default PreloaderVideo;