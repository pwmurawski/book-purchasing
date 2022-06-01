import { Wrapper, BasketIcon, Text } from "./styles/BasketLinkStyles";
import basket from "../../assets/basket.png";
import basketActive from "../../assets/basketOn.png";

export default function BasketLink() {
  return (
    <Wrapper to="/koszyk">
      {({ isActive }) => (
        <>
          <BasketIcon src={isActive ? basketActive : basket} />
          <Text>Koszyk</Text>
        </>
      )}
    </Wrapper>
  );
}
