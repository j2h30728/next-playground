import { getAllSellersLists } from "@/api/fetchers";
import Link from "next/link";

export default async function HomePage() {
  const data = await getAllSellersLists();
  return (
    <main className="flex gap-2 flex-wrap">
      {data.results.map((list) => (
        <Link
          href={list.list_name_encoded}
          key={list.list_name_encoded}
          className="border-neutral-500 border p-3 hover:bg-gray-300 active:bg-gray-100 ">
          {list.display_name}
        </Link>
      ))}
    </main>
  );
}
