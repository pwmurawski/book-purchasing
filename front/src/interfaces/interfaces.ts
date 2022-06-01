export interface IBookData {
  id: number;
  title: string;
  author: string;
  cover_url: string;
  pages: number;
  price: number;
  currency: string;
}

export interface IMetadata {
  page: number;
  records_per_page: number;
  total_records: number;
}

export interface IResponseBook {
  data: IBookData[];
  metadata: IMetadata;
}

export interface IOrder {
  order: {
    id: number;
    quantity: number;
  }[];
  first_name: string | undefined;
  last_name: string | undefined;
  city: string | undefined;
  zip_code: string | undefined;
}

export interface IResponseOrder {
  data?: IOrder;
}

export interface IResponseError {
  error?: {
    message: string;
    violations: {
      first_name?: string;
      last_name?: string;
      city?: string;
      zip_code?: string;
    };
  };
}

export interface IUserOrderData {
  firstName: string;
  lastName: string;
  city: string;
  code: string;
}

export interface IBasket {
  bookData: IBookData;
  quantity: number;
}
