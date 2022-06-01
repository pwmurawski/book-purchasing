/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import maxPage from "../../helpers/maxPage";
import { IMetadata } from "../../interfaces/interfaces";
import { Wrapper, CurrentPage, Next, Prev } from "./styles/PaginationStyles";

interface IPaginationProps {
  metadata: IMetadata | undefined;
  currentPage: (currentPage: number) => void;
}

export default function Pagination({
  metadata,
  currentPage,
}: IPaginationProps) {
  const [page, setPage] = useState(1);

  const prevHandler = () => {
    setPage((state) => state - 1);
    window.scrollTo(0, 0);
  };

  const nextHandler = () => {
    setPage((state) => state + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    currentPage(page);
  }, [page]);

  return (
    <Wrapper>
      {page > 1 ? <Prev onClick={prevHandler}>{"<"}</Prev> : null}
      <CurrentPage>{page}</CurrentPage>
      {page < maxPage(metadata) ? (
        <Next onClick={nextHandler}>{">"}</Next>
      ) : null}
    </Wrapper>
  );
}
