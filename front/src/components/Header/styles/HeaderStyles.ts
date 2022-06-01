/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 25px 20px;
`;

export const Logo = styled.img`
  width: 64px;
  height: 64px;
`;

export const SearchBar = styled.input`
  box-sizing: border-box;
  max-width: 450px;
  width: 100%;
  height: 36px;
  padding: 5px;
  margin: 0 20px;
  border: 0;
  border-radius: 10px;
  background-color: whitesmoke;
`;
