import { useAppSelector } from "../../app/hooks";
import BooksInBasket from "../../components/BooksInBasket/BooksInBasket";
import Summary from "../../components/Summary/Summary";
import {
  Wrapper,
  Title,
  BookInBasketContainer,
  SubmitLink,
} from "./styles/BasketStyles";

export default function Basket() {
  const basket = useAppSelector((store) => store.basketReducer.basket);

  return (
    <Wrapper>
      <Title>Koszyk</Title>
      {basket.length !== 0 ? (
        <>
          <BookInBasketContainer>
            <BooksInBasket booksData={basket} />
          </BookInBasketContainer>
          <Summary />
          <SubmitLink to="/zamowienie">Dalej</SubmitLink>
        </>
      ) : (
        <p>Koszyk jest pusty</p>
      )}
    </Wrapper>
  );
}
