export function TotalCountPrice(orders) {
    let sum = 0;
    orders.map(({ sum_food }) => {
      sum += sum_food;
    });
    return sum;
  }
  