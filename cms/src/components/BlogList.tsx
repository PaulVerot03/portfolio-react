import type { BlogPost } from "../../../app/data/blog.types";

export function BlogList({
  posts,
  selectedId,
  onSelect,
  onAdd,
  onDelete,
}: {
  posts: BlogPost[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onAdd: () => void;
  onDelete: (id: string) => void;
}) {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div>
      <ul className="project-list">
        {sorted.map((post) => (
          <li
            key={post.id}
            className={post.id === selectedId ? "selected" : ""}
          >
            <span className="hint" style={{ minWidth: 90 }}>
              {post.date}
            </span>
            <span className="title" onClick={() => onSelect(post.id)}>
              {post.title.en || post.title.fr || post.id}
            </span>
            <button onClick={() => onSelect(post.id)}>Edit</button>
            <button className="danger" onClick={() => onDelete(post.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="toolbar">
        <button onClick={onAdd}>+ Add post</button>
      </div>
    </div>
  );
}
