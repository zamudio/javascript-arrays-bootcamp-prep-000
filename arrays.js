var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  const newBeginningArray = [element, ...array]
  return newBeginningArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var beginningArray = array.unshift(element)
  return beginningArray
}

function addElementToEndOfArray(array, element) {
  const newEndArray = [array..., element]
  return newEndArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  var endArray = array.push(element)
  return endArray
}