const langs = [
    {
        value: 'en',
        data: require('./en.json')
    }
];

const storedLang = localStorage.getItem('localization');
const lang = ((storedLang && langs.find((v) => v.value === storedLang)) || langs[0]).data;
export default lang;