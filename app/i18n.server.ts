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
            role: "Like last year, I am helping with the wiki, but this time I get to help earlier with the promotional video, editing, design, and project decisions. For example, on the promotion video, I made the 3D renders of the Ribosomes in Blender, aswell as having done the technical part of the audio recording and final editing.",
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
                  "Given two big-endian binary files of raw tomographic probe data (atomic x/y/z coordinates plus mass), I wrote a compact Python script (<300 lines ; size limit) to parse them and let the user filter the point cloud by a geometric slice (plane + thickness) or by a mass range. Output included histograms of atomic mass distribution and 2D projections color-coded by mass, and the pipeline could also export the filtered data as a 3D model.",
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
                  "Set up a recursive DNS resolver with Unbound, configured with the IANA root trust anchor for DNSSEC validation, and verified with dig +dnssec and a packet capture showing the RRSIG record alongside the A record — confirming DNSSEC signs responses for authenticity rather than encrypting them. Benchmarked resolver caching (a repeated query dropped from ~40ms to ~20ms once cached), then tried forwarding queries over DoH before switching to DNS-over-TLS per course guidance, testing several resolvers (FDN, Mullvad, Quad9, Wikimedia) and confirming over a capture that query content was encrypted while the destination server remained visible.",
                technologies: "FaLinux,SiDebian",
              },
              nftables: {
                title: "nftables",
                description:
                  "Configured nftables on a gateway machine to masquerade an internal /24 LAN out to the internet (prerouting DNAT + postrouting masquerade), letting internal hosts reach external machines and the internet with their traffic translated to the gateway's address — verified with ping, SSH, and packet captures on both sides. Added a DNAT port-forwarding rule to redirect inbound SSH on the gateway straight to an internal host, confirmed by SSHing in from an external machine into a user that only existed on the internal target.",
                technologies: "FaLinux,SiDebian",
              },
            },
            M1: {
              title: "M1",
              carp: {
                title: "CARP",
                description:
                  "Implemented a high-availability firewall pair using CARP on OpenBSD: two nodes share virtual IPs across two LAN segments via dedicated carp interfaces, prioritized with advskew, and stay in sync over a pfsync interface. Wrote a pf ruleset to allow the CARP/pfsync traffic, then validated failover by killing the primary node mid-ping and confirming the secondary took over seamlessly, captured with Wireshark.",
                technologies: "SiOpenbsd",
              },
              lvs: {
                title: "LVS",
                description:
                  "Built a load-balanced service with Linux Virtual Server in NAT mode: configured a virtual service with ipvsadm using round-robin scheduling, forwarding to two real backend servers via IP masquerading. Verified the balancing by repeatedly curling the virtual IP and watching responses alternate between the backends, and also studied Direct Routing (DR) mode as a lower-overhead alternative.",
                technologies: "FaLinux,SiRockylinux",
              },
              bdd: {
                title: "Database",
                description:
                  "Deployed Oracle Database (via a Podman container on Oracle Linux 10) alongside MongoDB, managed through Cockpit and firewalled to expose only the needed ports. Since neither MongoDB Compass nor SQL Developer shipped for my distro, I converted Compass from RPM to DEB with alien and ran SQL Developer inside a Distrobox Oracle Linux container. Finally wrote a script piping SQL*cl's JSON_OBJECT/JSON_ARRAYAGG output straight into mongoimport to migrate query results from Oracle into MongoDB collections.",
                technologies:
                  "FaLinux,GrOracle,SiMongodb,TbSql,SiPodman,SiCockpit,SiPython",
              },
              petri: {
                title: "Petri",
                description:
                  "Modeled a fast-food's operations as a group project: a 42-place, 35-transition Petri net covering checkout queues, kitchen capacity, dine-in/takeout seating, and ingredient stock, analyzed with the TINA toolbox. An initial tina -R run revealed the net was unbounded (one queue was leaking tokens instead of consuming them, ballooning past 20GB of RAM); once fixed, structural analysis (struct) proved place invariants for staff, queue, seating, and stock conservation. Full state-space exploration hit combinatorial explosion (710k+ states, 4.6M+ transitions) before timing out, so liveness couldn't be formally proven — instead we simulated rush-hour, understaffed, and stock-out scenarios to observe the model stayed deadlock-free in practice.",
                technologies: "",
              },
              dhcp: {
                title: "DHCP",
                description:
                  "Set up two ISC DHCP servers on Debian, first splitting a /24 into two unequal pools (an 80/20 split) so each server hands out addresses from its own range, with NAT configured on the router via nftables. Then reconfigured both servers to share a single pool through DHCP failover (failover peer, split 128 for an even 50/50 load), where clients are assigned to a server based on a MAC-address hash and the two servers replicate lease state to each other over TCP/647 with BNDUPD/BNDACK messages.",
                technologies: "FaLinux, SiAlpinelinux",
              },
              cumulus: {
                title: "Cumulus & Debian Network Architecture",
                description:
                  "Group project building and studying four network architectures using Cumulus Linux for the switches and Debian 13 for the clients. Focused on link and switch redundancy and on the Spanning Tree Protocol.",
                technologies: "FaLinux,SiDebian",
              },
              yubikey: {
                title: "YubiKey & PGP",
                description:
                  "Explored integrating hardware and software security into a Linux environment. I hardened authentication with a YubiKey: TOTP-based two-factor authentication for SSH, FIDO2/U2F for web logins, and passkey management. I then went deeper into GnuPG for asymmetric cryptography, covering key management (generation, subkeys) and signing/encrypting documents and emails, along with how public keys get validated.",
                technologies: "FaLinux,SiYubico,SiGnuprivacyguard",
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
              "dashboard-link": "Dashboard hosted on my server",
              technologies: "SiPython,SiAmazonwebservices",
            },
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
        projects: {
          title: "Projets",
          intro:
            "Ces deux dernières années, une grande partie de nos cours s'est déroulée sous forme de projets pratiques. J'ai aussi eu l'opportunité de collaborer avec l'équipe de biologie synthétique iGEM.",
          igem: {
            title: "iGEM 2025",
            intro:
              "J'ai été contacté par un membre de l'équipe iGEM de notre université pour les aider sur le projet, ce qui m'a amené à concevoir et coder leur Wiki de A à Z.",
            "project-description":
              "Notre projet portait sur l'ingénierie de souches de cyanobactéries pour optimiser l'efficacité enzymatique et améliorer la fixation du carbone.",
            "link-text": "Evry Paris-Saclay | Solaris",
            award:
              "Lors du Grand Jamboree, nous avons été nominés pour la Meilleure Nouvelle Brique de Base (Best New Basic Part) et avons remporté une Médaille d'Or.",
            future:
              "Je participerai à la prochaine édition avec l'espoir de m'investir encore davantage au sein de l'équipe.",
            impact:
              "Ce projet a éveillé chez moi un véritable intérêt pour la biologie, et j'ai commencé à me former en bio-informatique pour diversifier mes compétences.",
            technologies: "SiPython, FaReact",
          },
          igem2026: {
            title: "iGEM 2026",
            intro:
              "J'ai décidé de rejoindre à nouveau l'association iGEM pour les éditions suivantes.",
            "project-description":
              "Cette année, notre équipe travaille sur la conception de ribosomes orthogonaux pour permettre la traduction ciblée de protéines synthétiques.",
            "link-text": "Evry Paris-Saclay | ORBIT",
            role: "Comme l'an dernier, je m'occupe de la création du Wiki, mais je participe également plus tôt aux choix de design graphique, au montage de la vidéo promotionnelle et aux décisions d'équipe. Pour la vidéo de promotion par exemple, j'ai réalisé les rendus 3D des ribosomes sous Blender, en plus d'avoir assuré la partie technique de l'enregistrement audio et du montage final.",
            technologies: "SiPython, FaReact",
          },
          uni: {
            title: "Projets Universitaires",
            intro:
              "Voici quelques-uns des projets marquants réalisés dans le cadre de mes études :",
            L3: {
              title: "Licence 3",
              tomography: {
                title: "Tomographie",
                description:
                  "À partir de deux fichiers binaires big-endian issus d'une sonde tomographique (coordonnées x/y/z et masse), j'ai codé un script Python compact (<300 lignes ; longueur limite) pour filtrer le nuage de points selon une coupe géométrique (plan et épaisseur) ou des plages de masses. Il génère en sortie des histogrammes de répartition et des projections 2D couleur, avec export des données filtrées en modèle 3D.",
                technologies: "SiPython",
              },
              bdd2: {
                title: "Base de Données",
                description:
                  "Modélisation complète d'une base de données universitaire. Pour valider le schéma de nos tables (étudiants, cours, examens, notes, etc.), nous devions concevoir et exécuter 40 requêtes SQL complexes fournies sous forme de cahier des charges.",
                technologies: "SiPostgresql",
              },
              "windows-ad": {
                title: "Active Directory",
                description:
                  "Déploiement d'un contrôleur de domaine Active Directory sous Windows Server pour centraliser l'authentification des utilisateurs, gérer des stratégies de groupe (GPO) et configurer des partages réseau sécurisés.",
                technologies: "FaWindows",
              },
              dnssec: {
                title: "DNSSEC & DoT/DoH",
                description:
                  "Configuration d'un résolveur récursif avec Unbound validant DNSSEC via l'ancre de confiance de l'IANA (analysé avec dig et Wireshark pour confirmer la présence des signatures RRSIG). J'ai configuré la mise en cache (divisant le temps de réponse par deux) et mis en place du routage DNS-over-TLS sécurisé vers les serveurs de la FDN.",
                technologies: "FaLinux,SiDebian",
              },
              nftables: {
                title: "NFTables",
                description:
                  "Mise en place d'une passerelle réseau nftables sous Debian pour masquer un LAN interne /24 vers Internet (NAT/Masquerade), validée par des captures de paquets. J'ai également configuré une redirection de port (DNAT) pour transférer le flux SSH entrant vers une machine interne spécifique.",
                technologies: "FaLinux,SiDebian",
              },
            },
            M1: {
              title: "Master 1",
              carp: {
                title: "CARP & PF (OpenBSD)",
                description:
                  "Mise en place d'une paire de pare-feu à haute disponibilité avec CARP sous OpenBSD. Les nœuds partagent des adresses IP virtuelles synchronisées via pfsync et configurées via pf. Le basculement transparent en cas de coupure du nœud primaire a été validé sous Wireshark sans perte de paquets.",
                technologies: "SiOpenbsd",
              },
              lvs: {
                title: "Répartition de charge (LVS)",
                description:
                  "Configuration d'un cluster de load-balancing avec Linux Virtual Server (LVS) en mode NAT. À l'aide de requêtes curl cycliques, j'ai validé la redirection Round-Robin vers deux serveurs réels avec masquerade IP, puis étudié le mode Direct Routing (DR) pour réduire la surcharge réseau.",
                technologies: "FaLinux,SiRockylinux",
              },
              bdd: {
                title: "Migration de données",
                description:
                  "Déploiement d'une base de données Oracle (via conteneur Podman sur Oracle Linux) aux côtés de MongoDB, gérés via Cockpit. Pour contourner les limites de compatibilité des clients lourds de ma distribution, j'ai encapsulé SQL Developer dans un conteneur Distrobox et écrit un script de migration utilisant SQL*cl et mongoimport.",
                technologies:
                  "FaLinux,GrOracle,SiMongodb,TbSql,SiPodman,SiCockpit,SiPython",
              },
              petri: {
                title: "Réseaux de Petri",
                description:
                  "Modélisation du flux de service et des stocks d'un fast-food à l'aide d'un réseau de Petri de 42 places et 35 transitions, analysé sous la suite TINA. Après correction d'une file d'attente non bornée à l'origine d'une fuite mémoire, nous avons vérifié les invariants structurels et simulé des pics de trafic.",
                technologies: "",
              },
              dhcp: {
                title: "Redondance DHCP",
                description:
                  "Configuration de serveurs DHCP sous Debian en mode failover (failover peer avec split 128 pour un équilibrage 50/50). Les serveurs synchronisent l'état de leurs baux via TCP/647 (messages BNDUPD/BNDACK) et distribuent les adresses en fonction d'un hash de l'adresse MAC du client.",
                technologies: "FaLinux, SiAlpinelinux",
              },
              cumulus: {
                title: "Réseau Cumulus Linux",
                description:
                  "Projet d'étude et de déploiement de quatre architectures réseau redondantes utilisant Cumulus Linux pour les switches, Debian pour les clients. Nous avons mis l'accent sur la redondance des liaisons physiques et l'optimisation du protocole Spanning Tree (STP).",
                technologies: "FaLinux,SiDebian",
              },
              yubikey: {
                title: "YubiKey & PGP/GPG",
                description:
                  "Renforcement de la sécurité d'un environnement Linux à l'aide d'une YubiKey matérielle : double facteur TOTP pour le SSH, authentification FIDO2 pour le web et gestion des passkeys. J'ai également approfondi l'usage de GPG pour le chiffrement asymétrique et la signature de documents.",
                technologies: "FaLinux,SiYubico,SiGnuprivacyguard",
              },
            },
          },
          personal: {
            title: "Projets Personnels",
            rwg: {
              title: "Hackathon Read-Write-Grow",
              "link-text": "rwg.bio",
              description:
                "Participation en équipe à ce hackathon axé sur la biologie synthétique. Nous avons conçu des modèles de prédiction de structures secondaires de nanocages d'ARN. J'ai particulièrement travaillé sur les étapes de traitement des données de séquences d'ARN.",
              "code-link": "Dépôt GitHub",
              outcome:
                "Même si nous n'avons pas remporté le premier prix, notre équipe partenaire s'est hissée dans le top 10 et a pu présenter son projet devant un jury de professionnels.",
              technologies: "SiPython",
            },
            cardihack: {
              title: "Hackathon Cardi-Hack",
              description:
                "Défi de bio-informatique consistant à affiner un modèle de langage (LLM) pour traiter des données génomiques complexes, calculer des scores de risque polygénique (PRS) et anticiper les risques de maladies cardiovasculaires.",
              technologies: "SiPython",
            },
            server: {
              title: "Mon Serveur Privé",
              description:
                "Assemblage d'un serveur personnel sous Fedora 44 hébergeant des services conteneurisés sous Docker. J'utilise NGINX en reverse-proxy avec certificats SSL pour sécuriser l'accès à un serveur Nextcloud, un serveur de jeu Minecraft, ainsi qu'à des projets de calcul distribué (Folding@Home).",
              technologies: "SiFedora,FaDocker,SiNextcloud",
            },
            rnafold: {
              title: "Cfold",
              description:
                "Projet de développement d'un outil en C pour prédire les structures secondaires et tertiaires d'ARN. J'ai conçu un moteur physique simple simulant les forces d'attraction et de répulsion s'exerçant sur les nucléotides.",
              technologies: "SiC",
            },
            ARDA: {
              title: "ARDA Platform",
              description:
                "Né du projet de prédiction 3D d'ARN, ce travail s'est prolongé par un stage au laboratoire IBISC pour lancer une plateforme web commerciale de calcul. L'infrastructure tourne sur des serveurs BareMetal OVH (Ryzen 7 9700X, 64 Go RAM, SSD NVMe RAID), avec une interface React (PM2), une base de données orientée graphe ArangoDB et PostgreSQL. Les sauvegardes sont automatisées vers mon serveur personnel.",
              link: "",
              technologies: "SiPython,FaReact,FaLinux",
            },
            D4GEN: {
              title: "Hackathon D4GEN 2026",
              description:
                "Participation au hackathon D4GEN du Genopole pour créer une boîte à outils facilitant la transition entre le travail de laboratoire humide (wet lab) et l'analyse sèche (dry lab). Sponsorisés par AWS, nous avons exploité leurs instances de calcul et environnements de notebooks pour entraîner nos modèles.",
              "code-link": "Dépôt GitHub",
              "dashboard-link": "Dashboard hébergé sur mon serveur",
              technologies: "SiPython,SiAmazonwebservices",
            },
          },
        },
      },
    },
  },
});

export default i18n;
