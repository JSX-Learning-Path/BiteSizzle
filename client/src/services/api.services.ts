async function fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch API");
  }

  const data = await response.json();
  return data as T;
}

export default fetchApi;



