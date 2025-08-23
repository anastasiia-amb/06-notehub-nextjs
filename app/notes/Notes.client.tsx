"use client";

import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";
import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";
import SearchBox from "@/components/SearchBox/SearchBox";

import css from "./NotesPage.module.css";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import { useDebounce } from "use-debounce";
import type { NoteResponse } from "@/lib/api";

export default function NotesClient() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [debouncedQuery] = useDebounce(query, 300);

  const handleChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const { data } = useQuery<NoteResponse>({
    queryKey: ["notes", debouncedQuery, page],
    queryFn: () => fetchNotes(page, debouncedQuery),
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.totalPages || 0;

  return (
    <>
      <header className={css.toolbar}>
        <SearchBox value={query} onChange={handleChange} />
        {totalPages > 1 && (
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        )}
        <button className={css.button} onClick={openModal}>
          Create note
        </button>
      </header>
      {isOpen && (
        <Modal onClose={closeModal}>
          <NoteForm onClose={closeModal} />
        </Modal>
      )}
      {data?.notes && <NoteList notes={data?.notes} />}
    </>
  );
}
