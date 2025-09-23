import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "../contexts/LanguageContext";

export function Navbar() {
  const { t } = useLanguage();

  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
            >
              {t(`nav.${subpage.name?.toLowerCase()}`) || subpage.name}
            </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          id={`page-${pageIndex}`}
          className="dropdown"
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      return (
        <Nav.Link key={`page-${pageIndex}`} as={Link} to={item.path}>
          {t(`nav.${item.name?.toLowerCase()}`) || item.name}
        </Nav.Link>
      );
    }
  });

  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <BootstrapNavbar.Brand>
          {import.meta.env.VITE_TEAM_NAME}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="left-aligned">{pages}</Nav>
          <Nav className="ms-auto">
            <LanguageToggle />
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}