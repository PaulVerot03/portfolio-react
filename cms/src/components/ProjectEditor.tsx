import type {
  ProjectItem,
  ProjectLink,
  ProjectSection,
} from "../../../app/data/projects.types";
import { moveArrayItem } from "../util";
import { LocalizedPairField, ParagraphsEditor, ImagesEditor } from "./fields";

const SECTION_OPTIONS: { value: ProjectSection; label: string }[] = [
  { value: "igem", label: "iGEM" },
  { value: "university-L3", label: "University — L3" },
  { value: "university-M1", label: "University — M1" },
  { value: "personal", label: "Personal" },
];

function LinksEditor({
  links,
  onChange,
}: {
  links: ProjectLink[];
  onChange: (next: ProjectLink[]) => void;
}) {
  return (
    <div className="field">
      <label>Links</label>
      {links.map((link, index) => (
        <div className="list-row" key={index}>
          <LocalizedPairField
            label="Label"
            value={link.label}
            onChange={(label) =>
              onChange(
                links.map((l, i) => (i === index ? { ...l, label } : l)),
              )
            }
          />
          <div className="field">
            <label>URL</label>
            <input
              type="url"
              value={link.url}
              onChange={(e) =>
                onChange(
                  links.map((l, i) =>
                    i === index ? { ...l, url: e.target.value } : l,
                  ),
                )
              }
            />
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              checked={!!link.subtitle}
              onChange={(e) =>
                onChange(
                  links.map((l, i) =>
                    i === index
                      ? {
                          ...l,
                          subtitle: e.target.checked
                            ? { en: "", fr: "" }
                            : undefined,
                        }
                      : l,
                  ),
                )
              }
            />
            <label>Show custom text instead of the raw URL</label>
          </div>
          {link.subtitle && (
            <LocalizedPairField
              label="Custom subtitle text"
              value={link.subtitle}
              onChange={(subtitle) =>
                onChange(
                  links.map((l, i) => (i === index ? { ...l, subtitle } : l)),
                )
              }
            />
          )}
          <div className="row-actions">
            <button
              className="icon"
              disabled={index === 0}
              onClick={() => onChange(moveArrayItem(links, index, -1))}
            >
              ↑
            </button>
            <button
              className="icon"
              disabled={index === links.length - 1}
              onClick={() => onChange(moveArrayItem(links, index, 1))}
            >
              ↓
            </button>
            <button
              className="danger"
              onClick={() => onChange(links.filter((_, i) => i !== index))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={() =>
          onChange([...links, { label: { en: "", fr: "" }, url: "" }])
        }
      >
        + Add link
      </button>
    </div>
  );
}

export function ProjectEditor({
  item,
  iconKeys,
  existingIds,
  onChange,
  onClose,
}: {
  item: ProjectItem;
  iconKeys: string[];
  existingIds: string[];
  onChange: (next: ProjectItem) => void;
  onClose: () => void;
}) {
  const idConflict =
    existingIds.filter((id) => id === item.id).length > 1;

  return (
    <div className="editor">
      <div className="field">
        <label>Project ID (slug, also the image-upload folder name)</label>
        <input
          type="text"
          value={item.id}
          onChange={(e) => onChange({ ...item, id: e.target.value })}
        />
        {idConflict && (
          <p className="status error">
            This ID is already used by another project — IDs must be unique.
          </p>
        )}
      </div>

      <div className="field">
        <label>Section</label>
        <select
          value={item.section}
          onChange={(e) =>
            onChange({ ...item, section: e.target.value as ProjectSection })
          }
        >
          {SECTION_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <LocalizedPairField
        label="Title"
        value={item.title}
        onChange={(title) => onChange({ ...item, title })}
      />

      <ParagraphsEditor
        paragraphs={item.paragraphs}
        onChange={(paragraphs) => onChange({ ...item, paragraphs })}
      />

      <ImagesEditor
        images={item.images ?? []}
        collection="projects"
        slug={item.id}
        onChange={(images) =>
          onChange({ ...item, images: images.length ? images : undefined })
        }
      />

      <div className="checkbox-field">
        <input
          type="checkbox"
          checked={!!item.video}
          onChange={(e) =>
            onChange({
              ...item,
              video: e.target.checked ? { title: "", src: "" } : undefined,
            })
          }
        />
        <label>Has a video embed</label>
      </div>
      {item.video && (
        <>
          <div className="field">
            <label>Video title (accessibility label)</label>
            <input
              type="text"
              value={item.video.title}
              onChange={(e) =>
                onChange({
                  ...item,
                  video: { ...item.video!, title: e.target.value },
                })
              }
            />
          </div>
          <div className="field">
            <label>Video embed URL</label>
            <input
              type="url"
              value={item.video.src}
              onChange={(e) =>
                onChange({
                  ...item,
                  video: { ...item.video!, src: e.target.value },
                })
              }
            />
          </div>
        </>
      )}

      <LinksEditor
        links={item.links ?? []}
        onChange={(links) =>
          onChange({ ...item, links: links.length ? links : undefined })
        }
      />

      <div className="field">
        <label>Technologies (comma-separated icon keys)</label>
        <input
          type="text"
          value={item.technologies ?? ""}
          onChange={(e) => onChange({ ...item, technologies: e.target.value })}
        />
        <p className="hint">Valid keys: {iconKeys.join(", ")}</p>
      </div>

      <div className="editor-actions">
        <button className="primary" onClick={onClose}>
          Done editing
        </button>
      </div>
    </div>
  );
}
