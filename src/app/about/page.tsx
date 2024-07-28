import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};
export default async function AboutPage() {
  return <main className="flex gap-2 flex-wrap">About Page</main>;
}
