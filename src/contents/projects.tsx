import { useLanguage } from '../contexts/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const universityProjects = [
    {
      titleKey: "projects.university.tomography.title",
      descriptionKey: "projects.university.tomography.description",
      tech: "Python"
    },
    {
      titleKey: "projects.university.database.title",
      descriptionKey: "projects.university.database.description",
      tech: "PostgreSQL"
    },
    {
      titleKey: "projects.university.ssh.title",
      descriptionKey: "projects.university.ssh.description",
      tech: "Linux, Security"
    },
    {
      titleKey: "projects.university.dns.title",
      descriptionKey: "projects.university.dns.description",
      tech: "Networking"
    },
    {
      titleKey: "projects.university.ad.title",
      descriptionKey: "projects.university.ad.description",
      tech: "Windows Server"
    },
    {
      titleKey: "projects.university.network.title",
      descriptionKey: "projects.university.network.description",
      tech: "Networking"
    }
  ];

  const personalProjects = [
    {
      titleKey: "projects.personal.server.title",
      descriptionKey: "projects.personal.server.description",
      tech: "Docker, Linux"
    },
    {
      titleKey: "projects.personal.portfolio.title",
      descriptionKey: "projects.personal.portfolio.description",
      tech: "HTML/CSS, Cloudflare"
    }
  ];

  return (
    <div className="projects-page">
      {/* University Projects Section */}
      <section className="projects-section">
        <div className="row">
          <div className="col">
            <h2>{t('projects.university.title')}</h2>
            <hr />
            <div className="projects-grid">
              {universityProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <h4>{t(project.titleKey)}</h4>
                  <p>{t(project.descriptionKey)}</p>
                  <span className="tech-tag">{project.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="personal-projects-section">
        <div className="row">
          <div className="col">
            <h2>{t('projects.personal.title')}</h2>
            <hr />
            <div className="projects-grid">
              {personalProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <h4>{t(project.titleKey)}</h4>
                  <p>{t(project.descriptionKey)}</p>
                  <span className="tech-tag">{project.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}