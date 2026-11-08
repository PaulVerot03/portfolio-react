import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        greeting: "Welcome to my portfolio!",
        "scroll-down": "Scroll Down",
        article: "article",
        about: "About me",
        "about-content":
          "I am a student pursuing a Master's in Computer Network Systems at Université Paris-Saclay. I am particularly interested in networks and systems administration as well as biology.",
        links: "Links & Contact",
        "links-content": {
          cv: "CV / Resume",
        },
        stage: "Internships",
        "stage-list": {
          kameleoon: "2019 - Kameleoon",
          ibisc: "2026 - IBISC Laboratory",
        },
        "education-subtitle-1": "More about my education",
        "education-subtitle-2": "More about my interships",
        "education-description-1":
          "I started my degree in the Mathematics and Computer Science double track, a first year split 50/50 between mathematics and computer science. In my first year, I covered the basics of advanced mathematics (calculus, advanced statistics, linear algebra, real and complex analysis) as well as computer science fundamentals (architecture, optoelectronics for optical fibers, programming basics).",
        "education-description-2":
          "In my second year in CS, I learned programming languages such as OCaml, C, Python, HTML/CSS/JS, and Assembly, as well as the basics of networking.",
        "education-description-3":
          "In my third year, I began specializing in Systems and Networks, learning how to deploy and manage networks; for example: user management with Windows Active Directory and Linux servers, DNS, firewalls, and simple databases.",
        "education-description-4":
          "Having finished my Bachelor's degree (Licence), I decided to pursue my Master's degree at the same university (now under the aegis of Paris-Saclay) for the quality of teaching and the hands-on approach of the curriculum. I love that our professors give us many real-world projects. So far, I have learned load balancing and fault tolerance, as well as advanced DHCP, routing protocols and architecture, datacenter design and management, and database security.",
        "stage-content":
          "I had the opportunity to complete an internship at the IBISC laboratory in Évry, one of the foremost research labs in bioinformatics. During my internship, I worked with a small team on RNA tertiary structure folding and helped build a commercial platform. In addition, I helped redesign the EvryRNA website.",
        knowledge: "What I can do",
        "knowledge-subtitle": "What I learned",
        "knowledge-content-1":
          "My Master's degree focuses on networks and administration; I have learned to set up and maintain servers and networks. I have also covered basics of advanced mathematics, opto-electronics, and statistics. Additionally, I am proficient in Python for scripting.",
        "knowledge-content-2":
          "Here is a list of the technologies my university curriculum taught me:",
        "knowledge-content-3":
          "You can find out more about the Project I made or been a part of in the Project Tab",
        tidbits: "Other tidbits",
        "tidbits-content": {
          language: {
            title: "English",
            toeic: "TOEIC - C1",
            efset: "EFSET - C2",
          },
          "first-aid": {
            title: "First aid",
            psc1: "PSC-1",
            "water-rescue": "Water rescue",
          },
        },
        "projects-cta": "Go to Projects",
        interests: "My interests",
        "interest-content": {
          music: {
            title: "Music",
            "sub-title": "Music has always meant a great deal to me.",
            "fav-title": "A few of my favorite tracks:",
            "fav-artist": "My favorite artists:",
            "fav-album": "Finally, my favorite albums:",
            "hi-hi":
              "I'm also very interested in HI-FI equipment, I like buying old amplifiers and headphones and trying to repair them, here's an excerpt from my collection:",
            hifi: {
              headphones: "Headphones:",
              amplifiers: "Amplifiers:",
              speakers: "Speakers:",
            },
            guitar:
              "I also built my own guitar using reclaimed Wenge wood and hardware salvaged from old guitars.",
          },
          wood: {
            title: "Woodworking",
            "sub-title":
              "Woodworking is one of my oldest passions. Being lucky enough to have access to a workshop, I spend hours making or repairing all sorts of things, but mostly carving wood and building things. Right beneath is the early step of a small Drakkar I built for my uncle, the Spine and Dragon are made out of Wenge and the Sidings where stained Pine.",
          },
          computer: {
            title: "Computing",
            "sub-title":
              "Naturally, as a networking master's student, I love computing. I particularly enjoy building computers and configuring systems, which is how my love for Linux was born, I use it everywhere.",
            linux:
              "In 2020 I decided to try Linux and immediately fell in love. The FOSS philosophy struck a chord with me, and ever since I try to contribute to the community as much as I can. I mainly do translations, but right now my project is to build an alternative version of LainOS based on GNOME instead of Sway, to better fit my workflow.",
          },
          watches: {
            title: "Watchmaking",
            "sub-title":
              "My other great passion is watchmaking; I'm particularly fond of French, Swiss, and Soviet watches from the 70s. I'm always fascinated by the intricacy inside the movements, and often by the rugged simplicity of older calibers.",
            "fav-watch": "My favorite watch is this 1937 Ancora d'Ouro",
            "fav-watch-2":
              "Ancora d'Ouro being a long defunct match maker from Porto",
          },
        },
        scholar: "Education",
        "scholar-content": {
          bac: {
            title: "Baccalauréat, Mathematics & History",
            school: "Lycée Sainte Catherine Labouré, 2021",
          },
          deug: {
            title: "DEUG in Computer Science",
            school: "Université Paris-Saclay, 2024",
          },
          licence: {
            title:
              "Bachelor's in Computer Science — Systems & Network Administration",
            school: "Université Paris-Saclay, 2024/2025",
          },
          master1: {
            title:
              "Master's 1 in Computer Science — Computer and Network Systems, ranked 36/141",
            school: "Université Paris-Saclay, 2025/2026",
          },
          master2: {
            title:
              "Master's 2 in Computer Science — Computer and Network Systems",
            school: "Université Paris-Saclay, 2026/2027",
          },
        },
        blog: {
          title: "Blog",
          intro:
            "Notes and write-ups on whatever I've been working on or learning lately.",
        },
        projects: {
          title: "My projects",
          intro:
            "Over the past two years much of our teaching was project-based. I also had the chance to participate in the synthetic biology competition iGEM.",
          uni: {
            title: "University",
            intro: "Here are some projects I completed over the past two years",
            L3: {
              title: "L3",
            },
            M1: {
              title: "M1",
            },
          },
          personal: {
            title: "Personal",
          },
        },
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue",
        greeting: "Bienvenue sur mon portfolio.",
        "scroll-down": "Défiler",
        article: "article",
        about: "À propos de moi",
        "about-content":
          "Je suis étudiant en Master Computer and Network Systems à l'Université Paris-Saclay. Je m'intéresse de près à l'administration système et réseau, ainsi qu'aux applications de l'informatique en biologie.",
        links: "Liens & Contact",
        "links-content": {
          cv: "CV",
        },
        stage: "Mes stages",
        "stage-list": {
          kameleoon: "2019 - Kameleoon",
          ibisc: "2026 - Laboratoire IBISC",
        },
        "education-subtitle-1": "Plus à propos de mes études",
        "education-subtitle-2": "Plus à propos de mes stages",
        "education-description-1":
          "J'ai commencé mes études supérieures par un portail Mathématiques-Informatique, une première année partagée à parts égales entre les deux disciplines. J'y ai acquis des bases solides en mathématiques (analyse réelle et complexe, algèbre linéaire, statistiques) ainsi que les fondements de l'informatique (architecture des machines, opto-électronique appliquée aux fibres optiques et initiation à la programmation).",
        "education-description-2":
          "J'ai poursuivi mon parcours en Licence d'informatique, où j'ai approfondi la programmation avec des langages comme OCaml, C, Python, Assembleur et le développement web (HTML/CSS/JS), tout en découvrant les bases de l'architecture réseau.",
        "education-description-3":
          "En troisième année de Licence, je me suis spécialisé en Systèmes et Réseaux. J'ai appris à concevoir, déployer et administrer des infrastructures : gestion d'annuaires sous Active Directory et serveurs Linux, configuration DNS, pare-feu et bases de données.",
        "education-description-4":
          "Une fois ma Licence en poche, j'ai choisi de continuer en Master à Paris-Saclay, attiré par la qualité de la formation et son aspect très pratique. Les enseignants nous confient de nombreux projets concrets. En Master 1, j'étudie la répartition de charge (load-balancing), la haute disponibilité, le routage dynamique, l'architecture des datacenters et la sécurisation des bases de données.",
        "stage-content":
          "J'ai eu l'opportunité de faire un stage au laboratoire IBISC à Évry, un centre de recherche de pointe en bio-informatique. Au sein d'une petite équipe, j'ai travaillé sur des algorithmes de repliement 3D de l'ARN et participé au développement de leur future plateforme commerciale, tout en contribuant à la refonte du site web EvryRNA.",
        knowledge: "Compétences",
        "knowledge-subtitle": "Ce que j'ai appris",
        "knowledge-content-1":
          "Mon cursus est axé sur les infrastructures, l'administration système et les réseaux. J'ai également développé de solides compétences en mathématiques appliquées et en programmation, notamment avec Python pour l'automatisation et le scripting.",
        "knowledge-content-2":
          "Voici un aperçu des technologies étudiées durant mon parcours universitaire :",
        "knowledge-content-3":
          "N'hésitez pas à consulter l'onglet Projets pour en savoir plus sur mes réalisations académiques et personnelles !",
        tidbits: "Autres informations",
        "tidbits-content": {
          language: {
            title: "Anglais",
            toeic: "TOEIC - C1",
            efset: "EFSET - C2",
          },
          "first-aid": {
            title: "Secourisme",
            psc1: "PSC-1",
            "water-rescue": "Secours aquatique",
          },
        },
        "projects-cta": "Voir les projets",
        interests: "Mes passions",
        "interest-content": {
          music: {
            title: "Musique",
            "sub-title":
              "La musique occupe une place centrale dans mon quotidien.",
            "fav-title": "Quelques-uns de mes morceaux favoris :",
            "fav-artist": "Mes artistes de référence :",
            "fav-album": "Mes albums fétiches :",
            "hi-hi":
              "Je suis aussi passionné par le matériel Hi-Fi vintage : j'adore dénicher, restaurer et réparer de vieux amplificateurs ou casques audio. En voici un aperçu :",
            hifi: {
              headphones: "Casques :",
              amplifiers: "Amplificateurs :",
              speakers: "Enceintes :",
            },
            guitar:
              "J'ai également fabriqué ma propre guitare électrique à partir de wengé de récupération et de pièces détachées d'anciens instruments.",
          },
          wood: {
            title: "Menuiserie",
            "sub-title":
              "Le travail du bois est l'une de mes passions les plus anciennes. Ayant la chance d'avoir accès à un atelier équipé, j'y passe des heures à fabriquer, réparer ou sculpter divers objets. Ci-dessous, voici les prémices d'une réplique de Drakkar que j'ai construite pour mon oncle : la quille et la figure de proue sont en wengé, et les flancs en pin teinté.",
          },
          computer: {
            title: "Informatique",
            "sub-title":
              "Forcément, en tant qu'étudiant en réseaux, je suis passionné d'informatique. J'adore assembler des ordinateurs et configurer des systèmes de A à Z. C'est de là qu'est né mon amour pour Linux, que j'utilise aujourd'hui sur toutes mes machines.",
            linux:
              "J'ai installé Linux pour la première fois en 2020 et j'ai immédiatement accroché. La philosophie du logiciel libre (FOSS) m'a beaucoup parlé, et j'essaie d'y contribuer dès que je peux, principalement via de la traduction. Mon projet du moment est de concevoir une version alternative de LainOS basée sur GNOME à la place de Sway pour mieux l'adapter à mon flux de travail.",
          },
          watches: {
            title: "Horlogerie",
            "sub-title":
              "Mon autre grande passion est l'horlogerie mécanique. J'affectionne tout particulièrement les montres françaises, suisses et soviétiques des années 70. Je reste fasciné par la précision mécanique de ces mouvements et la robustesse de ces calibres anciens.",
            "fav-watch": "Ma montre préférée est cette Ancora d'Ouro de 1937.",
            "fav-watch-2":
              "Ancora d'Ouro était une marque d'horlogerie originaire de Porto, aujourd'hui disparue.",
          },
        },
        scholar: "Mon parcours scolaire",
        "scholar-content": {
          bac: {
            title: "Baccalauréat Mathématiques-Histoire",
            school: "Lycée Sainte Catherine Labouré, 2021",
          },
          deug: {
            title: "DEUG informatique",
            school: "Université Paris-Saclay, 2024",
          },
          licence: {
            title: "Licence informatique — Administration Système et Réseau",
            school: "Université Paris-Saclay, 2024/2025",
          },
          master1: {
            title:
              "Master informatique 1 — Computer and Network Systems, rang 36/141",
            school: "Université Paris-Saclay, 2025/2026",
          },
          master2: {
            title: "Master informatique 2 — Computer and Network Systems",
            school: "Université Paris-Saclay, 2026/2027",
          },
        },
        blog: {
          title: "Blog",
          intro:
            "Notes et retours d'expérience sur ce que j'apprends ou sur quoi je travaille en ce moment.",
        },
        projects: {
          title: "Projets",
          intro:
            "Ces deux dernières années, une grande partie de nos cours s'est déroulée sous forme de projets pratiques. J'ai aussi eu l'opportunité de collaborer avec l'équipe de biologie synthétique iGEM.",
          uni: {
            title: "Projets Universitaires",
            intro:
              "Voici quelques-uns des projets marquants réalisés dans le cadre de mes études :",
            L3: {
              title: "Licence 3",
            },
            M1: {
              title: "Master 1",
            },
          },
          personal: {
            title: "Projets Personnels",
          },
        },
      },
    },
  },
});

export default i18n;
