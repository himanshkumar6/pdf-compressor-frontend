export const translations = {
  en: {
    home: "Home",
    blog: "Blog",
    about: "About",
    contact: "Contact",
  },
  es: {
    home: "Inicio",
    blog: "Blog",
    about: "Acerca de",
    contact: "Contacto",
  },
};

export const getLangFromPath = (pathname: string) => {
  if (pathname.startsWith("/es")) return "es";
  if (pathname.startsWith("/ru")) return "ru";
  return "en";
};
