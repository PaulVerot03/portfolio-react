import { useEffect, useMemo, useState } from "react";
import type { BlogPost } from "../../../app/data/blog.types";
import { fetchBlog, saveBlog } from "../api";
import { newBlogPost } from "../util";
import { BlogList } from "../components/BlogList";
import { BlogEditor } from "../components/BlogEditor";

type Status = { kind: "idle" | "ok" | "error"; message?: string };

export function BlogPanel() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    fetchBlog()
      .then(setPosts)
      .catch((err) =>
        setStatus({ kind: "error", message: String(err.message || err) }),
      );
  }, []);

  const selectedPost = posts?.find((p) => p.id === selectedId) ?? null;
  const existingIds = useMemo(() => posts?.map((p) => p.id) ?? [], [posts]);

  function updatePost(updated: BlogPost) {
    setPosts((prev) =>
      prev ? prev.map((p) => (p.id === selectedId ? updated : p)) : prev,
    );
    setSelectedId(updated.id);
  }

  function handleAdd() {
    const created = newBlogPost();
    setPosts((prev) => (prev ? [...prev, created] : prev));
    setSelectedId(created.id);
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    setPosts((prev) => (prev ? prev.filter((p) => p.id !== id) : prev));
    if (selectedId === id) setSelectedId(null);
  }

  async function handleSave() {
    if (!posts) return;
    const ids = posts.map((p) => p.id);
    if (new Set(ids).size !== ids.length) {
      setStatus({
        kind: "error",
        message: "Fix duplicate post IDs before saving.",
      });
      return;
    }
    setStatus({ kind: "idle" });
    try {
      await saveBlog(posts);
      setStatus({ kind: "ok", message: "Saved to app/data/blog.json" });
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }

  if (!posts) {
    return (
      <p className={status.kind === "error" ? "status error" : "hint"}>
        {status.message ?? "Loading blog posts..."}
      </p>
    );
  }

  return (
    <div>
      <p className="hint">
        Editing app/data/blog.json. The main site (npm run dev) will
        auto-reload once you save. Posts are shown newest-first on /blog.
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

      <BlogList
        posts={posts}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onAdd={handleAdd}
        onDelete={handleDelete}
      />

      {selectedPost && (
        <BlogEditor
          post={selectedPost}
          existingIds={existingIds}
          onChange={updatePost}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}
