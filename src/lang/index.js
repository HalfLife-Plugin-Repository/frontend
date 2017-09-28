export const languages = [
    {
        value: 'en',
        option: 'English',
        data: require('./en.json')
    }
];

const language = localStorage.getItem('localization');
const phrases = ((language && languages.find((v) => v.value === language)) || languages[0]).data;
export default phrases;