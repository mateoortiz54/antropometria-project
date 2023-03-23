
export const bustMeasure = (bust) => {
  return (bust - 98) / 4.90
}

export const waistMeasure = (waist) => {
  return (waist - 80.73) /4.04
}


export const hipMeasure = (hip) => {
  return (hip - 104.99) / 5.25
}

export const averageMeasure = (bust,waist,hip) => {
  return (bust + waist + hip) / 3
}

////////

export const convertMeasure = (measure,average) => {
  let rest = Math.round((measure - average))
  if (rest <= -1){
    rest = -1
  } else if (rest >= 1) {
    rest = 1
  }else{
    rest = 0
  }
  return rest
}
