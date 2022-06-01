import { ReactElement } from "react";
import { Wrapper, Header, Main } from "./styles/LayoutStyles";

interface ILayoutProps {
  header: ReactElement;
  main: ReactElement;
}

export default function Layout({ header, main }: ILayoutProps) {
  return (
    <Wrapper>
      <Header>{header}</Header>
      <Main>{main}</Main>
    </Wrapper>
  );
}
