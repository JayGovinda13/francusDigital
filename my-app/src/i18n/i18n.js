import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definindo as traduções
const resources = {
  en: {
    translation: {
      header: {
        solutions: "Solutions",
        cases: "Cases",
        aboutUs: "About Us",
        customerSupport: "Customer Support"
      },
      welcome: "Welcome to our website!",
      mainContent: "Here is the main content."
    },
  },
  pt: {
    translation: {
      header: {
        solutions: "Soluções",
        cases: "Cases",
        aboutUs: "Quem Somos",
        customerSupport: "Atendimento ao Cliente"
      },
      welcome: "Bem-vindo ao nosso site!",
      mainContent: "Aqui está o conteúdo principal."
    },
  },
  es: {
    translation: {
      header: {
        solutions: "Soluciones",
        cases: "Casos",
        aboutUs: "Quiénes Somos",
        customerSupport: "Atención al Cliente"
      },
      welcome: "¡Bienvenido a nuestro sitio web!",
      mainContent: "Aquí está el contenido principal."
    },
  },
};

// Função para detectar o idioma do navegador
const getBrowserLanguage = () => {
  const language = navigator.language || navigator.userLanguage; 
  const lang = language.split('-')[0]; 

  return resources[lang] ? lang : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getBrowserLanguage(), 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
