import {
  IOrder,
  IResponseError,
  IResponseOrder,
} from "../interfaces/interfaces";
import api from "./api";

const postOrder = async (orderData: IOrder) => {
  const res = await api<IResponseOrder & IResponseError>("/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  return res;
};

export default postOrder;
