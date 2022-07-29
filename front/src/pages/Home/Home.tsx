import { useState } from "react";
import Books from "../../components/Books/Books";
import Pagination from "../../components/Pagination/Pagination";
import useBooks from "../../hooks/useBooks";
import useLocationMessage from "../../hooks/useLocationMessage";
import { Wrapper, Title, BooksContainer, SuccesMsg } from "./styles/HomeStyles";

export default function Home() {
  const [page, setPage] = useState(1);
  const msg = useLocationMessage();
  const [booksData, metadata, loading] = useBooks(page);

  return (
    <Wrapper>
      {loading && <h1>Loading ...</h1>}
      <Title>Książki</Title>
      <BooksContainer>
        <Books booksData={booksData} />
      </BooksContainer>
      <Pagination
        metadata={metadata}
        currentPage={(currentPage) => setPage(currentPage)}
      />
      {msg.success ? <SuccesMsg>{msg.success}</SuccesMsg> : null}
    </Wrapper>
  );
}
