import styled from "styled-components";

export const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const ColContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 17px;
`;

export const SubmitBtn = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  margin-top: 120px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  text-decoration: none;
  border: 0;

  :hover {
    background-color: #125312;
  }
`;

export const SubmitBtnOff = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  margin-top: 120px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  border: 0;
`;

export const ErrorMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin-top: 20px;
  background-color: red;
  border-radius: 10px;
  color: white;
  font-weight: 700;
`;

export const Err = styled.p`
  margin: 5px 0;
`;
