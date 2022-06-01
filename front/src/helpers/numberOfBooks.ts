import { IBasket } from "../interfaces/interfaces";

const numberOfBooks = (basket: IBasket[]) => {
  let value = 0;

  basket.forEach(({ quantity }) => {
    value += quantity;
  });

  return value;
};

export default numberOfBooks;
