/* eslint-disable camelcase */
import { IMetadata } from "../interfaces/interfaces";

const maxPage = (metadata: IMetadata | undefined) => {
  if (metadata) {
    const { records_per_page, total_records } = metadata;

    return Math.ceil(total_records / records_per_page);
  }
  return 0;
};

export default maxPage;
