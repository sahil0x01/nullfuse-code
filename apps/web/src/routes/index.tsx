import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Nullfuse Code</h1>
      <p className="mt-4 text-lg">
        A cloud coding agent. Pick a repo, describe a task, and watch it work.
      </p>
    </div>
  );
}
