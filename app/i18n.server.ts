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
        greeting: "My name is Paul and I welcome you to my portfolio!",
        article: "article",
        about: "About me",
        "about-content":
          "I am a student pursuing a Master's in Computer Network Systems at Université Paris-Saclay. I am particularly interested in networks and systems administration as well as biology.",
        links: "Links & Contact",
        stage: "Internships",
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
        projects: {
          title: "My projects",
          intro:
            "Over the past two years much of our teaching was project-based. I also had the chance to participate in the synthetic biology competition iGEM.",
          igem: {
            title: "IGEM - 2025",
            intro:
              "I was approached by a member of the iGEM team at our university to help with the project, so I designed and coded our wiki.",
            "project-description":
              "Our project focused on engineering cyanobacteria strains to optimize enzyme efficiency and significantly improve carbon fixation.",
            "link-text": "Evry Paris-Saclay | Solaris",
            award:
              "At the Grand Jamboree we were nominated for Best New Basic Part and received a Gold Medal.",
            future:
              "I will participate again in the next edition and hope to contribute more to the team.",
            impact:
              "This project sparked an interest in biology I didn't know I had, so I began learning more about bioinformatics to branch out.",
            technologies: "SiPython, FaReact",
          },
          igem2026: {
            title: "IGEM - 2026",
            intro:
              "I decided to join the IGEM association for the following editions.",
            "project-description":
              "This year, we are working on designing orthogonal ribosomes to enable targeted synthetic protein translation.",
            "link-text": "Evry Paris-Saclay | ORBIT",
            role: "Like last year, I am helping with the wiki, but this time I get to help earlier with the promotional video, editing, design, and project decisions.",
            technologies: "SiPython, FaReact",
          },
          uni: {
            title: "University",
            intro: "Here are some projects I completed over the past two years",
            L3: {
              title: "L3",
              tomography: {
                title: "Tomography",
                description:
                  "Our professor gave us two raw files from a tomographic probe (raw big endians) and we had to interpret distributions and density within the sample. The goal was also to have a very compact script (<300loc). We ended up being able to export a 3D model and a point plot.",
                technologies: "SiPython",
              },
              bdd2: {
                title: "Database",
                description:
                  "We had to model a database for a university. The model was fairly simple: I created tables for professors, courses, exams, students, grades, etc, and to validate the database, the teacher gave us the description of 40 SQL queries that we had to interpret and test.",
                technologies: "SiPostgresql",
              },
              "windows-ad": {
                title: "Windows AD",
                description:
                  "Deployed an Active Directory domain controller on Windows Server to manage centralized user authentication, GPOs, and network share permissions.",
                technologies: "FaWindows",
              },
              dnssec: {
                title: "DNSSEC - DoT/DoH",
                description:
                  "Set up a recursive DNS server using DNSSEC with Unbound to study DNS protocols and secure transmissions. Also configured a DNS server that communicates over DoT with the FDN's servers.",
                technologies: "FaLinux,SiDebian",
              },
              nftables: {
                title: "nftables",
                description:
                  "Configured and tested stateful firewall rules using nftables on Debian to control network traffic, filter packets, and enforce security policies.",
                technologies: "FaLinux,SiDebian",
              },
            },
            M1: {
              title: "M1",
              carp: {
                title: "CARP",
                description:
                  "Implemented a high-availability network architecture using CARP on OpenBSD, configuring failover redundancy with shared virtual IPs across two gateway nodes.",
                technologies: "SiOpenbsd",
              },
              lvs: {
                title: "LVS",
                description:
                  "Built a high-performance load-balancing cluster using Linux Virtual Server (LVS) in NAT and Direct Routing (DR) modes, benchmarking throughput and latency differences under heavy traffic.",
                technologies: "FaLinux,SiRockylinux",
              },
              bdd: {
                title: "Database",
                description:
                  "Deployed an Oracle database on Oracle Linux and migrated data from Oracle to MongoDB using Python scripts.",
                technologies:
                  "FaLinux,GrOracle,SiMongodb,TbSql,FaDocker,SiCockpit,SiPython",
              },
              petri: {
                title: "Petri",
                description:
                  "Modeled the operational workflow and queue dynamics of a fast-food restaurant using Petri nets, followed by formal model checking to verify system liveness and prevent deadlocks.",
                technologies: "",
              },
              dhcp: {
                title: "DHCP",
                description:
                  "Configured DHCP failover and redundancy on Linux nodes, testing joint address pool sharing versus split-range allocation for network client reliability.",
                technologies: "FaLinux, SiAlpinelinux",
              },
            },
          },
          personal: {
            title: "Personal",
            rwg: {
              title: "Read-Write-Grow Hackathon",
              "link-text": "rwg.bio",
              description:
                "Friends from the IGEM team suggested we participate in this hackathon, so we formed two teams. We focused on predicting and designing RNA nanocages. I personally worked on processing the RNA and predicting the secondary structure.",
              "code-link": "GitHub Repository",
              outcome:
                "Although we did not win, our sister team was amongst the top ten and got to pitch their idea to professionals and receive guidance.",
              technologies: "SiPython",
            },
            cardihack: {
              title: "Cardi-Hack Challenge",
              description:
                "Suggested by a friend studying bioinformatics, this challenge involved fine-tuning a language model to process genomic data, calculate Polygenic Risk Scores (PRS), and evaluate cardiovascular risks.",
              technologies: "SiPython",
            },
            server: {
              title: "My Server",
              description:
                "I built myself a server with old parts, I'm running Fedora 44 on it, and I host a couple of Docker containers and services on it. I use NGINX for reverse-proxying and SSL. Currently, I'm hosting a Minecraft server, a file distribution server (Nextcloud) and I am toying with LM hosting and Folding@Home.",
              technologies: "SiFedora,FaDocker,SiNextcloud",
            },
            rnafold: {
              title: "Cfold",
              description:
                "Following the RWG hackathon, I started writing a program in C to predict RNA secondary and tertiary structure from its sequence. To do this, I created a physics engine to simulate the forces acting on the nucleotides.",
              technologies: "SiC",
            },
            ARDA: {
              title: "ARDA",
              description:
                "Following the small project on RNA 3D folding, I was approached by a teacher to continue working on the project with interns at the university's lab (IBISC), so I joined the lab for an internship. The project grew, and now we are building a commercial platform to offer our computation service. All services, website and databases are running on OVH BareMetal. The server is a Ryzen 7 9700X with 64Gb and 2x 512Gb NVME in RAID. Website is made using React, hosted using PM2, databases are ArangoDB for non-structured data and PSQL for user management. Automatic backups are sent to my personal server.",
              link: "",
              technologies: "SiPython,FaReact,FaLinux",
            },
            D4GEN: {
              title: "D4GEN Hackathon 2026",
              description:
                "To help with the IGEM project this year, we decided to participate in the D4GEN Hackathon organized by Genopole. Our project was to develop a toolbox that would help the team with the Dry/Wet lab. As the Hackathon was sponsored by Amazon Web Services, we got to use their services without limit for the duration of the Hackathon; as such, we got to experiment a lot with their LM machines and notebooks.",
              "code-link": "GitHub Repository",
              technologies: "SiPython,SiAmazonwebservices",
            },
          },
        },
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue",
        greeting:
          "Je suis Paul, et je vous souhaite la bienvenue sur mon portfolio !",
        article: "article",
        about: "À propos de moi",
        "about-content":
          "Je suis étudiant en master Computer Networks System à l'Université Paris-Saclay. Je suis particulièrement intéressé par l'administration des serveurs et des systèmes et aussi par la biologie.",
        links: "Liens & Contact",
        stage: "Mes stages",
        "education-description-1":
          "J'ai commencé mon cursus par le portail Mathématiques-Informatique, une première année divisée à 50/50 entre les mathématiques et l'informatique. Durant cette première année, j'ai appris les bases des mathématiques avancées (analyse, statistiques avancées, algèbre linéaire, analyse réelle et complexe) ainsi que les fondements de l'informatique (architecture des ordinateurs, opto-électronique pour la fibre optique, bases de la programmation).",
        "education-description-2":
          "J'ai poursuivi en deuxième année d'informatique où j'ai appris des langages de programmation tels qu'OCaml, C, Python, HTML/CSS/JS et l'Assembleur, ainsi que les bases des réseaux.",
        "education-description-3":
          "C'est en troisième année que je me suis spécialisé en Systèmes et Réseaux, en apprenant à déployer et gérer des réseaux ; par exemple : la gestion des utilisateurs avec Windows Active Directory et des serveurs Linux, les serveurs DNS, les pare-feux et les bases de données simples.",
        "education-description-4":
          "Ma Licence obtenue, j'ai décidé de poursuivre en Master dans la même université (désormais sous l'égide de Paris-Saclay) pour la qualité des enseignements et l'approche pratique des cours. J'apprécie particulièrement que nos enseignants nous proposent de nombreux projets ancrés dans la réalité. Jusqu'à présent, j'y ai appris la répartition de charge (load-balancing), la tolérance aux pannes, ainsi que le DHCP avancé, l'architecture et les protocoles de routage, la conception et la gestion de centres de données (datacenters) et la sécurité des bases de données.",
        "stage-content":
          "J'ai eu l'opportunité d'effectuer un stage au sein du laboratoire IBISC à Évry, l'un des principaux laboratoires de recherche en bio-informatique. Au cours de ce stage, j'ai travaillé avec une équipe restreinte sur le repliement de la structure tertiaire de l'ARN et j'ai participé à la création d'une plateforme commerciale. J'ai également contribué à la refonte du site web d'EvryRNA.",
        knowledge: "Ce que je sais faire",
        "knowledge-subtitle": "Ce que j'ai appris",
        "knowledge-content-1":
          "Mon Master se concentre sur les Réseaux et l'Administration, j'ai donc appris à configurer et maintenir des serveurs et des réseaux. J'ai également appris les bases des Mathématiques Avancées, de l'opto-électronique et des Statistiques. En parallèle, j'ai appris à coder et je maîtrise Python pour le Scripting.",
        "knowledge-content-2":
          "Voici une liste des technologies que mon cursus universitaire m'a enseignées:",
        "knowledge-content-3":
          "Vous pouvez en savoir plus sur les projets que j'ai réalisés ou auxquels j'ai participé dans l'onglet Projets.",
        interests: "Mes centres d'intérêts",
        "interest-content": {
          music: {
            title: "Musique",
            "sub-title": "La musique a toujours représenté beaucoup pour moi.",
            "fav-title": "Quelques-uns de mes titres préférés :",
            "fav-artist": "Mes artistes préférés :",
            "fav-album": "Pour finir, mes albums préférés :",
            "hi-hi":
              "Je suis également très intéressé par le matériel HI-FI, j'aime acheter de vieux amplis et casques et tenter de les réparer, un extrait de ma collection :",
            guitar:
              "J'ai également fait ma propre guitare à partir de wengé de récupération et d'accastillage provenant d'anciennes guitares.",
          },
          wood: {
            title: "Menuiserie",
            "sub-title":
              "La menuiserie est l'une de mes plus anciennes passions. Ayant la chance d'avoir accès à un atelier, je passe des heures à fabriquer ou réparer de tout, mais surtout à tailler du bois et à créer des choses. Juste en dessous se trouve la première étape d'un petit Drakkar que j'ai construit pour mon oncle, la quille et le dragon sont en wengé et le bordé est en pin teinté.",
          },
          computer: {
            title: "Informatique",
            "sub-title":
              "Naturellement pour un masterant en réseau, j'adore l'informatique. J'aime tout particulièrement monter des ordinateurs et paramétrer les systèmes. D'où est né un amour pour Linux, que j'utilise partout.",
            linux:
              "En 2020, j'ai décidé d'essayer Linux et je suis tout de suite tombé amoureux. La philosophie FOSS m'a marqué et depuis j'essaie autant que possible de participer à la communauté. Je fais principalement des traductions, mais en ce moment j'ai pour projet de faire une version alternative de LainOS basée sur GNOME au lieu de Sway, afin de mieux coller à mon workflow.",
          },
          watches: {
            title: "Horlogerie",
            "sub-title":
              "Mon autre grande passion est l'horlogerie, j'affectionne particulièrement les montres françaises, suisses et soviétiques des années 70. Je suis toujours fasciné par la minutie à l'intérieur des mouvements, et souvent par la robuste simplicité des anciens calibres.",
            "fav-watch": "Ma montre préférée est cette Ancora d'Ouro de 1937",
            "fav-watch-2":
              "Ancora d'Ouro est une ancienne fabrique d'allumettes de Porto, aujourd'hui disparue",
          },
        },
        scholar: "Mon parcours scolaire",
        projects: {
          title: "Mes projets",
          intro:
            "Ces deux dernières années, une grande partie de nos enseignements s'est faite par projets. J'ai également eu la chance de participer à la compétition de Biologie Synthétique IGEM.",
          igem: {
            title: "IGEM - 2025",
            intro:
              "J'ai été approché par un membre de l'équipe IGEM de notre université pour aider sur le projet. J'ai donc conçu et codé notre Wiki.",
            "project-description":
              "Notre projet portait sur l'ingénierie de souches de cyanobactéries afin d'optimiser l'efficacité enzymatique et d'améliorer la fixation du carbone.",
            "link-text": "Evry Paris-Saclay | Solaris",
            award:
              "Lors du Grand Jamboree, nous avons été nominés pour la Meilleure Nouvelle Pièce de Base et avons reçu une Médaille d'Or.",
            future:
              "Je participerai à nouveau pour la prochaine édition et j'espère faire plus pour l'équipe.",
            impact:
              "Ce projet a éveillé un intérêt pour la biologie que je ne savais pas avoir, et j'ai donc commencé à en apprendre davantage sur la BioInformatique dans l'espoir de me diversifier.",
            technologies: "SiPython, FaReact",
          },
          igem2026: {
            title: "IGEM - 2026",
            intro:
              "J'ai décidé de rejoindre l'association IGEM pour les éditions suivantes.",
            "project-description":
              "Cette année, nous travaillons sur la conception de ribosomes orthogonaux afin de permettre la traduction ciblée de protéines synthétiques.",
            "link-text": "Evry Paris-Saclay | ORBIT",
            role: "Comme l'année dernière, j'aide sur le Wiki, mais cette fois je peux m'impliquer plus tôt dans la vidéo promotionnelle, le montage, le design et les décisions de projet.",
            technologies: "SiPython, FaReact",
          },
          uni: {
            title: "Université",
            intro:
              "Voici quelques projets que j'ai réalisés ces deux dernières années",
            L3: {
              title: "L3",
              tomography: {
                title: "Tomographie",
                description:
                  "Notre professeur nous a donné deux fichiers bruts venant d'une sonde tomographique (données brutes en big endian) et nous devions interpréter les distributions et les densités dans l'échantillon. L'objectif était également d'obtenir un script très compact (<300 lignes de code). Nous avons finalement pu exporter un modèle 3D ainsi qu'un nuage de points.",
                technologies: "SiPython",
              },
              bdd2: {
                title: "Base de Données",
                description:
                  "Nous devions modéliser une base de données pour une université. Le modèle était assez simple : j'ai créé des tables pour les professeurs, les cours, les examens, les étudiants, les notes, etc. Pour valider la base de données, l'enseignant nous a donné la description de 40 requêtes SQL que nous devions interpréter et tester.",
                technologies: "SiPostgresql",
              },
              "windows-ad": {
                title: "Windows AD",
                description:
                  "Déploiement d'un contrôleur de domaine Active Directory sous Windows Server pour gérer l'authentification centralisée des utilisateurs, les GPO et les autorisations de partage réseau.",
                technologies: "FaWindows",
              },
              dnssec: {
                title: "DNSSEC - DoT/DoH",
                description:
                  "Mise en place d'un serveur DNS récursif utilisant le DNSSEC avec Unbound dans le but d'étudier les protocoles DNS et la sécurisation des transmissions. Mise en place d'un serveur DNS qui communique en DoT avec les serveurs de la FDN.",
                technologies: "FaLinux,SiDebian",
              },
              nftables: {
                title: "NFTables",
                description:
                  "Configuration et test de règles de pare-feu à état avec nftables sous Debian afin de contrôler le trafic réseau, filtrer les paquets et appliquer des politiques de sécurité.",
                technologies: "FaLinux,SiDebian",
              },
            },
            M1: {
              title: "M1",
              carp: {
                title: "CARP",
                description:
                  "Mise en place d'une architecture réseau à haute disponibilité avec CARP sous OpenBSD, en configurant la redondance avec basculement automatique via des IP virtuelles partagées entre deux passerelles.",
                technologies: "SiOpenbsd",
              },
              lvs: {
                title: "LVS",
                description:
                  "Mise en place d'un cluster de répartition de charge avec Linux Virtual Server (LVS) en modes NAT et Direct Routing (DR), en évaluant les performances de débit et de latence sous forte charge.",
                technologies: "FaLinux,SiRockylinux",
              },
              bdd: {
                title: "Base de Données",
                description:
                  "Mise en place d'une base de données Oracle sur Oracle Linux et passage des données d'Oracle à MongoDB en utilisant des scripts Python.",
                technologies:
                  "FaLinux,GrOracle,SiMongodb,TbSql,FaDocker,SiCockpit,SiPython",
              },
              petri: {
                title: "Petri",
                description:
                  "Modélisation du flux opérationnel et de la gestion des files d'attente d'un fast-food avec des réseaux de Petri, suivie d'une vérification formelle (model checking) pour valider la vivacité du système et éviter les blocages.",
                technologies: "",
              },
              dhcp: {
                title: "DHCP",
                description:
                  "Configuration de serveurs DHCP en redondance sous Linux, en comparant le partage d'un même pool d'adresses avec une répartition par plages distinctes pour garantir la continuité de service.",
                technologies: "FaLinux, SiAlpinelinux",
              },
            },
          },
          personal: {
            title: "Personnel",
            rwg: {
              title: "Hackathon Read-Write-Grow",
              "link-text": "rwg.bio",
              description:
                "Des amis de l'équipe IGEM nous ont suggéré ce hackathon, nous avons donc formé deux équipes. Nous nous sommes concentrés sur la prédiction et la conception de nanocages d'ARN. Personnellement, j'ai travaillé sur le traitement de l'ARN et la prédiction de la structure secondaire.",
              "code-link": "Dépôt GitHub",
              outcome:
                "Bien que nous n'ayons pas gagné, notre équipe sœur faisait partie des dix premiers et a pu présenter son idée à des professionnels et recevoir des conseils.",
              technologies: "SiPython",
            },
            cardihack: {
              title: "Défi Cardi-Hack",
              description:
                "Suggéré par un ami en bio-informatique, ce défi consistait à réentraîner un modèle de langage pour analyser des données génomiques, calculer des scores de risque polygénique (PRS) et évaluer les risques cardiovasculaires.",
              technologies: "SiPython",
            },
            server: {
              title: "Mon Serveur",
              description:
                "Je me suis construit un serveur à partir de composants de récupération tournant sous Fedora 44, sur lequel j'héberge plusieurs conteneurs Docker et services. J'utilise NGINX pour le reverse-proxy et le SSL. Actuellement, j'y héberge un serveur Minecraft, un serveur de fichiers (Nextcloud) et j'expérimente l'hébergement de modèles de langage (LM) ainsi que Folding@Home.",
              technologies: "SiFedora,FaDocker,SiNextcloud",
            },
            rnafold: {
              title: "Cfold",
              description:
                "Suite au hackathon RWG, j'ai commencé à écrire un programme en C pour prédire la structure secondaire et tertiaire de l'ARN à partir de sa séquence. Pour ce faire, j'ai créé un moteur de physique pour simuler les forces qui agissent sur les nucléotides.",
              technologies: "SiC",
            },
            ARDA: {
              title: "ARDA",
              description:
                "Suite au projet sur le repliement 3D de l'ARN, j'ai été approché par un enseignant pour continuer à travailler sur ce projet avec des stagiaires du laboratoire IBISC de l'université. J'ai donc rejoint le laboratoire pour un stage. Le projet a pris de l'ampleur et nous développons actuellement une plateforme commerciale pour proposer notre service de calcul. Tous les services, le site web et les bases de données fonctionnent sur un serveur BareMetal d'OVH (Ryzen 7 9700X avec 64 Go de RAM et 2x 512 Go NVMe en RAID). Le site est conçu avec React et hébergé via PM2, les bases de données sont ArangoDB pour les données non structurées et PostgreSQL pour la gestion des utilisateurs. Des sauvegardes automatiques sont envoyées sur mon serveur personnel.",
              link: "",
              technologies: "SiPython,FaReact,FaLinux",
            },
            D4GEN: {
              title: "D4GEN Hackathon 2026",
              description:
                "En parallèle du projet IGEM, nous avons décidé de participer au Hackathon D4GEN organisé par le Genopole afin de développer des outils pour aider avec le Dry/Wet lab. Comme le Hackathon était sponsorisé par Amazon Web Services, nous avons eu un accès illimité aux ressources d'AWS, notamment leurs machines de LM et notebooks.",
              "code-link": "Dépôt GitHub",
              technologies: "SiPython,SiAmazonwebservices",
            },
          },
        },
      },
    },
  },
});

export default i18n;
