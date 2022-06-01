import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top: 2px solid whitesmoke;

  :last-of-type {
    border-bottom: 2px solid whitesmoke;
  }

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  @media (max-width: 450px) {
    margin: 0 10px;
  }
`;

export const Img = styled.img`
  max-width: 100px;
  height: auto;

  @media (max-width: 450px) {
    max-width: 60px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0 0 10px 0;

  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const Author = styled.p`
  margin: 0;
`;

export const Pages = styled(Author)``;

export const Price = styled.p`
  margin: 0 0 0 20px;

  @media (max-width: 450px) {
    margin: 0 0 0 10px;
  }
`;

export const Bold = styled.b`
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  font-size: 15px;
  font-weight: 800;
  border: 0;
  border-radius: 20px;
  background-color: gray;
  color: white;
  cursor: pointer;

  :hover {
    background-color: rgb(218, 150, 151);
  }

  @media (max-width: 450px) {
    margin-left: 10px;
  }
`;

export const Quantity = styled.input`
  width: 35px;
  height: 20px;
  padding: 3px;
  border: 2px solid gray;
  border-radius: 10px;
`;
