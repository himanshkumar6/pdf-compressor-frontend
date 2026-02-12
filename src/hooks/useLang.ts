import { useLocation } from "react-router-dom";

export const useLang = () => {
  const { pathname } = useLocation();

  if (pathname.startsWith("/es")) return "es";
  if (pathname.startsWith("/ru")) return "ru";

  return "en";
};
