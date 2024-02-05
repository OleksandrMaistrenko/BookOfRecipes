export class BookOfRecipes {
  arrayOfRecipes = [];

  addRecipe(recipe) {
    console.log(recipe);
    if (recipe.isValid()) {
      this.arrayOfRecipes.push(recipe);
      console.log("Recipe added successfully");
    } else {
      console.log("Recipe is not valid");
    }
  }

  findRecipeByTime(enterTime) {
    return this.arrayOfRecipes.filter(
      (recipe) => recipe.timeOfPreparation <= enterTime
    );
  }

  findRecipeByIngredients(ingredientsToFind) {
    return this.arrayOfRecipes.filter((recipe) =>
      ingredientsToFind.every((ingredient) =>
        recipe.listOfIngredients.includes(ingredient)
      )
    );
  }
}
