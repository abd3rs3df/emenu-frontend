export function totalOrderPrice(orders) {
  let sum = 0;
  orders.map(( post ) => {
    sum += post.quantity * post.price;
  });
  return sum;
}
