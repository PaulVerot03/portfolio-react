import { useEffect, useState } from "react";
import { fetchNav, saveNav, type NavItem } from "../api";
import { NavEditor } from "../components/NavEditor";

type Status = { kind: "idle" | "ok" | "error"; message?: string };

export function NavPanel() {
  const [items, setItems] = useState<NavItem[] | null>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    fetchNav()
      .then(setItems)
      .catch((err) =>
        setStatus({ kind: "error", message: String(err.message || err) }),
      );
  }, []);

  async function handleSave() {
    if (!items) return;
    if (items.some((i) => !i.label.trim() || !i.href.trim())) {
      setStatus({
        kind: "error",
        message: "Every nav item needs both a label and an href.",
      });
      return;
    }
    setStatus({ kind: "idle" });
    try {
      await saveNav(items);
      setStatus({ kind: "ok", message: "Saved to app/data/nav.json" });
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
        {status.message ?? "Loading navigation..."}
      </p>
    );
  }

  return (
    <div>
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

      <NavEditor items={items} onChange={setItems} />
    </div>
  );
}
