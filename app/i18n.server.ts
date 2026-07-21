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
        stage: "Internships",
        "stages-content":
          "I got the opporunity to do an intership at the IBISC laboratory in Évry, one of the foremost research lab on Bio-Informatics. During my internship I worked with a small team on RNA Tertiary Structure Folding and helped building a commercial platform. Aswell, I help with the remaking of the EvryRNA website.",
        knowledge: "What I can do",
        "knowledge-subtitle": "What I learned",
        "knowledge-content-1":
          "My Master's degree focuses on networks and administration; I have learned to set up and maintain servers and networks. I have also covered basics of advanced mathematics, opto-electronics, and statistics. Additionally, I am proficient in Python for scripting.",
        "knowledge-content-2":
          "Here is a list of the technologies my university curriculum taught me:",
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
              "I also built my own guitar using reclaimed teak wood and hardware salvaged from old guitars.",
          },
          wood: {
            title:
              "Woodworking is one of my oldest passions. Being lucky enough to have access to a workshop, I spend hours making or repairing all sorts of things, but mostly carving wood and building things.",
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
              "Our project focused on improving carbon fixation in cyanobacteria.",
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
              "This year, we are working on Orthogonal Ribosomes.",
            "link-text": "Evry Paris-Saclay | ORBIT",
            role: "Like last year, I am helping with the wiki, but this time I get to help earlier with the promotional video, editing, design, and project decisions.",
            technologies: "SiPython, FaReact",
          },
          uni: {
            title: "University",
            intro:
              "Here are some projects we completed over the past two years",
            L3: {
              title: "L3",
              tomography: {
                title: "Tomography",
                description:
                  "Our professor gave us two raw files from a tomographic probe and we had to interpret distributions and density within the sample.",
                technologies: "SiPython",
              },
              bdd2: {
                title: "Database",
                description:
                  "We had to model a database for a university. The model was fairly simple: I created tables for professors, courses, exams, students, grades, etc., and to validate the database I implemented a list of 40 SQL queries and tested them.",
                technologies: "SiPostgresql",
              },
              "windows-ad": {
                title: "Windows AD",
                description:
                  "Set up an Active Directory domain controller to manage users and shared resources across multiple machines on the network.",
                technologies: "FaWindows",
              },
              dnssec: {
                title: "DNSSEC - DoT/DoH",
                description:
                  "Set up a recursive DNS server using DNSSEC with Unbound to study DNS protocols and secure transmissions. Also configured a DNS server that communicates over DoT with the FDN's servers.",
                technologies: "FaLinux,FaDebian",
              },
              nftables: {
                title: "nftables",
                description: "Explored firewall configuration using nftables.",
                technologies: "FaLinux,FaDebian",
              },
            },
            M1: {
              title: "M1",
              carp: {
                title: "CARP",
                description:
                  "Implemented a high-availability network with CARP on OpenBSD. We configured two machines to share a virtual IP and fail over automatically if one fails.",
                technologies: "SiOpenbsd",
              },
              lvs: {
                title: "LVS",
                description:
                  "We set up a load-balancing cluster with LVS in NAT and DR modes. We tested the cluster's performance and compared the two modes.",
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
                  "We modelled the operation of a fast-food restaurant using Petri nets and then performed model checking to verify certain properties of the system.",
                technologies: "",
              },
              dhcp: {
                title: "DHCP",
                description:
                  "Set up a DHCP server to manage IP addresses for machines on the network. We explored two configurations: one where two servers manage the same address pool and another where each server manages a separate pool.",
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
                "Suggested to me by a friend studying bioinformatics, this challenge is about training a language model to compute PRS scores and evaluate cardiac risks.",
              technologies: "SiPython",
            },
            server: {
              title: "My Server",
              description:
                "I built myself a server with old parts, I'm running Fedora 43 on it, and I host a couple of Docker containers and services on it. I use NGINX for reverse-proxying and SSL.",
              technologies: "FaFedora ,FaDocker,SiNextcloud",
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
                "Following the small project on RNA 3D folding, I was approached by a teacher to continue working on the project with interns at the university's lab (IBISC), so I joined the lab for an internship. The project grew, and now we are building a commercial platform to offer our computation service. All services, website and databases are running on OVH BareMetal.",
              link: "",
              technologies: "SiPython,FaReact,FaLinux",
            },
            D4GEN: {
              title: "D4GEN Hackathon 2026",
              description:
                "To help with the IGEM project this year, we decided to participate in the D4GEN Hackathon organized by Genopole. Our project was to develop a toolbox that would help the team with the Dry/Wet lab. As the Hackathon was sponsored by Amazon Web Services, we got to use their services without limit for the duration of the Hackathon; as such, we got to experiment a lot with their LM machines and notebooks.",
              "code-link": "https://github.com/crakshay1/DalguardYES",
              technologies: "SiPython,SiAWS",
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
        stage: "Mes stages",
        "stages-content": "",
        knowledge: "Ce que je sais faire",
        "knowledge-subtitle": "Ce que j'ai appris",
        "knowledge-content-1":
          "Mon Master se concentre sur les Réseaux et l'Administration, j'ai donc appris à configurer et maintenir des serveurs et des réseaux. J'ai également appris les bases des Mathématiques Avancées, de l'opto-électronique et des Statistiques. En parallèle, j'ai appris à coder et je maîtrise Python pour le Scripting.",
        "knowledge-content-2":
          "Voici une liste des technologies que mon cursus universitaire m'a enseignées:",
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
              "J'ai également fait ma propre guitare à partir de teck de récupération et d'accastillage provenant d'anciennes guitares.",
          },
          wood: {
            title:
              "La menuiserie est l'une de mes plus anciennes passions. Ayant la chance d'avoir accès à un atelier, je passe des heures à fabriquer ou réparer de tout, mais surtout à tailler du bois et à créer des choses.",
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
              "Notre projet portait sur l'amélioration de la fixation du carbone dans les cyanobactéries.",
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
              "Cette année, nous travaillons sur les ribosomes orthogonaux.",
            "link-text": "Evry Paris-Saclay | ORBIT",
            role: "Comme l'année dernière, j'aide sur le Wiki, mais cette fois je peux m'impliquer plus tôt dans la vidéo promotionnelle, le montage, le design et les décisions de projet.",
            technologies: "SiPython, FaReact",
          },
          uni: {
            title: "Université",
            intro:
              "Voici quelques projets que nous avons réalisés ces deux dernières années",
            L3: {
              title: "L3",
              tomography: {
                title: "Tomographie",
                description:
                  "Notre professeur nous a donné deux fichiers bruts venant d'une sonde tomographique et nous devions interpréter des distributions et des densités dans l'échantillon.",
                technologies: "SiPython",
              },
              bdd2: {
                title: "Base de Données",
                description:
                  "Nous devions modéliser une base de données pour une université. Le modèle était assez simple, j'ai créé des tables pour les professeurs, les cours, les examens, les étudiants, les notes, etc. et pour valider ma base j'avais une liste de 40 requêtes à traduire en SQL et à tester.",
                technologies: "SiPostgresql",
              },
              "windows-ad": {
                title: "Windows AD",
                description:
                  "Mise en place d'un contrôleur de domaine Active Directory pour gérer des utilisateurs et des partages sur plusieurs machines du réseau.",
                technologies: "FaWindows",
              },
              dnssec: {
                title: "DNSSEC - DoT/DoH",
                description:
                  "Mise en place d'un serveur DNS récursif utilisant le DNSSEC avec Unbound dans le but d'étudier les protocoles DNS et la sécurisation des transmissions. Mise en place d'un serveur DNS qui communique en DoT avec les serveurs de la FDN.",
                technologies: "FaLinux,FaDebian",
              },
              nftables: {
                title: "NFTables",
                description: "Découverte du pare-feu avec NFTables.",
                technologies: "FaLinux,FaDebian",
              },
            },
            M1: {
              title: "M1",
              carp: {
                title: "CARP",
                description:
                  "Mise en place d'un réseau de haute disponibilité avec CARP sur OpenBSD. Nous avons configuré deux machines pour qu'elles partagent une adresse IP virtuelle et basculent automatiquement en cas de défaillance de l'une d'entre elles.",
                technologies: "SiOpenbsd",
              },
              lvs: {
                title: "LVS",
                description:
                  "Nous avions mis en place un cluster de load-balancing avec LVS en mode NAT et DR. Nous avons testé les performances du cluster et comparé les deux modes.",
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
                  "Nous devions modéliser le fonctionnement d'un fast-food avec des réseaux de Petri et ensuite faire du model-checking pour vérifier certaines propriétés du système.",
                technologies: "",
              },
              dhcp: {
                title: "DHCP",
                description:
                  "Mise en place d'un serveur DHCP pour gérer les adresses IP des machines du réseau. Nous avions deux modèles, un où deux serveurs gèrent le même pool d'adresses et un autre où chaque serveur gère un pool différent.",
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
                "Suggéré par un ami en bio-informatique, ce hackathon consiste à entraîner un modèle de langage pour calculer les scores PRS et évaluer des risques cardiaques.",
              technologies: "SiPython",
            },
            server: {
              title: "Mon Serveur",
              description:
                "Je me suis construit un serveur en utilisant Unraid et Docker. Je l'utilise pour héberger mes projets personnels, mes sites web et pour faire du stockage de données. J'ai également mis en place Nextcloud pour la synchronisation de mes fichiers et la gestion de mon calendrier.",
              technologies: "SiUnraid,FaDocker,SiNextcloud",
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
                "Suite au petit projet sur le RNA 3D Folding, j'ai été approché par un enseignant pour continuer à travailler sur ce projet avec des stagiaires du laboratoire de l'université (IBISC). J'ai donc rejoint le laboratoire pour un stage. Le projet a pris de l'ampleur, et nous développons maintenant une plateforme commerciale pour proposer notre service de calcul.",
              link: "",
            },
            D4GEN: {
              title: "D4GEN Hackathon 2026",
              description:
                "En parallèle du projet IGEM, nous avons décidé de participer au Hackathon D4GEN organisé par le Genopole afin de développer des outils pour aider avec le Dry/Wet lab. Comme le Hackathon était sponsorisé par Amazon Web Services, nous avons eu un accès illimité aux ressources d'AWS, notamment leurs machines de LM et notebooks.",
              "code-link": "https://github.com/crakshay1/DalguardYES",
              technologies: "SiPython,SiAWS",
            },
          },
        },
      },
    },
  },
});

export default i18n;
