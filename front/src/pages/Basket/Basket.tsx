import { useSelector } from "react-redux";
import BooksInBasket from "../../components/BooksInBasket/BooksInBasket";
import Summary from "../../components/Summary/Summary";
import { IBasket } from "../../interfaces/interfaces";
import { IState } from "../../interfaces/reducerInterfaces";
import {
  Wrapper,
  Title,
  BookInBasketContainer,
  SubmitLink,
} from "./styles/BasketStyles";

export default function Basket() {
  const basket = useSelector<IState, IBasket[]>((state) => state.basket);

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
