import type { BlogPost } from "../../../app/data/blog.types";
import { LocalizedPairField, ParagraphsEditor, ImagesEditor } from "./fields";

export function BlogEditor({
  post,
  existingIds,
  onChange,
  onClose,
}: {
  post: BlogPost;
  existingIds: string[];
  onChange: (next: BlogPost) => void;
  onClose: () => void;
}) {
  const idConflict = existingIds.filter((id) => id === post.id).length > 1;

  return (
    <div className="editor">
      <div className="field">
        <label>Post ID (slug, also the image-upload folder name)</label>
        <input
          type="text"
          value={post.id}
          onChange={(e) => onChange({ ...post, id: e.target.value })}
        />
        {idConflict && (
          <p className="status error">
            This ID is already used by another post — IDs must be unique.
          </p>
        )}
      </div>

      <div className="field">
        <label>Date</label>
        <input
          type="date"
          value={post.date}
          onChange={(e) => onChange({ ...post, date: e.target.value })}
        />
      </div>

      <LocalizedPairField
        label="Title"
        value={post.title}
        onChange={(title) => onChange({ ...post, title })}
      />

      <ParagraphsEditor
        paragraphs={post.body}
        onChange={(body) => onChange({ ...post, body })}
      />

      <ImagesEditor
        images={post.images ?? []}
        collection="blog"
        slug={post.id}
        onChange={(images) =>
          onChange({ ...post, images: images.length ? images : undefined })
        }
      />

      <div className="editor-actions">
        <button className="primary" onClick={onClose}>
          Done editing
        </button>
      </div>
    </div>
  );
}
