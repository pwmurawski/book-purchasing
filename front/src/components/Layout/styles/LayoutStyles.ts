import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
`;

const headerHeight = "120px";
export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${headerHeight};
  box-shadow: 0px 2px 2px lightgray;
  background-color: white;
`;

export const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: ${headerHeight};
`;
