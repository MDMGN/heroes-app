export const ajax = <T>(url: string): Promise<T> => {
  return fetch(url)
    .then((resp) =>
      resp.ok ? resp.json() : resp.json().then((error) => error)
    )
    .then((data) => data);
};
