import { Home, Projects } from "./contents";

interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "Portfolio",
    path: "/",
    component: Home,
    lead: "Master's Student in Computer Networks Systems",
  },
  {
    name: "Projects",
    title: "My Projects",
    path: "/projects",
    component: Projects,
    lead: "University and Personal Projects",
  },
];

export default Pages;