/**
 * GET all best sellers lists : https://books-api.nomadcoders.workers.dev/lists
 * GET the books inside of a list named: 'hardcover-fiction(하드커버 픽션)': https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction
 */

import { BookResponseData, ListResponseData } from "@/types/type";
import { ApiError } from "./customError";

const fetcher = async (url: string, option?: RequestInit) => {
  const response = await fetch(url, option);
  if (!response.ok) throw new ApiError();
  return response.json();
};

export const getAllSellersLists: () => Promise<ListResponseData> = () =>
  fetcher("https://books-api.nomadcoders.workers.dev/lists");

export const getBooksByListName: (listName: string) => Promise<BookResponseData> = async (listName: string) =>
  fetcher(`https://books-api.nomadcoders.workers.dev/list?name=${listName}`);
