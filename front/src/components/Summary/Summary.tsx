import { useSelector } from "react-redux";
import numberOfBooks from "../../helpers/numberOfBooks";
import sumAllPrice from "../../helpers/sumAllPrice";
import { IBasket } from "../../interfaces/interfaces";
import { IState } from "../../interfaces/reducerInterfaces";
import { Wrapper, Row, Title, Text, Value } from "./styles/SummaryStyles";

export default function Summary() {
  const basket = useSelector<IState, IBasket[]>((state) => state.basket);

  return (
    <Wrapper>
      <Title>Podsumowanie</Title>
      <Row>
        <Text>Liczba zamawianych książek </Text>{" "}
        <Value>{numberOfBooks(basket)}</Value>
      </Row>
      <Row>
        <Text>Do zapłaty </Text> <Value>{sumAllPrice(basket)} PLN</Value>
      </Row>
    </Wrapper>
  );
}
