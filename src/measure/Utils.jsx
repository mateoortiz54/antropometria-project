export const validateIsNumber = (number) => {

  if (isNaN(number)){
   return false
  } else {
    const myRange = [...Array(201).keys()];
    return myRange.includes(parseInt(number))
  }
}
