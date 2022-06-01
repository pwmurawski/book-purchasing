import styled from "styled-components";

export const Wrapper = styled.section`
  box-sizing: border-box;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  padding: 20px 0;
`;

export const Title = styled.h3`
  border-bottom: 2px solid gray;
  padding: 10px;
  margin: 0;
  font-size: 17px;
`;

export const Row = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 5px;
  border-bottom: 1px solid lightgray;
`;

export const Text = styled.span`
  font-weight: 500;
`;

export const Value = styled.span``;
