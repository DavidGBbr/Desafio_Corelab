import CardNote from "@/components/cardNote";
import CreateNote from "@/components/createNote";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <CreateNote />
      <main className="w-4/5 mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
      </main>
    </>
  );
}
