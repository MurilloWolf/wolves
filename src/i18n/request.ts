import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { translations } from "./types";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as translations)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
