import AllList from "@/components/AllList";

export default async function Home() {
  //! Fetching Data in Server Components
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const data = await res.json();

  console.log(data);

  return (
    <>
      <AllList data={data} />
      {/* <AllList /> */}
    </>
  );
}
