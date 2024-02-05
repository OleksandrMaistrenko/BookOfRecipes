function isValidString(value) {
  return typeof value === "string" && value.trim() !== "";
}

function isValidArray(arrayIngredients) {
  for (let i = 0; i < arrayIngredients.length; i++) {
    if (!isValidString(arrayIngredients[i])) {
      return false;
    }
  }
  return true;
}

function isValidPraparationTime(value) {
  const regexp = /\d{0,3}/;

  if (typeof value === "number" && value >= 0 && regexp.test(value)) {
    return true;
  }
  return false;
}

export { isValidString, isValidArray, isValidPraparationTime };
