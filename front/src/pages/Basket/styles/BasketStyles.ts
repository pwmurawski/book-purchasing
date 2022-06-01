import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  padding: 20px;

  @media (max-width: 475px) {
    padding: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

export const BookInBasketContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SubmitLink = styled(Link)`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  margin-bottom: 100px;
  text-decoration: none;

  :hover {
    background-color: #125312;
  }
`;
