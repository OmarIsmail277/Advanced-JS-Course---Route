const products = [
  { name: "Toshiba", price: 30000, inStock: true },
  { name: "Toshiba", price: 1200, inStock: true },
  { name: "Toshiba", price: 8000, inStock: true },
  { name: "Toshiba", price: 700, inStock: true },
];

const total = products
  .filter((product) => product.inStock)
  .map((product) => product.price * 0.9)
  .reduce((sum, price) => sum + price);

console.log(total);

// that is a good code and readable and it's okay, but it passes on the array 3 times , n+n+n

// alternative better solution that passes once only
const total2 = products.reduce((sum, product) => {
  if (!product.inStock) return sum;

  return sum + product.price * 0.9;
}, 0);
