import { IBasket } from "../interfaces/interfaces";

const isBookInBasket = (basket: IBasket[], bookId: number) => {
  let isInBasket = false;

  basket.forEach(({ bookData }) => {
    if (bookData.id === bookId) {
      isInBasket = true;
    }
  });

  return isInBasket;
};

export default isBookInBasket;
