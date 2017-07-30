let currentLanguage = window.localStorage.getItem('language') || 'en';
const dictionary = {
    en: {
        'm-about': 'About',
        'm-links': 'Links',
        'm-projects': 'Projects',
        'en': 'English',
        'ru': 'Руссккий',
        'hello': '--- Hello ---',
        'my-name': 'My name is Dmitriy.',
        'i-am': 'I am a frontend developer at',
        'sber-tech': 'Sberbank-Thechnology',
        'links': 'Links',
        'my-projects': 'Look and fork my projects',
        'my-facebook': 'Visit my page',
        'my-linkedin': 'Check my CV on LinkedIn',
        'my-codewars': 'Hey, that\'s pretty good!',
        'projects': 'Projects',
        'open-projects': 'Open source',
        'jedi-validate': 'A lightweight form validation component.',
        'top-secret': 'Top secret.',
        'webclinic': 'On this project I was lead frontend developer.',
        'themoscowtimes': 'I developed article constructor and partially open pages of site.',
    },
    ru: {
        'm-about': 'Главная',
        'm-links': 'Ссылки',
        'm-projects': 'Проекты',
        'en': 'English',
        'ru': 'Руссккий',
        'hello': '--- Привет ---',
        'my-name': 'Меня зовут Дима.',
        'i-am': 'Я разработчик интерфейсов в',
        'sber-tech': 'Сбербанк-Технологиях',
        'links': 'Ссылки',
        'my-projects': 'Посмотри или форкни мои проекты',
        'my-facebook': 'Добавляйся в друзья',
        'my-linkedin': 'Чекни мои навыки на LinkedIn',
        'my-codewars': 'А это затягивает',
        'projects': 'Проекты',
        'open-projects': 'Open source',
        'jedi-validate': 'Легкий конфигурируемый валидатор форм.',
        'top-secret': 'И еще несколько.',
        'webclinic': 'На этом проекте я был ведущим разработчиком. Работая в паре с дизайнером, создал приятный и технологичный интерфейс.',
        'themoscowtimes': 'Разработал конструктор статей в админке на AngularJS, и частично открытые страницы сайта.',
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
