import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import postOrder from "../helpers/postOrder";
import { IOrder, IUserOrderData } from "../interfaces/interfaces";

interface IResErrorMsg {
  first_name?: string;
  last_name?: string;
  city?: string;
  zip_code?: string;
  error?: string;
}

const usePostOrder = (
  userOrderData: IUserOrderData | undefined
): [
  basket: typeof basket,
  resErrorMsg: typeof resErrorMsg,
  post: typeof post
] => {
  const [resErrorMsg, setResErrorMsg] = useState<IResErrorMsg>();
  const basket = useAppSelector((store) => store.basketReducer.basket);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const post = async () => {
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

    const res = await postOrder(order);
    if (res) {
      if (!res.error?.message) {
        dispatch({ type: "clearBasket" });
        nav("/", { state: { msg: { success: "Zamówienie zostało wysłane" } } });
      } else {
        setResErrorMsg(res.error.violations);
      }
    } else {
      setResErrorMsg({
        error: "Błąd serwera",
      });
    }
  };
  return [basket, resErrorMsg, post];
};

export default usePostOrder;
