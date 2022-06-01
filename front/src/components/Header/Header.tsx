import { Link } from "react-router-dom";
import { Wrapper, Logo, SearchBar } from "./styles/HeaderStyles";
import BasketLink from "../BasketLink/BasketLink";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <SearchBar placeholder="Szukaj..." />
      <BasketLink />
    </Wrapper>
  );
}
