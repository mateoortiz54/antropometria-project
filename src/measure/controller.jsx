import {averageMeasure, convertMeasure, bustMeasure, hipMeasure, waistMeasure} from "./model";

export const createMeasure = (measure, setTypeOfBody, setShowSide) => {
  const bust = bustMeasure(measure.bust)
  const waist = waistMeasure(measure.waist)
  const hip = hipMeasure(measure.hip)

  const average = averageMeasure(bust,waist,hip)

  const bustConv = convertMeasure(bust,average)
  const waistConv = convertMeasure(waist,average)
  const hipConv = convertMeasure(hip,average)

  // console.log([bust,waist,hip, average])
  const resMeasure = `[${bustConv}, ${waistConv}, ${hipConv}]`
  //console.log(resMeasure)
  const myBody = typeOfBody(resMeasure) //return ex perla
  setTypeOfBody(myBody)

  setShowSide(false)

  return window.location.href =  `/${myBody}`


}


const typeOfBody = (measure) => {
  if (measure === "[0, 0, 0]" || measure === "[1, 1, 1]"){
    return 'perla'
  } else if(
    measure === "[0, 0, -1]" ||
    measure === "[1, 0, -1]" ||
    measure === "[1, 0, -2]" ||
    measure === "[1, 1, -1]" ||
    measure === "[1, -1, 1]" ||
    measure === "[1, 1, -2]" ||
    measure === "[2, 0, -2]"){
    return 'rubi'
  } else if (
    measure === "[0, 0, 1]" ||
    measure === "[-1, 0, 1]" ||
    measure === "[-1, 0, 2]" ||
    measure === "[-1, -1, 1]" ||
    measure === "[0, -1, 2]" ||
    measure === "[-1, -1, 2]" ||
    measure === "[-1, -1, 3]" ||
    measure === "[-1, -2, 2]" ||
    measure === "[2, 0, 1]" ||
    measure === "[-2, 0, 2]"
){
    return 'ambar'
  } else if (
      measure === "[1, 0, 0]" ||
      measure === "[1, -1, -1]" ||
      measure === "[2, 0, -1]" ||
      measure === "[2, -1, -1]" ||
      measure === "[2, 1, -2]" ||
      measure === "[3, -2, -1]"
  ){
    return 'topacio'
  } else if (
      measure === "[-1, 0, 0]" ||
      measure === "[-1, 1, 1]" ||
      measure === "[-2, 1, 1]") {
    return 'esmeralda'
  } else if (
    measure === "[0, -1, 0]" ||
    measure === "[0, -1, 1]" ||
    measure === "[0, -2, 1]" ||
    measure === "[0, -2, 2]" ||
    measure === "[1, -1, 0]" ||
    measure === "[1, -2, 1]" ||
    measure === "[2, -2, 1]"
  ) {
    return 'lapislazuli'
  } else if (
    measure === "[1, 2, -3]" ||
    measure === "[0, 1, 0]" ||
    measure === "[0, 1, -1]" ||
    measure === "[0, 1, -2]" ||
    measure === "[0, 2, -1]" ||
    measure === "[0, 2, -2]" ||
    measure === "[-1, 1, 0]" ||
    measure === "[-1, 1, -1]" ||
    measure === "[-1, 2, 0]" ||
    measure === "[-1, 2, -1]" ||
    measure === "[1, 2, -2]" ||
    measure === "[-1, 2, -2]" ||
    measure === "[-1, 3, -2]" ||
    measure === "[-2, 1, 0]" ||
    measure === "[-2, 2, 0]" ||
    measure === "[-2, 2, -1]"
  ) {
    return 'amatista'
  } else return 'Intenta otra vez'

}