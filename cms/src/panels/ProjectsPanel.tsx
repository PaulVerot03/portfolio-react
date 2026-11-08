import { useEffect, useMemo, useState } from "react";
import type { ProjectItem, ProjectSection } from "../../../app/data/projects.types";
import { iconMap } from "../../../app/components/TechBadges";
import { fetchProjects, saveProjects } from "../api";
import { moveWithinSection, newProject } from "../util";
import { ProjectList } from "../components/ProjectList";
import { ProjectEditor } from "../components/ProjectEditor";

type Status = { kind: "idle" | "ok" | "error"; message?: string };

export function ProjectsPanel() {
  const [items, setItems] = useState<ProjectItem[] | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    fetchProjects()
      .then(setItems)
      .catch((err) =>
        setStatus({ kind: "error", message: String(err.message || err) }),
      );
  }, []);

  const iconKeys = useMemo(() => Object.keys(iconMap).sort(), []);
  const selectedItem = items?.find((i) => i.id === selectedId) ?? null;
  const existingIds = useMemo(() => items?.map((i) => i.id) ?? [], [items]);

  function updateItem(updated: ProjectItem) {
    setItems((prev) =>
      prev ? prev.map((i) => (i.id === selectedId ? updated : i)) : prev,
    );
    // The id field itself can change while editing; keep selection following it.
    setSelectedId(updated.id);
  }

  function handleAdd(section: ProjectSection) {
    const created = newProject(section);
    setItems((prev) => (prev ? [...prev, created] : prev));
    setSelectedId(created.id);
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this project? This cannot be undone.")) return;
    setItems((prev) => (prev ? prev.filter((i) => i.id !== id) : prev));
    if (selectedId === id) setSelectedId(null);
  }

  function handleMove(id: string, direction: -1 | 1) {
    setItems((prev) => (prev ? moveWithinSection(prev, id, direction) : prev));
  }

  async function handleSave() {
    if (!items) return;
    const ids = items.map((i) => i.id);
    if (new Set(ids).size !== ids.length) {
      setStatus({
        kind: "error",
        message: "Fix duplicate project IDs before saving.",
      });
      return;
    }
    setStatus({ kind: "idle" });
    try {
      await saveProjects(items);
      setStatus({ kind: "ok", message: "Saved to app/data/projects.json" });
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }

  if (!items) {
    return (
      <p className={status.kind === "error" ? "status error" : "hint"}>
        {status.message ?? "Loading projects..."}
      </p>
    );
  }

  return (
    <div>
      <p className="hint">
        Editing app/data/projects.json. The main site (npm run dev) will
        auto-reload once you save.
      </p>

      <div className="toolbar">
        <button className="primary" onClick={handleSave}>
          Save all
        </button>
        {status.kind !== "idle" && (
          <span
            className={status.kind === "error" ? "status error" : "status ok"}
          >
            {status.message}
          </span>
        )}
      </div>

      <ProjectList
        items={items}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onMove={handleMove}
      />

      {selectedItem && (
        <ProjectEditor
          item={selectedItem}
          iconKeys={iconKeys}
          existingIds={existingIds}
          onChange={updateItem}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}
