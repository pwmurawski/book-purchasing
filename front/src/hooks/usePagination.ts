/* eslint-disable no-unused-vars */
import { useState } from "react";

const usePagination = (): [
  page: typeof page,
  prevHandler: typeof prevHandler,
  nextHandler: typeof nextHandler
] => {
  const [page, setPage] = useState(1);

  const prevHandler = () => {
    setPage((state) => state - 1);
    window.scrollTo(0, 0);
  };

  const nextHandler = () => {
    setPage((state) => state + 1);
    window.scrollTo(0, 0);
  };

  return [page, prevHandler, nextHandler];
};

export default usePagination;
