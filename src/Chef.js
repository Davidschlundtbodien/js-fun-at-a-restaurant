class Chef {
  constructor(name, restaurant) {
    this.name = name,
    this.restaurant = restaurant
  }
  greetCustomer(customer, morning) {
    if (morning) {
      return `Good morning, ${customer}!`
    } else {
      return `Hello, ${customer}!`
    }

  }
  checkForFood(foodItem) {
    if (this.restaurant.menus.breakfast.includes(foodItem)) {
      return `Yes, we're serving ${foodItem.name} today!`
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
}

module.exports = Chef;
