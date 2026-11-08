import type { NavItem } from "../api";
import { moveArrayItem } from "../util";

export function NavEditor({
  items,
  onChange,
}: {
  items: NavItem[];
  onChange: (next: NavItem[]) => void;
}) {
  return (
    <div>
      <p className="hint">
        Pills shown at the top of every page, in this order. Href can be an
        internal path (e.g. "/blog") or a full URL.
      </p>
      {items.map((item, index) => (
        <div className="list-row" key={index}>
          <div className="field">
            <label>Label</label>
            <input
              type="text"
              value={item.label}
              onChange={(e) =>
                onChange(
                  items.map((it, i) =>
                    i === index ? { ...it, label: e.target.value } : it,
                  ),
                )
              }
            />
          </div>
          <div className="field">
            <label>Href</label>
            <input
              type="text"
              value={item.href}
              onChange={(e) =>
                onChange(
                  items.map((it, i) =>
                    i === index ? { ...it, href: e.target.value } : it,
                  ),
                )
              }
            />
          </div>
          <div className="row-actions">
            <button
              className="icon"
              disabled={index === 0}
              onClick={() => onChange(moveArrayItem(items, index, -1))}
            >
              ↑
            </button>
            <button
              className="icon"
              disabled={index === items.length - 1}
              onClick={() => onChange(moveArrayItem(items, index, 1))}
            >
              ↓
            </button>
            <button
              className="danger"
              onClick={() => onChange(items.filter((_, i) => i !== index))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={() => onChange([...items, { label: "", href: "" }])}
      >
        + Add nav item
      </button>
    </div>
  );
}
