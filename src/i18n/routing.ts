import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "pt-br"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/projects": {
      en: "/projects",
      "pt-br": "/projetos",
    },
    "/projects/:slug": {
      en: "/projects/:slug",
      "pt-br": "/projetos/:slug",
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
