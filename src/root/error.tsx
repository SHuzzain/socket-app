import { Link, useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();

  console.log({ error });

  return (
    <div className="flex justify-center items-center bg-white h-screen">
      <section className="flex flex-col items-center">
        <h1 className="font-bold text-6xl">{"404"}</h1>
        <h5 className="font-medium text-xl">{"page not found"}</h5>
        <Link
          to={".."}
          relative={"path"}
          className="bg-blue-400 mt-2 p-4 rounded-full w-40 font-medium text-center capitalize"
        >
          go back
        </Link>
      </section>
    </div>
  );
}

export default ErrorPage;
