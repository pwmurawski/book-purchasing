import { useAppSelector } from "../../app/hooks";
import numberOfBooks from "../../helpers/numberOfBooks";
import sumAllPrice from "../../helpers/sumAllPrice";
import { Wrapper, Row, Title, Text, Value } from "./styles/SummaryStyles";

export default function Summary() {
  const basket = useAppSelector((store) => store.basketReducer.basket);

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
