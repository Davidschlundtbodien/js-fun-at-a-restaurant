function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(ingredient, array) {
  if (array.includes(ingredient)) {
    return
  } else {
    array.push(ingredient)
  }
  return array
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  var newPrice = price*.9
  return newPrice
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
