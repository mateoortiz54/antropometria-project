
export const AboutPageText = () => {
  return(
    <>
      <div className="d-none d-lg-block">
        <p className="lead">
          El grupo de investigación Inamod realizó un estudio de antropometría fue realizado en Medellín,
          utilizando un body scanner 3D con una muestra de más de 1000 mujeres.
        </p>
        <p className="lead">
          El objetivo principal del estudio era recopilar información precisa
          sobre las medidas corporales de las mujeres y utilizar esta información
          para mejorar la precisión en el diseño de ropa y en la selección de tallas.
        </p>
        <p className="lead mb-5">
          A partir de los datos recolectados, los investigadores desarrollaron una
          aplicación que utiliza un algoritmo para determinar el tipo de
          cuerpo de una persona. La aplicación es fácil de usar y solo
          requiere que la persona ingrese sus medidas corporales.
        </p>
      </div>

      <div className="d-block d-lg-none">
        <p className="lead">
          La aplicación creada por Inamod a partir de los datos del estudio de
          antropometría permite determinar el tipo de cuerpo de una persona,
          lo que mejora la selección de ropa y la experiencia de compra.
        </p>
      </div>
    </>
  )
}