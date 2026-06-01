"use client";

import {
  Box,
  Paper,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Checkbox,
  Chip,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {
  Star,
  Search,
  Trash2,
  AlertCircle,
  Mail,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { useState, useMemo } from "react";
import {
  sidebarItems,
  defaultLabelColors,
  initialLabels,
  initialEmails,
} from "@/shared/constants/inboxConfig";

const ROWS_PER_PAGE = 5;

const colorMap: Record<string, { bg: string; text: string }> = {
  "#4ADE80": { bg: "#DCFCE7", text: "#16A34A" },
  "#60A5FA": { bg: "#DBEAFE", text: "#2563EB" },
  "#FB923C": { bg: "#FFEDD5", text: "#EA580C" },
  "#C084FC": { bg: "#F3E8FF", text: "#9333EA" },
  "#F87171": { bg: "#FEE2E2", text: "#DC2626" },
  "#FBBF24": { bg: "#FEF3C7", text: "#D97706" },
};

const getLabelColors = (
  label: string,
  labels: { name: string; color: string }[],
) => {
  const found = labels.find((l) => l.name === label);
  return colorMap[found?.color ?? ""] ?? { bg: "#F3F4F6", text: "#374151" };
};

// Flatten all items from all sidebar sections into a single array
const allFolderItems = sidebarItems.flatMap((group) => group.items);

export default function InboxPage() {
  const [emails, setEmails] = useState(initialEmails);
  const [labels, setLabels] = useState(initialLabels);
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [activeLabels, setActiveLabels] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [addLabelOpen, setAddLabelOpen] = useState(false);
  const [newLabelName, setNewLabelName] = useState("");
  const [newLabelColor, setNewLabelColor] = useState(defaultLabelColors[0]);
  const [page, setPage] = useState(1);

  // ── counts ───────────────────────────────────────────────────────────────
  const folderCount = (folder: string) => {
    if (folder === "Starred") return emails.filter((e) => e.starred).length;
    return emails.filter((e) => e.folder === folder).length;
  };

  const labelCount = (labelName: string) =>
    emails.filter((e) => e.label === labelName).length;

  // ── filter ───────────────────────────────────────────────────────────────
  const filteredEmails = useMemo(() => {
    return emails.filter((e) => {
      const matchesSearch =
        searchQuery === "" ||
        e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.message.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFolder =
        activeFolder === "Starred" ? e.starred : e.folder === activeFolder;

      const matchesLabel = activeLabels.size === 0 || activeLabels.has(e.label);

      return matchesSearch && matchesFolder && matchesLabel;
    });
  }, [emails, activeFolder, activeLabels, searchQuery]);

  // ── pagination ────────────────────────────────────────────────────────────
  const totalPages = Math.max(
    1,
    Math.ceil(filteredEmails.length / ROWS_PER_PAGE),
  );
  const safePage = Math.min(page, totalPages);
  const pagedEmails = filteredEmails.slice(
    (safePage - 1) * ROWS_PER_PAGE,
    safePage * ROWS_PER_PAGE,
  );

  // ── select helpers ────────────────────────────────────────────────────────
  const checkedIds = new Set(emails.filter((e) => e.checked).map((e) => e.id));
  const anyChecked = checkedIds.size > 0;
  const allPageChecked =
    pagedEmails.length > 0 && pagedEmails.every((e) => e.checked);
  const somePageChecked = pagedEmails.some((e) => e.checked);

  // ── actions ───────────────────────────────────────────────────────────────
  const toggleCheck = (id: number) =>
    setEmails((prev) =>
      prev.map((e) => (e.id === id ? { ...e, checked: !e.checked } : e)),
    );

  const toggleSelectAll = () => {
    const pageIds = new Set(pagedEmails.map((e) => e.id));
    const newVal = !allPageChecked;
    setEmails((prev) =>
      prev.map((e) => (pageIds.has(e.id) ? { ...e, checked: newVal } : e)),
    );
  };

  const toggleStar = (id: number) =>
    setEmails((prev) =>
      prev.map((e) => (e.id === id ? { ...e, starred: !e.starred } : e)),
    );

  const deleteChecked = () => {
    setEmails((prev) => prev.filter((e) => !e.checked));
    setPage(1);
  };

  const markImportant = () =>
    setEmails((prev) =>
      prev.map((e) =>
        e.checked ? { ...e, label: "Important", checked: false } : e,
      ),
    );

  const markRead = () =>
    setEmails((prev) => prev.map((e) => ({ ...e, checked: false })));

  // ── label filter toggle (multi) ───────────────────────────────────────────
  const toggleLabelFilter = (labelName: string) => {
    setActiveLabels((prev) => {
      const next = new Set(prev);
      if (next.has(labelName)) {
        next.delete(labelName);
      } else {
        next.add(labelName);
      }
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

  // ── add label ─────────────────────────────────────────────────────────────
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

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      {/* ── Sidebar ──────────────────────────────────────────────────────── */}
      <Paper
        sx={{
          width: { xs: "100%", lg: 260 },
          borderRadius: 4,
          p: 2,
          height: "fit-content",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            mb: 4,
            borderRadius: 3,
            py: 1.2,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          + Compose
        </Button>

        <Typography sx={{ fontWeight: 700, mb: 2 }}>My Email</Typography>

        <List disablePadding>
          {allFolderItems.map((item) => (
            <ListItemButton
              key={item.title}
              onClick={() => changeFolder(item.title)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                backgroundColor:
                  activeFolder === item.title && activeLabels.size === 0
                    ? "#EEF2FF"
                    : "transparent",
                "&:hover": { backgroundColor: "#F3F4F6" },
              }}
            >
              <ListItemText primary={item.title} />
              <Chip
                label={folderCount(item.title)}
                size="small"
                sx={{
                  height: 20,
                  fontSize: 11,
                  fontWeight: 600,
                  backgroundColor:
                    activeFolder === item.title && activeLabels.size === 0
                      ? "#C7D2FE"
                      : "#F3F4F6",
                  color:
                    activeFolder === item.title && activeLabels.size === 0
                      ? "#3730A3"
                      : "#6B7280",
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Label header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>Label</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {activeLabels.size > 0 && (
              <Button
                size="small"
                onClick={clearLabelFilters}
                sx={{
                  fontSize: 11,
                  textTransform: "none",
                  color: "#6B7280",
                  minWidth: "auto",
                  px: 1,
                  py: 0,
                }}
              >
                Clear
              </Button>
            )}
            <IconButton
              size="small"
              onClick={() => setAddLabelOpen(true)}
              title="Add label"
            >
              <Plus size={16} />
            </IconButton>
          </Box>
        </Box>

        {/* Active label summary chips */}
        {activeLabels.size > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
            {Array.from(activeLabels).map((name) => {
              const lc = getLabelColors(name, labels);
              return (
                <Chip
                  key={name}
                  label={name}
                  size="small"
                  onDelete={() => toggleLabelFilter(name)}
                  sx={{
                    backgroundColor: lc.bg,
                    color: lc.text,
                    fontSize: 11,
                    height: 22,
                    "& .MuiChip-deleteIcon": { color: lc.text, fontSize: 14 },
                  }}
                />
              );
            })}
          </Box>
        )}

        <List disablePadding>
          {labels.map((label) => {
            const isChecked = activeLabels.has(label.name);
            return (
              <ListItemButton
                key={label.name}
                onClick={() => toggleLabelFilter(label.name)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  backgroundColor: isChecked ? "#EEF2FF" : "transparent",
                  "&:hover": { backgroundColor: "#F3F4F6" },
                }}
              >
                <Checkbox
                  checked={isChecked}
                  size="small"
                  sx={{
                    p: 0,
                    mr: 1,
                    color: label.color,
                    "&.Mui-checked": { color: label.color },
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onChange={() => toggleLabelFilter(label.name)}
                />
                <Box
                  sx={{
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    backgroundColor: label.color,
                    mr: 1.5,
                    flexShrink: 0,
                  }}
                />
                <ListItemText primary={label.name} />
                <Chip
                  label={labelCount(label.name)}
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: 11,
                    fontWeight: 600,
                    backgroundColor: isChecked ? "#C7D2FE" : "#F3F4F6",
                    color: isChecked ? "#3730A3" : "#6B7280",
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Paper>

      <Paper
        sx={{
          flex: 1,
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* Topbar */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <TextField
            placeholder="Search mail"
            size="small"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            sx={{
              width: { xs: "100%", md: 300 },
              "& .MuiOutlinedInput-root": {
                borderRadius: 10,
                backgroundColor: "#F9FAFB",
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={16} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              title="Mark as read"
              onClick={markRead}
              disabled={!anyChecked}
            >
              <Mail size={18} />
            </IconButton>
            <IconButton
              title="Mark as important"
              onClick={markImportant}
              disabled={!anyChecked}
            >
              <AlertCircle size={18} />
            </IconButton>
            <IconButton
              title="Delete selected"
              onClick={deleteChecked}
              disabled={!anyChecked}
            >
              <Trash2 size={18} />
            </IconButton>
          </Box>
        </Box>

        <Divider />

        {/* Select-all row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 0.5,
            borderBottom: "1px solid #F3F4F6",
            backgroundColor: somePageChecked ? "#F5F7FF" : "transparent",
          }}
        >
          <Checkbox
            checked={allPageChecked}
            indeterminate={somePageChecked && !allPageChecked}
            onChange={toggleSelectAll}
            size="small"
          />
          {anyChecked && (
            <Typography sx={{ fontSize: 13, color: "#6B7280", ml: 1 }}>
              {checkedIds.size} selected
            </Typography>
          )}
        </Box>

        {/* Email rows */}
        {pagedEmails.length === 0 ? (
          <Box sx={{ p: 6, textAlign: "center" }}>
            <Typography sx={{ color: "#9CA3AF" }}>No emails found</Typography>
          </Box>
        ) : (
          pagedEmails.map((email) => {
            const lc = getLabelColors(email.label, labels);
            return (
              <Box
                key={email.id}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "40px 40px 180px 110px 1fr 90px",
                  alignItems: "center",
                  px: 2,
                  py: 1.5,
                  borderBottom: "1px solid #F3F4F6",
                  backgroundColor: email.checked ? "#F5F7FF" : "transparent",
                  "&:hover": {
                    backgroundColor: email.checked ? "#EEF2FF" : "#F9FAFB",
                  },
                }}
              >
                <Checkbox
                  checked={email.checked}
                  onChange={() => toggleCheck(email.id)}
                  size="small"
                />
                <IconButton size="small" onClick={() => toggleStar(email.id)}>
                  <Star
                    size={16}
                    fill={email.starred ? "#FACC15" : "transparent"}
                    color={email.starred ? "#FACC15" : "#9CA3AF"}
                  />
                </IconButton>
                <Typography sx={{ fontWeight: 600, fontSize: 14 }} noWrap>
                  {email.name}
                </Typography>
                <Chip
                  label={email.label}
                  size="small"
                  sx={{
                    width: "fit-content",
                    backgroundColor: lc.bg,
                    color: lc.text,
                    fontWeight: 500,
                  }}
                />
                <Typography sx={{ fontSize: 14, color: "#4B5563" }} noWrap>
                  {email.message}
                </Typography>
                <Typography
                  sx={{ fontSize: 13, color: "#6B7280", textAlign: "right" }}
                >
                  {email.time}
                </Typography>
              </Box>
            );
          })
        )}

        {/* Pagination footer */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
            {filteredEmails.length === 0
              ? "No results"
              : `${(safePage - 1) * ROWS_PER_PAGE + 1}–${Math.min(
                  safePage * ROWS_PER_PAGE,
                  filteredEmails.length,
                )} of ${filteredEmails.length}`}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <IconButton
              size="small"
              disabled={safePage === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              <ChevronLeft size={18} />
            </IconButton>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Box
                key={p}
                onClick={() => setPage(p)}
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: safePage === p ? 700 : 400,
                  cursor: "pointer",
                  backgroundColor: safePage === p ? "#EEF2FF" : "transparent",
                  color: safePage === p ? "#3730A3" : "#6B7280",
                  "&:hover": { backgroundColor: "#F3F4F6" },
                }}
              >
                {p}
              </Box>
            ))}

            <IconButton
              size="small"
              disabled={safePage === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              <ChevronRight size={18} />
            </IconButton>
          </Box>
        </Box>
      </Paper>

      {/* ── Add Label Dialog ─────────────────────────────────────────────── */}
      <Dialog
        open={addLabelOpen}
        onClose={() => setAddLabelOpen(false)}
        slotProps={{
          paper: { sx: { borderRadius: 3, p: 1, minWidth: 320 } },
        }}
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>
          Add New Label
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Label name"
            value={newLabelName}
            onChange={(e) => setNewLabelName(e.target.value)}
            size="small"
            sx={{ mb: 2, mt: 1 }}
            onKeyDown={(e) => e.key === "Enter" && handleAddLabel()}
          />
          <Typography sx={{ fontSize: 13, color: "#6B7280", mb: 1.5 }}>
            Choose color
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            {defaultLabelColors.map((color) => (
              <Box
                key={color}
                onClick={() => setNewLabelColor(color)}
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: color,
                  cursor: "pointer",
                  outline:
                    newLabelColor === color
                      ? "3px solid #1F2937"
                      : "3px solid transparent",
                  outlineOffset: 2,
                  transition: "outline 0.15s",
                }}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setAddLabelOpen(false)}
            sx={{ textTransform: "none" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleAddLabel}
            disabled={!newLabelName.trim()}
            sx={{ textTransform: "none", borderRadius: 2 }}
          >
            Add Label
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
