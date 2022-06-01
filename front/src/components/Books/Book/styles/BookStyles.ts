import styled from "styled-components";

export const Wrapper = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 372px;
  min-height: 372px;
  width: 100%;
  box-shadow: 0 2px 5px lightgray;
  border-radius: 5px;
  border: 2px solid whitesmoke;
  margin: 7px;
  padding: 20px;
  overflow: hidden;
`;

export const Img = styled.img`
  max-width: 150px;
  height: auto;
`;

export const Title = styled.h2`
  margin: 0 0 0 20px;
  font-size: 21px;
  font-weight: 500;
  @media (max-width: 405px) {
    margin: 10px 0;
  }
`;

export const Author = styled.p`
  margin: 5px 0 0 0;
  font-size: 15px;
`;

export const Pages = styled(Author)``;

export const Price = styled(Author)`
  align-self: flex-end;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 405px) {
    flex-direction: column;
  }
`;

export const Bold = styled.b`
  font-weight: 500;
`;

export const AddToBasketBtn = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 35px;
  padding: 10px;
  margin-top: 5px;
  background-color: green;
  border: 0;
  border-radius: 15px;
  color: white;
  font-size: 12px;
  cursor: pointer;
`;

export const Added = styled(AddToBasketBtn)`
  background-color: white;
  border: 2px solid green;
  color: green;
`;
