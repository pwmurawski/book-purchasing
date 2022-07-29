/* eslint-disable camelcase */
import useAddBookToBasket from "../../../hooks/useAddBookToBasket";
import { IBookData } from "../../../interfaces/interfaces";
import {
  Wrapper,
  Author,
  Img,
  Title,
  Pages,
  Price,
  Container,
  Bold,
  AddToBasketBtn,
  Added,
} from "./styles/BookStyles";

export default function Book({
  id,
  title,
  author,
  price,
  pages,
  currency,
  cover_url,
}: IBookData) {
  const [isClickAddBasket, addToBasket] = useAddBookToBasket(
    id,
    title,
    author,
    price,
    pages,
    currency,
    cover_url
  );

  return (
    <Wrapper>
      <Container>
        <Img src={cover_url} />
        <Title>{title}</Title>
      </Container>
      <Author>
        <Bold>Autorzy:</Bold> {author}
      </Author>
      <Pages>
        <Bold>Ilosc stron:</Bold> {pages}
      </Pages>
      <Price>
        <Bold>Cena:</Bold> {price} {currency}
      </Price>
      {isClickAddBasket ? (
        <Added>Dodano do koszyka</Added>
      ) : (
        <AddToBasketBtn onClick={addToBasket}>DODAJ DO KOSZYKA</AddToBasketBtn>
      )}
    </Wrapper>
  );
}
