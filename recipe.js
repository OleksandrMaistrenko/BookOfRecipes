import {
  isValidString,
  isValidArray,
  isValidPraparationTime,
} from "./validation.js";

export class Recipe {
  constructor(
    name,
    listOfIngredients,
    descriptionOfPreparation,
    timeOfPreparation
  ) {
    this.name = name;
    this.listOfIngredients = listOfIngredients;
    this.descriptionOfPreparation = descriptionOfPreparation;
    this.timeOfPreparation = timeOfPreparation;
  }

  isValid() {
    return (
      isValidString(this.name) &&
      isValidArray(this.listOfIngredients) &&
      isValidString(this.descriptionOfPreparation) &&
      isValidPraparationTime(this.timeOfPreparation)
    );
  }
}
