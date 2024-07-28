import { getAllSellersLists } from "@/api/fetchers";
import Link from "next/link";

import style from "./style.module.css";

export default async function HomePage() {
  const data = await getAllSellersLists();
  return (
    <main className={style.container}>
      {data.results.map((list) => (
        <Link
          href={list.list_name_encoded}
          key={list.list_name_encoded}
          className="hover:bg-orange-300 active:bg-orange-100 ">
          {list.display_name}
        </Link>
      ))}
    </main>
  );
}
