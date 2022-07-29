import { useState } from "react";
import { Navigate } from "react-router-dom";
import OrderForm from "../../components/OrderForm/OrderForm";
import Summary from "../../components/Summary/Summary";
import usePostOrder from "../../hooks/usePostOrder";
import { IUserOrderData } from "../../interfaces/interfaces";
import {
  Wrapper,
  Title,
  Container,
  ColContainer,
  SubmitBtn,
  SubmitBtnOff,
  ErrorMsg,
  Err,
} from "./styles/OrderStyles";

export default function Order() {
  const [userOrderData, setUserOrderData] = useState<IUserOrderData>();
  const [isError, setIsError] = useState(true);
  const [basket, resErrorMsg, postOrder] = usePostOrder(userOrderData);

  if (!basket.length && !userOrderData) return <Navigate to="/" />;
  return (
    <Wrapper>
      <Title>Zamówienie</Title>
      <Container>
        <ColContainer>
          <Summary />
          {isError ? (
            <SubmitBtnOff>ZAMAWIAM I PŁACĘ</SubmitBtnOff>
          ) : (
            <SubmitBtn onClick={postOrder}>ZAMAWIAM I PŁACĘ</SubmitBtn>
          )}
        </ColContainer>
        <ColContainer>
          <Title>Dane zamówienia</Title>
          <OrderForm
            userOrderData={(data) => setUserOrderData(data)}
            isError={(error) => setIsError(error)}
          />
          {resErrorMsg ? (
            <ErrorMsg>
              {resErrorMsg.error && <Err>{resErrorMsg.error}</Err>}
              {resErrorMsg.first_name && <Err>{resErrorMsg.first_name}</Err>}
              {resErrorMsg.last_name && <Err>{resErrorMsg.last_name}</Err>}
              {resErrorMsg.city && <Err>{resErrorMsg.city}</Err>}
              {resErrorMsg.zip_code && <Err>{resErrorMsg.zip_code}</Err>}
            </ErrorMsg>
          ) : null}
        </ColContainer>
      </Container>
    </Wrapper>
  );
}
