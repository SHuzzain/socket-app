import { Link, useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();

  console.log({ error });

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <section className="flex flex-col items-center">
        <h1 className="text-6xl font-bold">{"404"}</h1>
        <h5 className="text-xl font-medium">{"page not found"}</h5>
        <Link
          to={".."}
          relative={"path"}
          className="mt-2 w-40 rounded-full bg-blue-400 p-4 text-center font-medium capitalize"
        >
          go back
        </Link>
      </section>
    </div>
  );
}

export default ErrorPage;
