import { useEffect, useState } from "react";
import Books from "../../components/Books/Books";
import Pagination from "../../components/Pagination/Pagination";
import fetchApi from "../../helpers/fetchApi";
import useDisplayMessage from "../../hooks/useDisplayMessage";
import {
  IBookData,
  IMetadata,
  IResponseBook,
} from "../../interfaces/interfaces";
import { Wrapper, Title, BooksContainer, SuccesMsg } from "./styles/HomeStyles";

export default function Home() {
  const [booksData, setBooksData] = useState<IBookData[]>([]);
  const [metadata, setMetadata] = useState<IMetadata>();
  const [page, setPage] = useState(1);
  const msg = useDisplayMessage();

  const getCurrentPage = (currentPage: number) => {
    setPage(currentPage);
  };

  const getBooks = async () => {
    const res = await fetchApi<IResponseBook>(`/books?page=${page}`, {
      method: "GET",
    });
    setBooksData(res.data);
    setMetadata({
      page: res.metadata.page,
      records_per_page: res.metadata.records_per_page,
      total_records: res.metadata.total_records,
    });
  };

  useEffect(() => {
    getBooks();
  }, [page]);

  return (
    <Wrapper>
      <Title>Książki</Title>
      <BooksContainer>
        <Books booksData={booksData} />
      </BooksContainer>
      <Pagination metadata={metadata} currentPage={getCurrentPage} />
      {msg.success ? <SuccesMsg>{msg.success}</SuccesMsg> : null}
    </Wrapper>
  );
}
