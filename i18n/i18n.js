let currentLanguage = 'en';
const dictionary = {
    en: {
        'links': 'Social networks',
    },
    ru:{
        'links': 'Аккаунты в социальных сетях',
    },
};

export function translate(phrase, language = currentLanguage) {
    return dictionary[language] && dictionary[language][phrase] || phrase;
}

export function changeLanguage(language, callback) {
    currentLanguage = language;
    callback();
}
