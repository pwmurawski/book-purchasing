/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import maxPage from "../../helpers/maxPage";
import usePagination from "../../hooks/usePagination";
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
  const [page, prevHandler, nextHandler] = usePagination();

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
