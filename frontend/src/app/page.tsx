import CreateNote from "@/components/createNote";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-4/5 mx-auto my-6">
        <CreateNote />
      </main>
    </>
  );
}
