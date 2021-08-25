export const calcSubPrice = (product) => product.count * product.item.price;

export const calcTotalPrice = (products) => {
  return products.reduce((ac, cur) => {
    return (ac += cur.subPrice);
  }, 0);
};

export function getCountProductsInFavs() {
  let favs = JSON.parse(localStorage.getItem("favs"));
  return favs ? favs.products.length : 0;
}