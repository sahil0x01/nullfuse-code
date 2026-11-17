import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About Nullfuse Code" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-4 text-lg">
        Nullfuse Code is a cloud coding agent for our own use
      </p>
      <Link to="/" className="mt-6 inline-block underline">
        Back to home
      </Link>
    </div>
  );
}
