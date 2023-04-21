import {Spinner} from 'react-bootstrap';

export const PreloaderVideo = () => {
  return (
    <>
      <div className="centerVerHor">
        <Spinner animation="grow" size="sm"/>
        <Spinner animation="grow" size="lg"/>
        <Spinner animation="grow" size="sm"/>
      </div>
    </>
  )
}

