import { IBasket } from "../interfaces/interfaces";

const sumAllPrice = (arr: IBasket[]) => {
  let value = 0;
  arr.forEach(({ bookData, quantity }) => {
    value += bookData.price * quantity;
  });

  return value;
};

export default sumAllPrice;
