import { IResponseBook } from "../interfaces/interfaces";
import api from "./api";

const getBooks = async (page: number) => {
  const res = await api<IResponseBook>(`/books?page=${page}`, {
    method: "GET",
  });
  return res;
};

export default getBooks;
