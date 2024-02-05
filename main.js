import { Recipe } from "./recipe.js";
import { BookOfRecipes } from "./recipes.js";

let recipe1 = new Recipe(
  "Dish 1",
  ["Ingredient1", "Ingredient2"],
  "Description",
  30
);
let recipe2 = new Recipe(
  "Dish 2",
  ["Ingredient1", "Ingredient3"],
  "Description",
  60
);
let recipe3 = new Recipe("Dish 3", ["Potato", "Carrot"], "Description", 120);
let recipe4 = new Recipe("Dish 4", ["Potato"], "Description", 45);
let recipe5 = new Recipe("Invalid Dish", [], "", -10);

const bookOfRecipes = new BookOfRecipes();

bookOfRecipes.addRecipe(recipe1);
bookOfRecipes.addRecipe(recipe2);
bookOfRecipes.addRecipe(recipe3);
bookOfRecipes.addRecipe(recipe4);
bookOfRecipes.addRecipe(recipe5);

let recipesByTime = bookOfRecipes.findRecipeByTime(60);
console.log(
  "Recipes by time:",
  recipesByTime.map((recipe) => recipe.name).join(", ")
);

let recipesByIngredients = bookOfRecipes.findRecipeByIngredients([
  "Potato",
  "Carrot",
]);
console.log(
  "Recipes by ingredients:",
  recipesByIngredients.map((recipe) => recipe.name).join(", ")
);
