export interface IMenuLangSet {
    home: string,
    studies: string,
    skills: string,
    services: string,
    portfolio: string,
    about: string,
    contact: string
}

export interface ILangSet {
    "menu": IMenuLangSet
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
        }
    }
}