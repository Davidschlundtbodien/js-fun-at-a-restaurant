function takeOrder(order, orders) {
  if (orders.length < 3) {
    return orders.push(order)
  } else {
    return
  }
}

function refundOrder(orderNumber, orders) {
  for (var i = 0; i < orders.length; i++) {
    if (orderNumber === orders[i].orderNumber) {
        orders.splice(i, 1)
    }
  }
}

function listItems(orders) {
  var names = []
  for (var i = 0; i < orders.length; i++) {
    names.push(orders[i].item)
  }
  return names.join(", ")
}

function searchOrder(orders, item) {
  var count = 0;
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].item === item) {
      count++
    }
  }
  return count > 0;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
