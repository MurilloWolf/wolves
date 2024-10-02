"use client";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";
import HeaderNotification from "./HeaderNotification";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    console.log("Language changed to", lang);
  };

  return (
    <header className="sticky top-0">
      <div className="h-16 bg-white/90 isolate aspect-video w-full ring-1 ring-black/5 ">
        <nav className="grid grid-cols-12 sm:gap-4 h-full w-full ">
          <div className="col-span-2 col-start-2 sm:col-start-1 flex items-center justify-evenly">
            Wolves
          </div>
          <div className="col-start-11 col-span-1 sm:col-span-1 sm:col-start-12 flex items-center justify-center ">
            <Button
              variant="ghost"
              className="hover:text-orange-600 hover:bg-transparent"
              onClick={() => handleLanguageChange("en")}
            >
              en
              <Globe className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="col-start-11 col-span-1 sm:col-span-1 sm:col-start-12 flex items-center justify-center ">
            <Button
              variant="ghost"
              className="hover:text-orange-600 hover:bg-transparent"
              onClick={() => handleLanguageChange("pt-br")}
            >
              pt-br
              <Globe className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
      <HeaderNotification
        text="Welcome back"
        link={{ text: "click here", href: "#" }}
      />
    </header>
  );
}
