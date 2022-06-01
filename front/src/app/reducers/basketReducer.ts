/* eslint-disable default-param-last */
import isBookInBasket from "../../helpers/isBookInBasket";
import { IBasket } from "../../interfaces/interfaces";
import { Action, IState } from "../../interfaces/reducerInterfaces";

const initialState = {
  basket: [],
};

const basketReducer = (state: IState = initialState, action: Action) => {
  let isInBasket: boolean;
  let newBasket: IBasket[];

  switch (action.type) {
    case "addBook":
      isInBasket = isBookInBasket(state.basket, action.book.id);

      if (isInBasket) {
        newBasket = state.basket.map(({ bookData, quantity }) =>
          bookData.id === action.book.id
            ? { bookData, quantity: quantity + 1 }
            : { bookData, quantity }
        );
      } else {
        newBasket = [...state.basket, { bookData: action.book, quantity: 1 }];
      }
      return { ...state, basket: newBasket };

    case "setQuantity":
      newBasket = state.basket.map(({ bookData, quantity }) =>
        bookData.id === action.bookId
          ? { bookData, quantity: action.quantity }
          : { bookData, quantity }
      );
      return { ...state, basket: newBasket };

    case "deleteBook":
      return {
        ...state,
        basket: state.basket.filter(
          ({ bookData }) => action.bookId !== bookData.id
        ),
      };

    case "clearBasket":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default basketReducer;
