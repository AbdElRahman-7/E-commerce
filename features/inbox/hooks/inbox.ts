"use client";

import { useState, useMemo } from "react";
import {
  initialEmails,
  initialLabels,
  defaultLabelColors,
  ROWS_PER_PAGE,
} from "../constant/inbox.constants";

export function useInbox() {
  const [emails, setEmails] = useState(initialEmails);
  const [labels, setLabels] = useState(initialLabels);
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [activeLabels, setActiveLabels] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [addLabelOpen, setAddLabelOpen] = useState(false);
  const [newLabelName, setNewLabelName] = useState("");
  const [newLabelColor, setNewLabelColor] = useState(defaultLabelColors[0]);
  const [page, setPage] = useState(1);

  const folderCount = (folder: string) => {
    if (folder === "Starred") return emails.filter((e) => e.starred).length;
    return emails.filter((e) => e.folder === folder).length;
  };

  const labelCount = (labelName: string) =>
    emails.filter((e) => e.label === labelName).length;

  const filteredEmails = useMemo(() => {
    return emails.filter((email) => {
      const matchesSearch =
        searchQuery === "" ||
        email.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.message.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFolder =
        activeFolder === "Starred"
          ? email.starred
          : email.folder === activeFolder;

      const matchesLabel =
        activeLabels.size === 0 || activeLabels.has(email.label);

      return matchesSearch && matchesFolder && matchesLabel;
    });
  }, [emails, activeFolder, activeLabels, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredEmails.length / ROWS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pagedEmails = filteredEmails.slice(
    (safePage - 1) * ROWS_PER_PAGE,
    safePage * ROWS_PER_PAGE
  );

  const checkedIds = new Set(
    emails.filter((e) => e.checked).map((e) => e.id)
  );
  const anyChecked = checkedIds.size > 0;
  const allPageChecked =
    pagedEmails.length > 0 && pagedEmails.every((e) => e.checked);
  const somePageChecked = pagedEmails.some((e) => e.checked);

  const toggleCheck = (id: number) =>
    setEmails((prev) =>
      prev.map((e) => (e.id === id ? { ...e, checked: !e.checked } : e))
    );

  const toggleSelectAll = () => {
    const pageIds = new Set(pagedEmails.map((e) => e.id));
    const newVal = !allPageChecked;
    setEmails((prev) =>
      prev.map((e) => (pageIds.has(e.id) ? { ...e, checked: newVal } : e))
    );
  };

  const toggleStar = (id: number) =>
    setEmails((prev) =>
      prev.map((e) => (e.id === id ? { ...e, starred: !e.starred } : e))
    );

  const deleteChecked = () => {
    setEmails((prev) => prev.filter((e) => !e.checked));
    setPage(1);
  };

  const markImportant = () =>
    setEmails((prev) =>
      prev.map((e) =>
        e.checked ? { ...e, label: "Important", checked: false } : e
      )
    );

  const markRead = () =>
    setEmails((prev) => prev.map((e) => ({ ...e, checked: false })));

  const toggleLabelFilter = (labelName: string) => {
    setActiveLabels((prev) => {
      const next = new Set(prev);
      next.has(labelName) ? next.delete(labelName) : next.add(labelName);
      return next;
    });
    setPage(1);
  };

  const clearLabelFilters = () => {
    setActiveLabels(new Set());
    setPage(1);
  };

  const changeFolder = (title: string) => {
    setActiveFolder(title);
    setActiveLabels(new Set());
    setPage(1);
  };

  const handleAddLabel = () => {
    if (!newLabelName.trim()) return;
    setLabels((prev) => [
      ...prev,
      { name: newLabelName.trim(), color: newLabelColor },
    ]);
    setNewLabelName("");
    setNewLabelColor(defaultLabelColors[0]);
    setAddLabelOpen(false);
  };

  return {
    // state
    emails,
    labels,
    activeFolder,
    activeLabels,
    searchQuery,
    addLabelOpen,
    newLabelName,
    newLabelColor,
    page,
    // derived
    filteredEmails,
    pagedEmails,
    totalPages,
    safePage,
    checkedIds,
    anyChecked,
    allPageChecked,
    somePageChecked,
    // setters
    setSearchQuery,
    setPage,
    setAddLabelOpen,
    setNewLabelName,
    setNewLabelColor,
    // actions
    folderCount,
    labelCount,
    toggleCheck,
    toggleSelectAll,
    toggleStar,
    deleteChecked,
    markImportant,
    markRead,
    toggleLabelFilter,
    clearLabelFilters,
    changeFolder,
    handleAddLabel,
  };
}