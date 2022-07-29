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

  if (basket.length === 0)
    return (
      <Wrapper>
        <Title>Koszyk</Title>
        <p>Koszyk jest pusty</p>
      </Wrapper>
    );
  return (
    <Wrapper>
      <BookInBasketContainer>
        <BooksInBasket booksData={basket} />
      </BookInBasketContainer>
      <Summary />
      <SubmitLink to="/zamowienie">Dalej</SubmitLink>
    </Wrapper>
  );
}
