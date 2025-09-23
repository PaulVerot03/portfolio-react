import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Helper function to get the correct image path with base URL
const getImagePath = (imagePath: string) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${imagePath.startsWith('/') ? imagePath.slice(1) : imagePath}`;
};

export function Projects() {
  const { t } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (section: string, index: number) => {
    const cardKey = `${section}-${index}`;
    setExpandedCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  const universityProjects = [
    {
      titleKey: "projects.university.tomography.title",
      descriptionKey: "projects.university.tomography.description",
      detailedDescriptionKey: "projects.university.tomography.detailed",
      tech: "Python",
      image: "images/projects/tomography.webp"
    },
    {
      titleKey: "projects.university.database.title",
      descriptionKey: "projects.university.database.description",
      detailedDescriptionKey: "projects.university.database.detailed",
      tech: "PostgreSQL",
      image: "images/projects/database.jpg"
    },
    {
      titleKey: "projects.university.ssh.title",
      descriptionKey: "projects.university.ssh.description",
      detailedDescriptionKey: "projects.university.ssh.detailed",
      tech: "Linux, Security"
    },
    {
      titleKey: "projects.university.dns.title",
      descriptionKey: "projects.university.dns.description",
      detailedDescriptionKey: "projects.university.dns.detailed",
      tech: "Networking"
    },
    {
      titleKey: "projects.university.ad.title",
      descriptionKey: "projects.university.ad.description",
      detailedDescriptionKey: "projects.university.ad.detailed",
      tech: "Windows Server"
    },
    {
      titleKey: "projects.university.network.title",
      descriptionKey: "projects.university.network.description",
      detailedDescriptionKey: "projects.university.network.detailed",
      tech: "Networking"
    }
  ];

  const personalProjects = [
    {
      titleKey: "projects.personal.server.title",
      descriptionKey: "projects.personal.server.description",
      detailedDescriptionKey: "projects.personal.server.detailed",
      tech: "Docker, Linux"
    },
    {
      titleKey: "projects.personal.portfolio.title",
      descriptionKey: "projects.personal.portfolio.description",
      detailedDescriptionKey: "projects.personal.portfolio.detailed",
      tech: "HTML/CSS, Cloudflare",
      github: "https://github.com/PaulVerot03/portfolio-react",
      image: "images/projects/portfolio.jpg"
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
              {universityProjects.map((project, index) => {
                const cardKey = `university-${index}`;
                const isExpanded = expandedCards[cardKey];
                return (
                  <div key={index} className="project-card">
                    {project.image && (
                      <div className="project-image-container">
                        <img
                          src={getImagePath(project.image)}
                          alt={t(project.titleKey)}
                          className="project-image"
                          onLoad={() => console.log(`Image loaded: ${getImagePath(project.image)}`)}
                          onError={(e) => {
                            console.error(`Image failed to load: ${getImagePath(project.image)}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="project-content">
                      <h4>{t(project.titleKey)}</h4>
                      <p>{t(project.descriptionKey)}</p>
                      {isExpanded && (
                        <div className="project-detailed-content">
                          <p>{t(project.detailedDescriptionKey)}</p>
                        </div>
                      )}
                    </div>
                    <div className="project-footer">
                      <span className="tech-tag">{project.tech}</span>
                      <button
                        onClick={() => toggleCard('university', index)}
                        className="show-more-btn"
                      >
                        {isExpanded ? t('projects.showLess') : t('projects.showMore')}
                      </button>
                    </div>
                  </div>
                );
              })}
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
              {personalProjects.map((project, index) => {
                const cardKey = `personal-${index}`;
                const isExpanded = expandedCards[cardKey];
                return (
                  <div key={index} className="project-card">
                    {project.image && (
                      <div className="project-image-container">
                        <img
                          src={getImagePath(project.image)}
                          alt={t(project.titleKey)}
                          className="project-image"
                          onLoad={() => console.log(`Image loaded: ${getImagePath(project.image)}`)}
                          onError={(e) => {
                            console.error(`Image failed to load: ${getImagePath(project.image)}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="project-content">
                      <h4>{t(project.titleKey)}</h4>
                      <p>{t(project.descriptionKey)}</p>
                      {isExpanded && (
                        <div className="project-detailed-content">
                          <p>{t(project.detailedDescriptionKey)}</p>
                        </div>
                      )}
                    </div>
                    <div className="project-footer">
                      <span className="tech-tag">{project.tech}</span>
                      <div className="project-actions">
                        <button
                          onClick={() => toggleCard('personal', index)}
                          className="show-more-btn"
                        >
                          {isExpanded ? t('projects.showLess') : t('projects.showMore')}
                        </button>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}