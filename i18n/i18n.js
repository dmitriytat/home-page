let currentLanguage = window.localStorage.getItem('language') || 'en';
const dictionary = {
    en: {
        'm-about': 'About',
        'm-links': 'Links',
        'en': 'English',
        'ru': 'Руссккий',
        'hello': '--- Hello ---',
        'my-name': 'My name is Dmitriy.',
        'i-am': 'I am a frontend developer at',
        'sber-tech': 'Sberbank-Thechnology',
        'links': 'Social networks',
        'my-projects': 'Look and fork my projects',
        'my-facebook': 'Visit my page',
        'my-codewars': 'Hey, that\'s pretty good!',
    },
    ru: {
        'm-about': 'Главная',
        'm-links': 'Ссылки',
        'en': 'English',
        'ru': 'Руссккий',
        'hello': '--- Привет ---',
        'my-name': 'Меня зовут Дима.',
        'i-am': 'Я разработчик интерфейсов в',
        'sber-tech': 'Сбербанк-Технологиях',
        'links': 'Аккаунты в социальных сетях',
        'my-projects': 'Посмотри или форкни мои проекты',
        'my-facebook': 'Моя страничка',
        'my-codewars': 'А это затягивает',
    },
};

export function translate(phrase, language = currentLanguage) {
    return dictionary[language] && dictionary[language][phrase] || phrase;
}

export function changeLanguage(language, callback) {
    window.localStorage.setItem('language', language);

    currentLanguage = language;
    callback();
}
