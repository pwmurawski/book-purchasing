import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import OrderForm from "../../components/OrderForm/OrderForm";
import Summary from "../../components/Summary/Summary";
import fetchApi from "../../helpers/fetchApi";
import {
  IOrder,
  IResponseError,
  IResponseOrder,
  IUserOrderData,
} from "../../interfaces/interfaces";
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

interface IResErrorMsg {
  first_name?: string;
  last_name?: string;
  city?: string;
  zip_code?: string;
  error?: string;
}

export default function Order() {
  const [userOrderData, setUserOrderData] = useState<IUserOrderData>();
  const [resErrorMsg, setResErrorMsg] = useState<IResErrorMsg>();
  const [isError, setIsError] = useState(true);
  const basket = useAppSelector((store) => store.basketReducer.basket);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const getUserOrderData = (data: IUserOrderData) => {
    setUserOrderData(data);
  };

  const isErrorHandler = (error: boolean) => {
    setIsError(error);
  };

  const submit = async () => {
    const order: IOrder = {
      order: basket.map(({ bookData, quantity }) => ({
        id: bookData.id,
        quantity,
      })),
      first_name: userOrderData?.firstName,
      last_name: userOrderData?.lastName,
      city: userOrderData?.city,
      zip_code: userOrderData?.code,
    };

    const res = await fetchApi<IResponseOrder & IResponseError>("/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (res) {
      if (!res.error?.message) {
        dispatch({ type: "clearBasket" });
        nav("/", { state: { msg: { success: "Zamówienie zostało wysłane" } } });
      } else {
        setResErrorMsg({
          first_name: res.error.violations.first_name,
          last_name: res.error.violations.last_name,
          city: res.error.violations.city,
          zip_code: res.error.violations.zip_code,
        });
      }
    } else {
      setResErrorMsg({
        error: "Błąd serwera",
      });
    }
  };

  if (!basket.length && !userOrderData) {
    return <Navigate to="/" />;
  }
  return (
    <Wrapper>
      <Title>Zamówienie</Title>
      <Container>
        <ColContainer>
          <Summary />
          {isError ? (
            <SubmitBtnOff>ZAMAWIAM I PŁACĘ</SubmitBtnOff>
          ) : (
            <SubmitBtn onClick={submit}>ZAMAWIAM I PŁACĘ</SubmitBtn>
          )}
        </ColContainer>
        <ColContainer>
          <Title>Dane zamówienia</Title>
          <OrderForm
            userOrderData={getUserOrderData}
            isError={isErrorHandler}
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
