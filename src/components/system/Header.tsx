"use client";

import HeaderNotification from "./HeaderNotification";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("HeaderNotification");
  return (
    <header className="sticky top-0">
      <div className="h-16 bg-black/90 isolate aspect-video w-full ring-1 ring-black/5 ">
        <nav className="grid grid-cols-12 sm:gap-4 h-full w-full ">
          <div className="text-gray-50 col-span-2 col-start-2 sm:col-start-1 flex items-center justify-evenly">
            Wolves
          </div>
        </nav>
      </div>
      <HeaderNotification
        text={t("text")}
        link={{ text: t("link"), href: t("href") }}
      />
    </header>
  );
}
