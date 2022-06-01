import { IBasket } from "../../interfaces/interfaces";
import BookInBasket from "./BookInBasket/BookInBasket";

interface IBooksProps {
  booksData: IBasket[];
}

export default function BooksInBasket({ booksData }: IBooksProps) {
  return (
    <>
      {booksData.map(({ bookData, quantity }) => (
        <BookInBasket
          key={bookData.id}
          id={bookData.id}
          title={bookData.title}
          author={bookData.author}
          price={bookData.price}
          pages={bookData.pages}
          currency={bookData.currency}
          cover_url={bookData.cover_url}
          quantity={quantity}
        />
      ))}
    </>
  );
}
