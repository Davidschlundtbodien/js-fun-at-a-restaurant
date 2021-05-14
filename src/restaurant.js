function createRestaurant(name, menus) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}



function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === "breakfast" && restaurant.menus.breakfast.indexOf(menuItem) === -1) {
    restaurant.menus.breakfast.push(menuItem)
  } else if (menuItem.type === "lunch" && restaurant.menus.lunch.indexOf(menuItem) === -1) {
    restaurant.menus.lunch.push(menuItem)
  } else if (menuItem.type === "dinner" && restaurant.menus.dinner.indexOf(menuItem) === -1) {
    restaurant.menus.dinner.push(menuItem)
  } else {
    return
  }

}

function removeMenuItem(restaurant, itemName, itemType) {
  if (itemType === "breakfast" && restaurant.menus.breakfast[0]) {
    restaurant.menus.breakfast.pop()
  } else if (itemType === "lunch" && restaurant.menus.lunch[0]) {
    restaurant.menus.lunch.pop()
  } else if (itemType === "dinner" && restaurant.menus.dinner[0]) {
    restaurant.menus.dinner.pop()
  } else {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  }
  return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
