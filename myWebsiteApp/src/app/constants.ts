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

export interface ILangSet {
    "menu": IMenuLangSet,
    "footer": IFooterLangSet
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
        }
    }
}