import instance from "./axios";

export async function getData(url: string) {
  return await instance({
    url: url,
    method: "GET",
  });
}
