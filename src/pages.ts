import { Home, Projects } from "./contents";

// Temporary simple component for testing
const TestHome = () => <div><h1>Hello World - Portfolio Test</h1></div>;
const TestProjects = () => <div><h1>Projects Page Test</h1></div>;

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
    component: TestHome,
    lead: "Master's Student in Computer Networks Systems",
  },
  {
    name: "Projects",
    title: "My Projects",
    path: "/projects",
    component: TestProjects,
    lead: "University and Personal Projects",
  },
];

export default Pages;