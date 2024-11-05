import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        solutions: "Solutions",
        cases: "Cases",
        aboutUs: "About Us",
        customerSupport: "Customer Support",
      },
      main: {
        welcomeBold: "Boost your sales",
        welcomeText: "with a validated methodology",
        mainContent:
          "Imagine facing the challenge of having too many clients. This is exactly the kind of challenge you'll have when you hire our services.",
        mainButton: "Sell More",
        pillarsIntro: "We work on strengthening",
        pillarsHighlight: "5 fundamental pillars",
        pillarsEnd: "of your business.",
        plannig: "Planning",
        organization: "Organization",
        performance: "Performance",
        relationship: "Relationship",
        result: "Result",
      },
    },
  },
  pt: {
    translation: {
      header: {
        solutions: "Soluções",
        cases: "Cases",
        aboutUs: "Quem Somos",
        customerSupport: "Atendimento ao Cliente",
      },
      main: {
        welcomeBold: "Aumente as vendas",
        welcomeText: "do seu negócio através de uma metodologia validada",
        mainContent:
          "Imagine enfrentar o desafio de ter clientes demais. É exatamente esse tipo de desafio que você vai ter ao contratar os nossos serviços.",
        mainButton: "Vender mais",
        pillarsIntro: "Trabalhamos com fortalecimento de",
        pillarsHighlight: "5 pilares fundamentais",
        pillarsEnd: "do seu negócio.",
        plannig: "Planejamento",
        organization: "Organização",
        performance: "Desempenho",
        relationship: "Relacionamento",
        result: "Resultado",
      },
    },
  },
  es: {
    translation: {
      header: {
        solutions: "Soluciones",
        cases: "Casos",
        aboutUs: "Quiénes Somos",
        customerSupport: "Atención al Cliente",
      },
      main: {
        welcomeBold: "Aumenta las ventas",
        welcomeText: "de tu negocio con una metodología validada",
        mainContent:
          "Imagina enfrentar el desafío de tener demasiados clientes. Este es exactamente el tipo de desafío que tendrás al contratar nuestros servicios.",
        mainButton: "Vender más",
        pillarsIntro: "Trabajamos en el fortalecimiento de",
        pillarsHighlight: "5 pilares fundamentales",
        pillarsEnd: "de tu negocio.",
        plannig: "Planificación",
        organization: "Organización",
        performance: "Desempeño",
        relationship: "Relaciones",
        result: "Resultado",
      },
    },
  },
};

// Função para detectar o idioma do navegador
const getBrowserLanguage = () => {
  const language = navigator.language || navigator.userLanguage;
  const lang = language.split("-")[0];
  return resources[lang] ? lang : "en";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getBrowserLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

