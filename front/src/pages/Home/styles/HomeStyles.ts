/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.section`
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

export const BooksContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SuccesMsg = styled.div`
  position: fixed;
  left: 30%;
  right: 30%;
  top: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px;
  background-color: RGBA(89, 240, 148);
  border-radius: 10px;
  color: white;
  font-weight: 700;
  z-index: 1;
`;
