const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export const request = async <T>(
  url: string,
  config: RequestInit,
): Promise<T> => {
  const response = await fetch(url, config);

  return await handleResponse(response);
};
