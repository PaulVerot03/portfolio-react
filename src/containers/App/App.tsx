import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";
import Loader from "../../components/Loader";
import { LanguageProvider } from "../../contexts/LanguageContext";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathMapping = getPathMapping();
  const routerLocation = useLocation();
  const currentPath =
    routerLocation.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";



  const title =
    currentPath in pathMapping && pathMapping[currentPath].title ? pathMapping[currentPath].title : "Not Found";

  const lead =
    currentPath in pathMapping && pathMapping[currentPath].lead ? pathMapping[currentPath].lead : "";
// here to change tab name effect
    useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME}  `;
  }, [title]);



  if (isLoading) {
    return <Loader onFinish={() => setIsLoading(false)} />;
  }

  return (
    <LanguageProvider>
      {/* Navigation */}
      <Navbar />
      <Header title={title || ""} lead={lead || ""} />
      <div className="container">
        {/* Main content */}
        <Routes>
            {Object.entries(pathMapping).map(
              ([path, { component: Component }]) => (
                <Route
                  key={path}
                  path={path}
                  element={<Component />}
                />
              ),
            )}
            <Route
              path="*"
              element={
                <>
                  <Header
                    title="Not Found"
                    lead="The requested URL was not found on this server."
                  />
                  <NotFound />
                </>
              }
            />
        </Routes>
      </div>
      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      <Footer />
    </LanguageProvider>
  );
};

export default App;
