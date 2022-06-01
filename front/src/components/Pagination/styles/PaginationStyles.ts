import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const CurrentPage = styled.div`
  margin: 0 20px;
  font-size: 20px;
  font-weight: 600;
`;

export const Prev = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  background-color: green;
  color: white;
  cursor: pointer;
`;

export const Next = styled(Prev)``;
