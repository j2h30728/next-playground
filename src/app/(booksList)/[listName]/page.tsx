import { getBooksByListName } from "@/api/fetchers";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

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
    <main className="flex gap-2 flex-wrap">
      <div key={results.list_name_encoded}>
        <h3>{results.display_name}</h3>
        <div className=" grid grid-cols-3">
          {results.books.map((book) => (
            <div key={book.title}>
              <Image className=" w-[300px] h-[400px]" width={300} height={400} alt={book.title} src={book.book_image} />
              <h3>{book.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
