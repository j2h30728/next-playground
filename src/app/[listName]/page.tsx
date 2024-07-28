import { getBooksByListName } from "@/api/fetchers";
import Image from "next/image";

export default async function BookListPage({ params }: { params: { listName: string } }) {
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
