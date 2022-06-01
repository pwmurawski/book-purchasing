import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

export const BasketIcon = styled.img`
  width: 36px;
  height: 36px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 0;
`;
