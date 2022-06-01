/* eslint-disable no-empty */
const fetchApi = async <T>(url: string, options: RequestInit | undefined) => {
  try {
    const baseUrl = process.env.REACT_APP_API_URL;

    const request = await fetch(`${baseUrl}${url}`, options);
    const res: T = await request.json();

    return res;
  } catch {}
  return undefined;
};

export default fetchApi;
