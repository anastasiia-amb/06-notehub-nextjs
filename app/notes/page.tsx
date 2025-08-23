import css from "./NotesPage.module.css";
import { QueryClient } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function Notes() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["notes", { query: "", page: 1 }],
    queryFn: () => fetchNotes(1, ""),
  });

  return (
    <div className={css.app}>
      <NotesClient />
    </div>
  );
}
