/**
 * @param pathname from window.location.pathname
 * @returns
 */
export default function getLand(pathname: string) {
  const regexLang = /^\/(en|pt-br)(\/|$)/;
  const match = pathname.match(regexLang);
  const defaultLang: "en" | "pt-br" =
    match && match[1] === "pt-br" ? "pt-br" : "en";

  return defaultLang;
}
