import { getBooksByListName } from "@/api/fetchers";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

import style from "./style.module.css";
import Typewriter from "@/components/Typewriter";

type Props = {
  params: { listName: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const data = await getBooksByListName(params.listName);

  return {
    title: data.results.display_name,
  };
}
export default async function BookListPage({ params }: Props) {
  const data = await getBooksByListName(params.listName);
  const { results } = data;
  
  return (
    <main className={style.container}>
      <Typewriter text={results.display_name} />
      <div className={style.list}>
        {results.books.map((book) => (
          <div key={book.title}>
            <Image priority width={250} height={380} alt={book.title} src={book.book_image} />
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
