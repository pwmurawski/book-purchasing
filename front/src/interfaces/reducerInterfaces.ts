import { IBasket, IBookData } from "./interfaces";

interface ActionAddBook {
  type: "addBook";
  book: IBookData;
}

interface ActionSetQuantity {
  type: "setQuantity";
  bookId: number;
  quantity: number;
}

interface ActionDeleteBook {
  type: "deleteBook";
  bookId: number;
}

interface ActionClearBasket {
  type: "clearBasket";
}

export interface IState {
  basket: IBasket[];
}

export type Action =
  | ActionAddBook
  | ActionDeleteBook
  | ActionSetQuantity
  | ActionClearBasket;
