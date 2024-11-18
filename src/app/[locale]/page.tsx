"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FolderGit2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export default function HomePage() {
  const getText = useTranslations("HomePage");

  const router = useRouter();

  const redirectTo = (url: string) => {
    if (url.startsWith("/")) {
      router.push(url);
      return;
    }
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-dvh bg-[#121212]/95 p-4 ">
      <main className="py-4 h-full">
        <section className="flex flex-1 flex-col-reverse gap-4 md:flex-row justify-evenly items-center md:p-10">
          <div className="flex flex-col justify-evenly gap-4 md:px-10 flex-1">
            <h1 className="text-blue-500 text-2xl uppercase font-semibold">
              {getText("salutation")}
            </h1>
            <h2 className="text-gray-200 text-4xl md:max-w-80">
              {getText("im")}
              <span className="line-through px-1 text-3xl text-blue-400">
                {getText("job")}
              </span>{" "}
              {getText("description")}
            </h2>
            <p className="text-gray-400 text-lg md:max-w-96">
              {getText("about")}
            </p>
            <div className="flex  gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-500 text-md max-w-44 text-wrap min-w-44"
                onClick={() => redirectTo("/projects")}
              >
                <FolderGit2 strokeWidth={1} className="mr-2" />
                {getText("btn-work")}
              </Button>
              <Button
                onClick={() => redirectTo("https://github.com/MurilloWolf")}
                className="bg-transparent border border-[#3b82f6] hover:bg-blue-500 hover:text-gray-50 text-blue-500  text-md max-w-44 "
              >
                <Github strokeWidth={1} className="mr-2" />
                Github
              </Button>
            </div>
          </div>
          <div className="flex flex-1 justify-center self-start">
            <Image
              className="rounded-md"
              width={300}
              height={400}
              alt="Murillo Wolf - software engineer"
              src="https://media.licdn.com/dms/image/v2/D4D03AQGjHD7jjQhB1g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730291821398?e=1736985600&v=beta&t=tAkrX1Tmq9acqhK85iNb4krci49pxm10cVbhgIIPDQc"
            />
            <div className="text-gray-50 h-[64px] flex flex-col items-center justify-between ml-4">
              <Linkedin
                strokeWidth={1}
                className="cursor-pointer hover:text-gray-950 hover:bg-white hover:rounded-sm transition-all delay-50"
              />
              <Github
                strokeWidth={1}
                className="cursor-pointer hover:text-gray-950 hover:bg-white hover:rounded-sm transition-all delay-50"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
