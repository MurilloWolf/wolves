"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button, Badge } from "@/components/ui";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, stack, imageUrl } = props;
  const t = useTranslations("ProjectsPage");

  return (
    <div
      className="shadow-md group rounded-md bg-slate-100 w-full flex-shrink-0 max-w-[300px] min-w-[250px] h-fit min-h-[350px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="h-[80px] group-hover:h-[350px] group-hover:max-h-[350px] overflow-hidden transition-all duration-500 ease-in-out flex flex-col justify-between p-4 bg-gradient-to-r bg-gradient-animated rounded-t-md group-hover:rounded-md">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-gray-50">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
        <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="mb-28">
            <p className="text-sm font-semibold text-gray-300">Stack</p>
            <p className="flex gap-1 flex-wrap">
              {stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </p>
          </div>
          <Button className="mt-4 w-full">
            {t("btn")}
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
            background-image: linear-gradient(
              45deg,
              rgba(59, 130, 246, 0.7),
              rgba(139, 92, 246, 0.7),
              rgba(249, 115, 22, 0.7)
            );
          }
          50% {
            background-position: 100% 50%;
            background-image: linear-gradient(
              45deg,
              rgba(59, 130, 246, 0.7),
              rgba(139, 92, 246, 0.7),
              rgba(249, 115, 22, 0.7)
            );
          }
          100% {
            background-position: 0% 50%;
            background-image: linear-gradient(
              45deg,
              rgba(59, 130, 246, 0.7),
              rgba(139, 92, 246, 0.7),
              rgba(249, 115, 22, 0.7)
            );
          }
        }

        .bg-gradient-animated {
          background-size: 200% 200%;
          animation: gradientAnimation 5s ease infinite;
        }
      `}</style>
    </div>
  );
}
