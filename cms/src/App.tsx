import { useState } from "react";
import { ProjectsPanel } from "./panels/ProjectsPanel";
import { BlogPanel } from "./panels/BlogPanel";
import { NavPanel } from "./panels/NavPanel";

const TABS = ["Projects", "Blog", "Navigation"] as const;
type Tab = (typeof TABS)[number];

export default function App() {
  const [tab, setTab] = useState<Tab>("Projects");

  return (
    <div>
      <h1>Portfolio CMS</h1>
      <div className="toolbar">
        {TABS.map((t) => (
          <button
            key={t}
            className={t === tab ? "primary" : ""}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Projects" && <ProjectsPanel />}
      {tab === "Blog" && <BlogPanel />}
      {tab === "Navigation" && <NavPanel />}
    </div>
  );
}
