/* eslint-disable camelcase */
import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";

const useAddBookToBasket = (
  id: number,
  title: string,
  author: string,
  price: number,
  pages: number,
  currency: string,
  cover_url: string
): [
  isClickAddBasket: typeof isClickAddBasket,
  addToBasket: typeof addToBasket
] => {
  const [isClickAddBasket, setIsClickAddBasket] = useState(false);
  const dispatch = useAppDispatch();

  const addToBasket = () => {
    dispatch({
      type: "addBook",
      book: { id, title, author, price, pages, currency, cover_url },
    });
    setIsClickAddBasket(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsClickAddBasket(false);
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [isClickAddBasket]);

  return [isClickAddBasket, addToBasket];
};

export default useAddBookToBasket;
