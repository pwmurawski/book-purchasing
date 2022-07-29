import { useEffect, useState } from "react";
import getBooks from "../helpers/getBooks";
import { IBookData, IMetadata } from "../interfaces/interfaces";

const useBooks = (
  page: number
): [
  books: typeof books,
  metadata: typeof metadata,
  isLoading: typeof isLoading
] => {
  const [books, setBooks] = useState<IBookData[]>([]);
  const [metadata, setMetadata] = useState<IMetadata>();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await getBooks(page);
    if (res) {
      setBooks(res.data);
      setMetadata(res.metadata);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [page]);

  return [books, metadata, isLoading];
};

export default useBooks;
