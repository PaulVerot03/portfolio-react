//import "../portfolio.css";
import { useLanguage } from '../contexts/LanguageContext';

export function Home() {
  const { t } = useLanguage();
  const skills = [
    { name: "Linux", level: 70 , description :  t('home.skills.linux')},
    { name: "Windows", level: 60, description : t('home.skills.windows')},
    { name: "Active Directory", level: 40, description :  t('home.skills.activedirectory') },
    { name: "HTML/CSS", level: 40, description :  t('home.skills.html')},
    { name: "Databases", level: 40, description :  t('home.skills.database') },
    { name: "Python", level: 50, description :  t('home.skills.python') },
  ];

let LinkedIn = "https://www.linkedin.com/in/paul-verot-b48805353/";
let InstaGram = "https://www.instagram.com/paulverot.aep/";
let GitHub =  "https://github.com/PaulVerot03";

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1>{t('home.title')}</h1>
            <h3>{t('home.subtitle')}</h3>
            <p className="lead">{t('home.university')}</p>
            <div className="social-links">
              <a href={InstaGram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={GitHub} target="_blank" rel="noopener noreferrer">
                 GitHub
              </a>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="profile-image-container">
            <div className="profile-image-placeholder">
              <div className="profile-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <p>{t('home.profilePhoto')}</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="row">
          <div className="col">
            <h2>{t('home.about.title')}</h2>
            <hr />
            <p>
              {t('home.about.description')}
            </p>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="skills-section">
        <div className="row">
          <div className="col">
            <h2>{t('home.skills.title')}</h2>
            <hr />
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    {/*<span className="skill-percentage">{skill.level}%</span>*/}
                    <p className='skill-description'>{skill.description}</p>
                  {/*</div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>*/}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <div className="row">
          <div className="col">
            <h2>{t('home.interests.title')}</h2>
            <hr />
            <div className="interests-grid">
              <div className="interest-item">
                <h4>{t('home.interests.photography.title')}</h4>
                <p>{t('home.interests.photography.description')}</p>
              </div>
              <div className="interest-item">
                <h4>{t('home.interests.music.title')}</h4>
                <p>{t('home.interests.music.description')}</p>
              </div>
              <div className="interest-item">
                <h4>{t('home.interests.manual.title')}</h4>
                <p>{t('home.interests.manual.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="contact-section">
        <div className="row">
          <div className="col">
            <h2>{t('home.contact.title')}</h2>
            <hr />
            <p>
              {t('home.contact.description')}
            </p>
            <div className="contact-links">
              <a href={InstaGram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={GitHub} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}