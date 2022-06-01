/* eslint-disable camelcase */
import { useDispatch } from "react-redux";
import {
  Wrapper,
  Img,
  Title,
  Author,
  Bold,
  Pages,
  Price,
  Container,
  ColContainer,
  DeleteBtn,
  Quantity,
} from "./styles/BookInBasket";

interface IBookInBasketProps {
  id: number;
  title: string;
  author: string;
  price: number;
  pages: number;
  currency: string;
  cover_url: string;
  quantity: number;
}

export default function BookInBasket({
  id,
  title,
  author,
  price,
  pages,
  currency,
  cover_url,
  quantity,
}: IBookInBasketProps) {
  const dispatch = useDispatch();

  const deleteBookFromBasket = () => {
    dispatch({ type: "deleteBook", bookId: id });
  };

  return (
    <Wrapper>
      <Container>
        <Img src={cover_url} />
        <ColContainer>
          <Title>{title}</Title>
          <Author>
            <Bold>Autorzy:</Bold> {author}
          </Author>
          <Pages>
            <Bold>Ilosc stron:</Bold> {pages}
          </Pages>
        </ColContainer>
      </Container>
      <Container>
        <Quantity
          type="number"
          defaultValue={quantity}
          onChange={(e) =>
            dispatch({
              type: "setQuantity",
              bookId: id,
              quantity:
                e.target.value === "" || +e.target.value < 1
                  ? 1
                  : +e.target.value,
            })
          }
          min="1"
        />
        <Price>
          <Bold>Cena:</Bold> {price} {currency}
        </Price>
        <DeleteBtn onClick={deleteBookFromBasket}> X </DeleteBtn>
      </Container>
    </Wrapper>
  );
}
