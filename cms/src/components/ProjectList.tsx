import type { ProjectItem, ProjectSection } from "../../../app/data/projects.types";
import { SECTION_LABELS } from "../util";

const SECTIONS: ProjectSection[] = [
  "igem",
  "university-L3",
  "university-M1",
  "personal",
];

export function ProjectList({
  items,
  selectedId,
  onSelect,
  onAdd,
  onDelete,
  onMove,
}: {
  items: ProjectItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onAdd: (section: ProjectSection) => void;
  onDelete: (id: string) => void;
  onMove: (id: string, direction: -1 | 1) => void;
}) {
  return (
    <div>
      {SECTIONS.map((section) => {
        const sectionItems = items.filter((i) => i.section === section);
        return (
          <section className="group" key={section}>
            <h2>{SECTION_LABELS[section]}</h2>
            <ul className="project-list">
              {sectionItems.map((item, index) => (
                <li
                  key={item.id}
                  className={item.id === selectedId ? "selected" : ""}
                >
                  <button
                    className="icon"
                    disabled={index === 0}
                    onClick={() => onMove(item.id, -1)}
                    aria-label="Move up"
                  >
                    ↑
                  </button>
                  <button
                    className="icon"
                    disabled={index === sectionItems.length - 1}
                    onClick={() => onMove(item.id, 1)}
                    aria-label="Move down"
                  >
                    ↓
                  </button>
                  <span className="title" onClick={() => onSelect(item.id)}>
                    {item.title.en || item.title.fr || item.id}
                  </span>
                  <button onClick={() => onSelect(item.id)}>Edit</button>
                  <button className="danger" onClick={() => onDelete(item.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <div className="toolbar">
              <button onClick={() => onAdd(section)}>+ Add project</button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
