export interface IMenuLangSet {
    home: string,
    studies: string,
    skills: string,
    services: string,
    portfolio: string,
    about: string,
    contact: string
}

export interface IFooterLangSet {
    address: string,
    phone: string
}

export interface IHomeLangSet {
    address: string,
    phone: string,
    nationality: string,
    birthday: string,
    driving: string,
    skills: string,
    services: string,
    ingenieur: string,
    txt1: string,
    txt2: string,
    contact: string,
    contacttxt: string
}

export interface IStudiesLangSet {
    address: string,
    phone: string,
    nationality: string,
    birthday: string,
    driving: string,
    skills: string,
    services: string,
    studies: string,
    et1title: string,
    et2title: string,
    et3title: string,
    et4title: string,
    et1: string,
    et1a: string,
    et1b: string,
    et2: string,
    et2a: string,
    et3: string,
    et3a: string,
    et3b: string,
    et3c: string,
    et4: string,
    et4b: string,
    et4c: string,
    et4d: string,
    exp1title: string,
    exp2title: string,
    exp3title: string,
    exp4title: string,
    exp1: string,
    exp1a: string,
    exp1b: string,
    exp1c: string,
    exp1d: string,
    exp1e: string,
    exp2: string,
    exp2a: string,
    exp3: string,
    exp3a: string,
    exp3b: string,
    exp4: string,
    exp4a: string,
    exp4b: string,
}

export interface IContactLangSet {
    address: string,
    phone: string,
    phone1: string,
    sidetxt1: string,
    sidetxt2: string,
    skills: string,
    services: string,
    form: string,
    name: string,
    firstname: string,
    object: string,
    message: string,
    message_small: string,
    sendbtn: string,
    cancelbtn: string
}

export interface IPortfolioLangSet {
    address: string,
    phone: string,
    nationality: string,
    birthday: string,
    driving: string,
    skills: string,
    services: string,
    projet: string,
    projet1: string,
    descr1: string,
    projet2: string,
    descr2: string,
    projet3: string,
    descr3: string,
    projet4: string,
    descr4: string,
    projet5: string,
    descr5: string,
    projet6: string,
    descr6: string,
    more: string
}

export interface IServicesLangSet {
    address: string,
    phone: string,
    nationality: string,
    birthday: string,
    driving: string,
    skills: string,
    projet: string,
    projet1: string,
    descr1: string,
    projet2: string,
    descr2: string,
    projet3: string,
    descr3: string,
    projet4: string,
    descr4: string,
    projet5: string,
    descr5: string,
    projet6: string,
    descr6: string,
    more: string,
    contact: string
}

export interface ISkillsLangSet {
    address: string,
    phone: string,
    nationality: string,
    birthday: string,
    driving: string,
    services: string,
    skills: string,
    et1title: string,
    et1descr: string,
    et1a: string,
    et1b: string,
    et1c: string,
    et1d: string,
    et2title: string,
    et2descr: string,
    et2a: string,
    et2b: string,
    et2c: string,
    et2d: string,
    et2e: string,
    et3title: string,
    et3descr: string,
    et3a: string,
    et3b: string,
    et3c: string,
    et3d: string,
    et3e: string,
    et4title: string,
    et4descr: string,
    et4a: string,
    et4b: string,
    et4c: string,
    et4d: string
}

export interface IAboutLangSet {
    about: string,
    address: string,
    phone: string,
    nationality: string,
    birthday: string,
    driving: string,
    services: string,
    skills: string,
    et1title: string,
    et1a: string,
    et1b: string,
    et1d: string,
    et1f: string,
    et1h: string,
    et2title: string,
    et2a: string,
    et2b: string,
    et2c: string,
    et2d: string,
    et3a: string,
    et3c: string,
    et3d: string
}

export interface ILangSet {
    "menu": IMenuLangSet,
    "footer": IFooterLangSet,
    "home": IHomeLangSet,
    "studies": IStudiesLangSet,
    "contact": IContactLangSet,
    "portfolio": IPortfolioLangSet,
    "services": IServicesLangSet,
    "skills": ISkillsLangSet,
    "about": IAboutLangSet
}

export interface ILang {
    "en": ILangSet,
    "fr": ILangSet
}

export type AllowedLangs = "en" | "fr"

export const LANGS: ILang = {
    "en": {
        "menu": {
            home: "Home",
            studies: "Studies & Experience",
            skills: "Skills",
            services: "Services",
            portfolio: "Portfolio",
            about: "About me",
            contact: "Contact"
        },
        "footer": {
            address: "Address",
            phone: "Phone"
        },
        "home": {
            address: "Address",
            phone: "Phone Number",
            nationality: "Nationality",
            birthday: "Date of birth",
            driving: "Driving",
            skills: "See skills",
            services: "See services",
            ingenieur: "Engineering Student",
            txt1: "I am currently studying computer science at the National Graduate School of Advanced Techniques of Paris (ENSTA Paris), France, top ten among the best highly selective ‘Grandes Ecoles’.",
            txt2: "I am targetting a 6 months internship in the field of cybersecurity during which I should achieve a technical project. This internship would be an opportunity for me to have a first concrete professional experience, in an actual company, which will be decisive in finding my first job.",
            contact: "Contact me now!",
            contacttxt: "If you are interested in any of my skills or services, or if you have any question, feel free to contact me!"
        },
        "studies": {
            address: "Address",
            phone: "Phone Number",
            nationality: "Nationality",
            birthday: "Date of birth",
            driving: "Driving",
            skills: "See skills",
            services: "See services",
            studies: "Studies",
            et1title: "Paris suburbs",
            et2title: "Paris suburbs",
            et3title: "Faidherbe High School",
            et4title: "Madeleine Michelis High School",
            et1: "Anticipated graduation with a french « Diplôme d’Ingénieur Informatique » - top diploma equivalent to a top Honors Master’s Degree in Informatics, with strong informatic engineer training.",
            et1a: "Graduate Major : Achitecture and Security of Information Systems",
            et1b: "Anticipated graduation with a parallel Master in cybersecurity - Telecom Paris",
            et2: "French Baccalauréat in Science with Honors",
            et2a: "I succeeded a scientific french Baccalauréat with honors, acquiring basic knowledge in many scientific fields (Maths, Physics, Computer Science, Biology).",
            et3: "Preparatory Class",
            et3a: "I spent two years of highly intensive undergraduate courses preparing for the competitive entrance examination to very selective French ‘Grandes Ecoles’.",
            et3b: "Very strong background in hard sciences: Mathematics, Physics, Computer Science",
            et3c: "Successfully coped with a very heavy workload of more than 60 weekly hours of classes, tests and lab sessions",
            et4: "to June",
            et4b: "Awarded the B.S in Informatics, Maths and Physics",
            et4c: "Undergraduate Major : General Scientific Knowledge in Informatics (A), Maths and Physics",
            et4d: "Undergraduate Minor : Artificial Intelligence (A) and Genetic Algorithms (A)",
            exp1title: "Orange, Northern Intervention Unit - Amiens",
            exp2title: "TAEP Junior Company - Paris",
            exp3title: "Pierre Bernard Architectural Firm - Amiens",
            exp4title: "Eiffage Public Works - Amiens",
            exp1: "June 2019 - Network Technician",
            exp1a: "I worked among the Northern Intervention Unit, within an international company and an enterprise environment to provide a quality telecommunication service to users on the network. \nSelected contributions:",
            exp1b: "Wrote reports on the activities conducted by technicians",
            exp1c: "Ran tests to check the quality of optical fibre and copper lines",
            exp1d: "Install and solder optical fibre cables",
            exp1e: "Working in this unit was a good opportunity for me to learn business life as well as some technical knowledge of networks in general.",
            exp2: "June 2013 - Public works worker",
            exp2a: "I worked among a worker unit on a couple building sites in order to have a first glance at the business world. I helped workers on very concrete aspects and learnt a lot about workers' working conditions as well.",
            exp3: "June 2014 - Architect in a small firm",
            exp3a: "I joined the work of a small architectural firm and noted the stakes of smaller companies, be it on small or medium scale projects.",
            exp3b: "During this internship I wrote a complete file on a selected architectural building - The Millenium Bridge (London) - and thus I learnt how such projects are conducted and what stakeholders are involved.",
            exp4: "2018/2019 - Treasurer and Quality Manager",
            exp4a: "TAEP is the junior company of ENSTA Paris. Junior companies link students to actual companies which have projects for them.",
            exp4b: "In this company I developped many skills in treasury and project management along with working in a company environment. We also had the opportunity to developped partnerships with other universities including La Sorbonne and Polytechnique.",
        },
        "contact": {
            address: "Address",
            phone: "Phone Number",
            phone1: "Phone",
            sidetxt1: "You can contact me using one of the following :",
            sidetxt2: "Or through this contact form",
            skills: "See skills",
            services: "See services",
            form: "Contact form",
            name: "Name",
            firstname: "FirstName",
            object: "Object",
            message: "Your message",
            message_small: "Feel free to ask any question. I usually answer by email within 24h.",
            sendbtn: "Send",
            cancelbtn: "Cancel"
        },
        "portfolio": {
            address: "Address",
            phone: "Phone Number",
            nationality: "Nationality",
            birthday: "Date of birth",
            driving: "Driving",
            skills: "See skills",
            services: "See services",
            projet: "Project",
            projet1: "Defragmentation software",
            descr1: "I worked on the hard drive fragmentation phenomenon and modelled a defragmentation software",
            projet2: "Webdesign",
            descr2: "I designed a responsive front-end website for a false shop",
            projet3: "Genetic Algorithm",
            descr3: "I worked on a genetic algorithm used to find values in data-heavy files",
            projet4: "Library Web App",
            descr4: "I developped a Java WebApp which can be used to manage a library, its books and members",
            projet5: "Object Oriented RTX",
            descr5: "I worked on a software which can be used to render a scene with several objects using ray tracing",
            projet6: "Meta Attack Language",
            descr6: "I worked on the Meta Attack Language implementation of the MITRE ATT&CK framework",
            more: "More"
        },
        "services": {
            address: "Address",
            phone: "Phone Number",
            nationality: "Nationality",
            birthday: "Date of birth",
            driving: "Driving",
            skills: "See skills",
            projet: "Services I can provide",
            projet1: "Website",
            descr1: "With the skills I have acquired in many web programming languages, I can design responsive and dynamic websites for you or your company",
            projet2: "WebApp",
            descr2: "I can develop safe webapps providing all sorts of services (Access database, interact with clients...)",
            projet3: "Translation",
            descr3: "Being fluent in both english and french, with a scientific background, I can translate most technical documents and websites between those languages",
            projet4: "Network Protection",
            descr4: "Having a strong background in computer science and specifically in cybersecurity, I can make your professional network a true fortress",
            projet5: "Ethical Hacking",
            descr5: "I can try and get inside your professional network in order to identify its weaknesses and find solutions to protect yourself",
            projet6: "Application Testing",
            descr6: "I have notions about Test Driven Development and can successfully run a test campaign to validate an application",
            more: "If you are interested in any of these, or if you have any question, feel free to",
            contact: "contact me"
        },
        "skills": {
            address: "Address",
            phone: "Phone Number",
            nationality: "Nationality",
            birthday: "Date of birth",
            driving: "Driving",
            services: "See services",
            skills: "My skills",
            et1title: "Languages",
            et1descr: "I have been studying several languages which are the following:",
            et1a: "French - Native speaker",
            et1b: "English - Fluent",
            et1c: "German - Intermediate level",
            et1d: "Chinese - Beginner level",
            et2title: "Computer Science",
            et2descr: "My studies and experience gave me a strong academic backgroung in the following fields of computer science:",
            et2a: "Cybersecurity",
            et2b: "Network architecture",
            et2c: "Computer architecture and microprocessors",
            et2d: "Operating systems",
            et2e: "Programming (C, Java, C++, Ocaml)",
            et3title: "Management",
            et3descr: "Working at TAEP Junior Company and being part of its board brought me many management skills : ",
            et3a: "Sense of responsibilities",
            et3b: "Adaptability",
            et3c: "Ability to take decisions",
            et3d: "Facilitate a meeting",
            et3e: "Oral and written communication in a company",
            et4title: "Soft skills",
            et4descr: "During my studies, thanks to music, community involvement and because of who I am I develop the following soft skills:",
            et4a: "Good oral and written communication",
            et4b: "Talking in front of an audience",
            et4c: "Seriousness and organization",
            et4d: "Strong analysis capacities"
        },
        "about": {
            about: "About me",
            address: "Address",
            phone: "Phone Number",
            nationality: "Nationality",
            birthday: "Date of birth",
            driving: "Driving",
            services: "See services",
            skills: "See skills",
            et1title: "Music",
            et1a: "Music is to me one of the best ways of expressing oneself and meet people with common interests, which is why I played with several orchestras. \nI have been playing the drums for 13 years and I also play a little piano. I love a lot of different styles and I also write some music (you can",
            et1b: "check it out",
            et1d: "I have e.g. performed",
            et1f: "'s",
            et1h: "in partnership with the Melbourn Village College and Orchestra of Picardie(Cambridgeshire, England, 2015).",
            et2title: "Travel",
            et2a: "Travelling is a second important hobby to me. More than mere tourism, this allows people to meet different culture and languages and discover the unknown. I have had the luck to travel a lot when I was young which allowed me to discover all this and gave me a deeper vision of the world we live in.",
            et2b: "I also",
            et2c: "hike",
            et2d: " a lot. These last years, I have gone for a week long hike in the french Alpes with friends, which was a great opportunity for us to unplug and focus on essential things.",
            et3a: "As well as through a lot of travel, I had the opportunity to improve my english by taking part in the",
            et3c: ". \nThis association organizes a national-wide tournament every year in which students from many universities meet in team and debate on various topics.",
            et3d: "This was a great experience to learn about talking in front of an audience, defending one's opinion and oral communication skills."
        }
    },
    "fr": {
        "menu": {
            home: "Accueil",
            studies: "Etudes & Experience",
            skills: "Compétences",
            services: "Services",
            portfolio: "Portfolio",
            about: "À propos",
            contact: "Contact"
        },
        "footer": {
            address: "Adresse",
            phone: "Tel"
        },
        "home": {
            address: "Adresse",
            phone: "Telephone",
            nationality: "Nationalité",
            birthday: "Date de naissance",
            driving: "Permis de conduire",
            skills: "Voir compétences",
            services: "Voir services",
            ingenieur: "Ingénieur étudiant",
            txt1: "Je suis actuellement étudiant en informatique à l'Ecole Nationale Supérieure des Techniques Avancées (ENSTA Paris), France, top 10 parmi les Grandes Ecoles d'ingénieurs françaises.",
            txt2: "Je suis à la recherche d'un stage de 6 mois dans le domaine de la cybersécurité au cours duquel je devrais mener un projet technique concret. Ce stage sera pour moi l'opportunité d'avoir une première expérience technique concrète en entreprise, ce qui sera décisif pour la recherche de mon premier emploi.",
            contact: "Contactez-moi!",
            contacttxt: "Si vous êtes intéressé par l'une de mes compétences ou l'un de mes services, ou si vous avez des questions, n'hésitez pas à me contacter!"
        },
        "studies": {
            address: "Adresse",
            phone: "Telephone",
            nationality: "Nationalité",
            birthday: "Date de naissance",
            driving: "Permis de conduire",
            skills: "Voir compétences",
            services: "Voir services",
            studies: "Etudes",
            et1title: "Palaiseau",
            et2title: "Palaiseau",
            et3title: "Lycée Faidherbe",
            et4title: "Lycée Madeleine Michelis",
            et1: "Diplôme d'Ingénieur Informatique anticipé avec des compétences solides en informatique",
            et1a: "Majeure : Achitecture et Sécurité des Systèmes d'Information",
            et1b: "Master en parallèle anticipé en Cybersécurité - Telecom Paris",
            et2: "Baccalauréat Scientifique Mention Très Bien",
            et2a: "J'ai obtenu le baccalauréat avec la mention Très Bien, obtenu ainsi des connaissances de base dans de nombreux domaines scientifiques (Maths, Physique, Informatique, Biologie).",
            et3: "Classe Préparatoire aux Grandes Ecoles",
            et3a: "J'ai travaillé pendant deux ans à la préparation des concours très selectifs d'entrée dans les Grandes Ecoles d'Ingénieur françaises.",
            et3b: "De solides connaissances théorique en sciences dures: Maths, Physique, Informatique",
            et3c: "Quantité de travail exigeante avec 60 heures par semaine de cours, examens et travaux pratiques.",
            et4: "à Juin",
            et4b: "Equivalent Licence L3 en Informatique, Maths et Physique",
            et4c: "Majeure : Tronc commun scientifique en Maths, Physique et Informatique",
            et4d: "Mineure : Intelligence Artificielle et Algorithmes Génétiques",
            exp1title: "Orange, Unité d'Intervention Nord de France - Amiens",
            exp2title: "TAEP Junior Entreprise - Paris",
            exp3title: "Cabinet d'Architectes Pierre Bernard - Amiens",
            exp4title: "Eiffage Travaux Publics - Amiens",
            exp1: "Juin 2019 - Technicien Réseau",
            exp1a: "J'ai travaillé au sein de l'Unité d'Intervention Nord de France, dans une firme d'échelle internationale et dans un environnement d'entreprise pour fournir un service de télécomunication de qualité aux utilisateurs réseau. \nTravail effectué:",
            exp1b: "Rédaction de rapports d'activité sur les tâches réalisées par les techniciens",
            exp1c: "Réalisation de tests pour vérifier la qualité des lignes fibre et cuivre",
            exp1d: "Installation et soudure de fibre optique",
            exp1e: "Travailler au sein de cette unité a été l'opportunité pour moi de découvrir en détail le monde du travail, tout en développant une connaissance technique des réseaux telecom.",
            exp2: "Juin 2013 - Ouvrier Travaux Publics",
            exp2a: "J'ai travaillé au sein d'une équipe d'ouvriers sur quelques chantiers pour avoir un premeir contact avec le monde du travail. J'ai aidé les ouvriers pour certaines de leurs tâches et j'ai également beaucoup appris sur leurs conditions de travail.",
            exp3: "Juin 2014 - Architecte dans un cabinet",
            exp3a: "J'ai participé au travail d'un cabinet d'architectes et ai ainsi pu observer les enjeux des plus petites entreprises, sur des projets de petite et moyenne taille.",
            exp3b: "Durant ce stage, j'ai rédigé un dossier complet au sujet d'un ouvrage d'art de mon choix - Le Millenium Bridge (Londres) - et j'ai ainsi appris comment de tels projets étaient menés et quels collaborateurs y contribuent.",
            exp4: "2018/2019 - Trésorier et Chargé de Qualité",
            exp4a: "TAEP est la Junior Entreprise de l'ENSTA Paris. Les Junior Entreprises mettent en relation les étudiants et les entreprises qui ont des projets à leur proposer.",
            exp4b: "Au sein de cette entreprise, j'ai développé de nombreuses compétences en trésorerie et en gestion de projet, tout en apprenant à travailler dans un contexte d'entrprise. Nous avons également pu développer des partenariats avec les Junior Entreprises d'autres universités parisiennes dont La Sorbonne et Polytechnique.",
        },
        "contact": {
            address: "Adresse",
            phone: "Telephone",
            phone1: "Telephone",
            sidetxt1: "Vous pouvez me contacter avec ces coordonnées:",
            sidetxt2: "Ou bien en remplissant ce formulaire",
            skills: "Voir compétences",
            services: "Voir services",
            form: "Formulaire",
            name: "Nom",
            firstname: "Prénom",
            object: "Objet",
            message: "Votre message",
            message_small: "N'hésitez pas à me contacter. Je réponds en général par e-mail sous 24h.",
            sendbtn: "Envoyer",
            cancelbtn: "Annuler"
        },
        "portfolio": {
            address: "Adresse",
            phone: "Telephone",
            nationality: "Nationalité",
            birthday: "Date de naissance",
            driving: "Permis de conduire",
            skills: "Voir compétences",
            services: "Voir services",
            projet: "Projet",
            projet1: "Logiciel de défragmentation",
            descr1: "J'ai travaillé sur le phénomène de fragmentation des disques durs et ai modélisé un logiciel de défragmentation",
            projet2: "Webdesign",
            descr2: "J'ai réalisé le front d'un site web responsive pour un magasin factice",
            projet3: "Algorithme génétique",
            descr3: "J'ai travaillé à la mise en oeuvre d'un algorithme génétique permettant de trouver des valeurs dans des fichiers lourds",
            projet4: "Application pour bibliothèque",
            descr4: "J'ai développé une WebApp Java qui peut être utilisée pour gérer une bibliothèque, ses livres et ses membres",
            projet5: "RTX Orienté Objet",
            descr5: "J'ai travaillé sur un logiciel qui peut créer le rendu d'une scène 3D en utilisant du Ray Tracing",
            projet6: "Meta Attack Language",
            descr6: "J'ai travaillé sur l'implantation de la matrice MITRE ATT&CK avec un Meta Attack Language",
            more: "Plus"
        },
        "services": {
            address: "Adresse",
            phone: "Telephone",
            nationality: "Nationalité",
            birthday: "Date de naissance",
            driving: "Permis de conduire",
            skills: "Voir compétences",
            projet: "Je peux proposer les services suivants",
            projet1: "Site web",
            descr1: "Avec les compétences que j'ai développées dans plusieurs langages de programmation web, je peux réaliser des sites dynamiquer et 'responsive' pour vous ou votre entreprise",
            projet2: "WebApp",
            descr2: "Je peux développer des applications web sécurisées qui fournissent toutes sortes de services (Acceder une base de données, intéragir avec les clients...)",
            projet3: "Traduction",
            descr3: "Parlant couramment français et anglais, et ayant un bagage scientifique, je peux traduire la plupart des documents techniques et sites web entre ces deux langues",
            projet4: "Portection Réseau",
            descr4: "Ayant de bonnes connaissances en informatique et notamment en cybersécurité, je peux faire de votre réseau d'entreprise une vrai forteresse",
            projet5: "Ethical Hacking",
            descr5: "Je peux essayer d'infiltrer votre réseau d'entreprise afin d'identifier ses faiblesses et trouver des solutions pour vous protéger",
            projet6: "Test d'applications",
            descr6: "J'ai des notions de 'Test Driven Development' et je suis donc capable de mener une campagne de tests pour valider votre application",
            more: "Si vous êtes intéressé par l'un de ces services, ou si vous avez des questions, n'hésitez pas à",
            contact: "me contacter"
        },
        "skills": {
            address: "Adresse",
            phone: "Telephone",
            nationality: "Nationalité",
            birthday: "Date de naissance",
            driving: "Permis de conduire",
            services: "Voir services",
            skills: "Mes compétences",
            et1title: "Langages",
            et1descr: "J'ai étudié plusieurs langages, ils sont listés ici :",
            et1a: "Français - Langue maternelle",
            et1b: "Anglais - Bilingue",
            et1c: "Allemand - Niveau intermédiaire",
            et1d: "Chinois - Niveau débutant",
            et2title: "Informatique",
            et2descr: "Mes études et mes expériences m'ont donné une base théorique solide dans différents domaines de l'informatique :",
            et2a: "Cybersécurité",
            et2b: "Architecture Réseau",
            et2c: "Architecture des ordinateurs et microprocesseurs",
            et2d: "Systèmes d'Exploitation",
            et2e: "Programmation (C, Java, C++, Ocaml)",
            et3title: "Management",
            et3descr: "Travailler chez TAEP Junior Entreprise et faire partie de son bureau m'a apporté des compétences en management : ",
            et3a: "Sens des responsabilités",
            et3b: "Adaptabilité",
            et3c: "Capacité à prendre des décisions",
            et3d: "Animer une réunion",
            et3e: "Communication écrite et orale en entreprise",
            et4title: "Soft skills",
            et4descr: "Pendant mes études, à travers la musique, l'engagement étudiant et en raison de qui je suis, j'ai développé les soft skills suivants :",
            et4a: "Communication orale et écrite",
            et4b: "Prendre la parole en public",
            et4c: "Sérieux et organisation",
            et4d: "Capacité d'analyse"
        },
        "about": {
            about: "À propos de moi",
            address: "Adresse",
            phone: "Telephone",
            nationality: "Nationalité",
            birthday: "Date de naissance",
            driving: "Permis de conduire",
            services: "Voir services",
            skills: "Voir compétences",
            et1title: "Musique",
            et1a: "La musique est pour l'un des meilleurs moyens pour s'exprimer et aussi rencontrer des personnes qui ont un même centre d'intérêt, c'est pourquoi j'ai joué dans plusieurs orchestres. \nJe fais des percussions depuis 13 ans et je fais également un peu de piano. J'aime beaucoup de différents styles de musique et j'écris aussi quelques morceaux (vous pouvez les",
            et1b: "écouter ici",
            et1d: "J'ai par exemple joué l'oeuvre de",
            et1f: ",",
            et1h: "en partenariat avec le Melbourn Village College et l'Orchestre de Picardie (Cambridgeshire, Angleterre, 2015).",
            et2title: "Voyager",
            et2a: "Voyager est unsecond hobby important pour moi. Plus que du simple tourisme, voyager permet de découvrir de nouvelles cultures, de nouveaux langages et de rencontrer l'inconnu. J'ai eu la chance de voyager beaucoup en étant jeune ce qui m'a permis de découvrir tout ceci et m'a donné une vision plus profonde du monde.",
            et2b: "Je fais aussi beaucoup de",
            et2c: "randonnée",
            et2d: ". Ces dernières années, j'ai fait plusieurs treks d'une semaine dans les Alpes avec des amis, qui ont été pour nous une belle opportunité pour se déconnecter et se concentrer sur des choses plus essentielles entre amis.",
            et3a: "En plus d'avoir beaucoup voyagé, j'ai pu améliorer mon anglais en participant à la",
            et3c: "Cette association organise tous les ans un tournoi national dans lequel des étudiants de plusieurs universités françaises se rencontrent en équipe et débatent sur des sujets variés, en anglais.",
            et3d: "C'était une bonne expérience qui m'a appris à prendre la parole en public, défendre une opinion et a amélioré ma communication orale."
        }
    }
}