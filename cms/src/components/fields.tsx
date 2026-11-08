import { useState } from "react";
import type { LocalizedText, ProjectImage } from "../../../app/data/projects.types";
import { moveArrayItem } from "../util";
import { uploadImage } from "../api";

export function LocalizedPairField({
  label,
  value,
  onChange,
  textarea,
}: {
  label: string;
  value: LocalizedText;
  onChange: (next: LocalizedText) => void;
  textarea?: boolean;
}) {
  const Field = textarea ? "textarea" : "input";
  return (
    <div className="field">
      <label>{label}</label>
      <div className="lang-pair">
        <div className="field">
          <label>English</label>
          <Field
            type="text"
            value={value.en}
            onChange={(e) => onChange({ ...value, en: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Français</label>
          <Field
            type="text"
            value={value.fr}
            onChange={(e) => onChange({ ...value, fr: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

export function ParagraphsEditor({
  paragraphs,
  onChange,
}: {
  paragraphs: LocalizedText[];
  onChange: (next: LocalizedText[]) => void;
}) {
  return (
    <div className="field">
      <label>Paragraphs</label>
      {paragraphs.map((p, index) => (
        <div className="list-row" key={index}>
          <LocalizedPairField
            label={`Paragraph ${index + 1}`}
            value={p}
            textarea
            onChange={(next) =>
              onChange(paragraphs.map((old, i) => (i === index ? next : old)))
            }
          />
          <div className="row-actions">
            <button
              className="icon"
              disabled={index === 0}
              onClick={() => onChange(moveArrayItem(paragraphs, index, -1))}
            >
              ↑
            </button>
            <button
              className="icon"
              disabled={index === paragraphs.length - 1}
              onClick={() => onChange(moveArrayItem(paragraphs, index, 1))}
            >
              ↓
            </button>
            <button
              className="danger"
              onClick={() =>
                onChange(paragraphs.filter((_, i) => i !== index))
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => onChange([...paragraphs, { en: "", fr: "" }])}>
        + Add paragraph
      </button>
    </div>
  );
}

export function ImagesEditor({
  images,
  collection,
  slug,
  onChange,
}: {
  images: ProjectImage[];
  collection: string;
  slug: string;
  onChange: (next: ProjectImage[]) => void;
}) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(index: number, file: File) {
    setUploading(true);
    try {
      const path = await uploadImage(collection, slug || collection, file);
      onChange(
        images.map((img, i) =>
          i === index
            ? { ...img, src: path, alt: img.alt || file.name }
            : img,
        ),
      );
    } catch (err) {
      alert(err instanceof Error ? err.message : String(err));
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="field">
      <label>Images</label>
      {images.map((image, index) => (
        <div className="list-row" key={index}>
          <div className="field">
            <label>Source (URL or uploaded path)</label>
            <input
              type="text"
              value={image.src}
              onChange={(e) =>
                onChange(
                  images.map((img, i) =>
                    i === index ? { ...img, src: e.target.value } : img,
                  ),
                )
              }
            />
          </div>
          <div className="field">
            <label>Alt text</label>
            <input
              type="text"
              value={image.alt}
              onChange={(e) =>
                onChange(
                  images.map((img, i) =>
                    i === index ? { ...img, alt: e.target.value } : img,
                  ),
                )
              }
            />
          </div>
          <input
            type="file"
            accept="image/*"
            disabled={uploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleUpload(index, file);
              e.target.value = "";
            }}
          />
          {image.src && (
            <img
              src={image.src}
              alt={image.alt}
              style={{ maxWidth: 160, display: "block", marginTop: 8 }}
            />
          )}
          <div className="row-actions">
            <button
              className="icon"
              disabled={index === 0}
              onClick={() => onChange(moveArrayItem(images, index, -1))}
            >
              ↑
            </button>
            <button
              className="icon"
              disabled={index === images.length - 1}
              onClick={() => onChange(moveArrayItem(images, index, 1))}
            >
              ↓
            </button>
            <button
              className="danger"
              onClick={() => onChange(images.filter((_, i) => i !== index))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => onChange([...images, { src: "", alt: "" }])}>
        + Add image
      </button>
    </div>
  );
}
