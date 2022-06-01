const fetchApi = async <T>(url: string, options: RequestInit | undefined) => {
  const baseUrl = process.env.REACT_APP_API_URL;

  const request = await fetch(`${baseUrl}${url}`, options);
  const res: T = await request.json();

  return res;
};

export default fetchApi;
