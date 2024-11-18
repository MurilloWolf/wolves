"use client";

import HeaderNotification from "./HeaderNotification";
import getLang from "@/lib/getLang";
import Image from "next/image";
import logo from "@/assets/dall-e-2.png";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useRouter, usePathname, Link } from "@/i18n/routing";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui";

export default function Header() {
  const getText = useTranslations("HeaderNotification");
  const getTextHeader = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const defaultLang = getLang(window.location.pathname);

  const [lang, setLang] = useState<"en" | "pt-br">(defaultLang);

  const handleChange = (value: string) => {
    const selectedLang = value as "en" | "pt-br";
    setLang(selectedLang);
    router.push(pathname, { locale: selectedLang });
  };

  useEffect(() => {
    const currentLang = getLang(window.location.pathname);
    if (currentLang !== lang) {
      setLang(currentLang);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-10">
      <div className="h-16 bg-[#121212]/95 isolate aspect-video w-full ring-1 ring-black/5 ">
        <nav className="grid grid-cols-12 sm:gap-4 h-full w-full ">
          <Link
            href="/"
            className="text-gray-50 col-span-5 col-start-1 md:col-start-2 md:col-span-3 xl:col-span-2 xl:col-start-2 sm:col-start-2 sm:col-span-3 lg:gap-2 flex items-center justify-evenly lg:justify-start "
          >
            <Image
              alt="logo"
              src={logo}
              width={50}
              height={50}
              className="rounded-full"
            />
            Murillo Wolf
          </Link>
          <div className="col-start-9 col-span-3 flex justify-center items-center">
            <Select onValueChange={handleChange} value={lang}>
              <SelectTrigger className="w-[150px] bg-[#212121] text-gray-50 border-none">
                <SelectValue placeholder="Lang" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="">
                  <SelectLabel>{getTextHeader("Language")}</SelectLabel>
                  <SelectItem value="en">en</SelectItem>
                  <SelectItem value="pt-br">pt-br</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </nav>
      </div>
      <HeaderNotification
        text={getText("text")}
        link={{ text: getText("link"), href: getText("href") }}
      />
    </header>
  );
}
