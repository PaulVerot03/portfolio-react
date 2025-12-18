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
        greeting: "My name is Paul and I bid you welcome to my Portfolio!",
        article: "article",
        about: "About me",
        "about-content":
          "I am a student pursuing the Computer Network System master at Université Paris-Saclay. I am particularly interested in Networks and Systems administration aswell as biology.",
        stage: "Interships",
        "stages-content": "",
        knowledge: "What I can do ",
        "knowledge-subtitle": "What I learned",
        "knowledge-content-1":
          "My Master's Degree focuses on Networks and Administration, as such I have learned to set-up and care for servers and networks. I have also learned the basics of Advanced mathematics, opto-electronics and Statistics. Alongside, I have learned to code and I am proficient in Python for Scripting.",
        "knowledge-content-2":
          "Here is a list of the technologies my Uni cursus taught me:",
        interests: "My center of Interest",
        scholar: "Education Background",
        projects: {
          title: "My projects",
          intro:
            "For the past two years, a great part of our teachings were done with projects. I also got the chance to participate in the Synthetic Biology Competition IGEM.",
          igem: {
            title: "IGEM",
            intro:
              "I was approached by a member of the IGEM team for our Uni to help with the project. And so i got to design and code our Wiki",
            "project-description":
              "Our project was about improving Carbon Fixation in cyanobacteria",
            "link-text": "Evry Paris-Saclay | Solaris",
            award:
              "At the Grand Jamboree we were nominated for Best New Basic Part and received a Gold Medal",
            future:
              "I will be participating again for the next edition and i hope to do more for the team.",
            impact:
              "This project awoke an interest for biology I didn't know I had, and as such I have started learning more about BioInformatics in hope to branch out.",
            technologies: "",
          },
          uni: {
            title: "Uni",
            intro: "Here are some of the project we had the past two years",
            L3: {
              title: "L3",
              tomography: {
                title: "Tomograpy",
                description: "description",
                technologies: "",
              },
              bdd2: {
                title: "BDD2",
                description: "description",
                technologies: "",
              },
              "windows-ad": {
                title: "Windows AD",
                description: "description",
                technologies: "",
              },
              dnssec: {
                title: "DNSSEC - DoT/DoH",
                description: "description",
                technologies: "",
              },
              nftables: {
                title: "NFTables",
                description: "description",
                technologies: "",
              },
            },
            M1: {
              title: "M1",
              carp: {
                title: "CARP",
                description: "description",
                technologies: "",
              },
              lvs: {
                title: "LVS NAT DR",
                description: "description",
                technologies: "",
              },
              bdd: {
                title: "BDD",
                description: "description",
                technologies: "",
              },
              petri: {
                title: "Petri",
                description: "description",
                technologies: "",
              },
              dhcp: {
                title: "DHCP",
                description: "description",
                technologies: "",
              },
            },
          },
          personal: {
            title: "Personal",
            rwg: {
              title: "Read-Write-Grow Hackaton",
              "link-text": "rwg.bio",
              description:
                "Friends from the IGEM team suggested we should participate to this hackaton, so we formed two teams. We focused on predicting and designing RNA nanocages. I personally worked on processing the RNA and predicting the secondary structure.",
              "code-link": "Our Code",
              outcome:
                "Although we did not win, our sister team was amongst the top ten and got to pitch their idea to professionals and receive guidance.",
              technologies: "",
            },
            cardihack: {
              title: "Cardi-Hack Challenge",
              description:
                "Suggested to me by a friend studying BioInformatics, this challenge is about training a Language-Model to compute PRS-scores and evaluate cardiac risks.",
              technologies: "",
            },
            server: {
              title: "My Server",
              description: "I build myself a server using Unraid and Docker",
              technologies: "",
            },
          },
        },
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue",
        greeting:
          "Je suis Paul, et je vous souhaite la bienvenue à mon portfolio!",
        article: "article",
        about: "A propos de moi",
        "about-content":
          "Je suis étudiant en master Computer Networks System à l'Univeristé Paris-Saclay. Je suis particulièrement intéressé par l'administration des serveurs et des systèmes et aussi par la biologie.",
        stage: "Mes stages",
        "stage-content": "",
        knowledge: "Ce que je sais faire",
        "knowledge-subtitle": "Ce que j'ai appris",
        "knowledge-content-1":
          "Mon Master se concentre sur les Réseaux et l'Administration, j'ai donc appris à configurer et maintenir des serveurs et des réseaux. J'ai également appris les bases des Mathématiques Avancées, de l'opto-électronique et des Statistiques. En parallèle, j'ai appris à coder et je maîtrise Python pour le Scripting.",
        "knowledge-content-2":
          "Voici une liste des technologies que mon cursus universitaire m'a enseignées:",
        interests: "Mes centres d'interêts",
        scholar: "Mon parcours scolaire",
        projects: {
          title: "Mes projets",
          intro:
            "Ces deux dernières années, une grande partie de nos enseignements s'est faite par projets. J'ai également eu la chance de participer à la compétition de Biologie Synthétique IGEM.",
          igem: {
            title: "IGEM",
            intro:
              "J'ai été approché par un membre de l'équipe IGEM de notre Université pour aider sur le projet. J'ai donc conçu et codé notre Wiki",
            "project-description":
              "Notre projet portait sur l'amélioration de la fixation du carbone dans les cyanobactéries",
            "link-text": "Evry Paris-Saclay | Solaris",
            award:
              "Lors du Grand Jamboree, nous avons été nominés pour la Meilleure Nouvelle Pièce de Base et avons reçu une Médaille d'Or",
            future:
              "Je participerai à nouveau pour la prochaine édition et j'espère faire plus pour l'équipe.",
            impact:
              "Ce projet a éveillé un intérêt pour la biologie que je ne savais pas avoir, et j'ai donc commencé à en apprendre davantage sur la BioInformatique dans l'espoir de me diversifier.",
            technologies: "",
          },
          uni: {
            title: "Université",
            intro:
              "Voici quelques projets que nous avons réalisés ces deux dernières années",
            L3: {
              title: "L3",
              tomography: {
                title: "Tomograpy",
                description:
                  "Notre professeur nous a donné deux fichiers brut venant d'une sonde tomographique et nous devions interpreter des distribution et densité dans l'échantillon.",
                technologies: "SiPython",
              },
              bdd2: {
                title: "Base de Données",
                description:
                  "Nous devions modeliser une base de donnée pour une université. Le modèle était assez simple, j'ai créé des tables pour les professeurs, les cours, les examens, les étudiants, les notes, etc. et pour valider ma base j'avais une liste de 40 requêtes à traduire en SQL et à tester.",
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
                description: "Découverte du parefeu avec NFTables ",
                technologies: "FaLinux,FaDebian",
              },
            },
            M1: {
              title: "M1",
              carp: {
                title: "CARP",
                description:
                  "Redondance de panne avec le protocole CARP sur OpenBSD.",
                technologies: "SiOpenbsd",
              },
              lvs: {
                title: "LVS",
                description: "Redondance de panne avec LVS DR et NAT.",
                technologies: "FaLinux,SiRockylinux",
              },
              bdd: {
                title: "Base de Données",
                description:
                  "Mise en place de base de donnée Oracle sur Oracle Linux et passage de données de Oracle à MongoDB en utilisant des scripts python",
                technologies:
                  "FaLinux,GrOracle,SiMongodb,TbSql,FaDocker,SiCockpit,SiPython",
              },
              petri: {
                title: "Petri",
                description: "description",
                technologies: "",
              },
              dhcp: {
                title: "DHCP",
                description: "description",
                technologies: "FaLinux, SiAlpinelinux",
              },
            },
          },
          personal: {
            title: "Personnel",
            rwg: {
              title: "Hackaton Read-Write-Grow",
              "link-text": "rwg.bio",
              description:
                "Des amis de l'équipe IGEM ont suggéré ce hackaton, nous avons donc formé deux équipes. Nous nous sommes concentrés sur la prédiction et la conception de nanocages d'ARN. Personnellement, j'ai travaillé sur le traitement de l'ARN et la prédiction de la structure secondaire.",
              "code-link": "Notre Code",
              outcome:
                "Bien que nous n'ayons pas gagné, notre équipe sœur faisait partie des dix premiers et a pu présenter son idée à des professionnels et recevoir des conseils.",
              technologies: "",
            },
            cardihack: {
              title: "Défi Cardi-Hack",
              description:
                "Suggéré par un ami en BioInformatique, ce hackaton consiste à entraîner un Language Model pour calculer les scores PRS et évaluer des risques cardiaques.",
              technologies: "",
            },
            server: {
              title: "Mon Serveur",
              description:
                "Je me suis construit un serveur en utilisant Unraid et Docker",
              technologies: "SiUnraid,FaDocker, SiNextcloud ",
            },
          },
        },
      },
    },
  },
});

export default i18n;
