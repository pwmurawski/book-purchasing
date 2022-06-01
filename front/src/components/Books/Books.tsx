/* eslint-disable camelcase */
import { IBookData } from "../../interfaces/interfaces";
import Book from "./Book/Book";

interface IBooksProps {
  booksData: IBookData[];
}

export default function Books({ booksData }: IBooksProps) {
  return (
    <>
      {booksData.map(
        ({ id, title, author, price, pages, currency, cover_url }) => (
          <Book
            key={id}
            id={id}
            title={title}
            author={author}
            price={price}
            pages={pages}
            currency={currency}
            cover_url={cover_url}
          />
        )
      )}
    </>
  );
}
