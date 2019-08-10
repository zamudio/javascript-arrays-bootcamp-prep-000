var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  const newBeginningArray = [element, ...array]
  return newBeginningArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  const newEndArray = [...array, element]
  return newEndArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}