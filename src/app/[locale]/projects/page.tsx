import { useTranslations } from "next-intl";
import { ProjectCard } from "@/components/system";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

export default function ProjectsPage() {
  const getText = useTranslations("ProjectsPage");
  // To-do add translation
  const projects = [
    {
      title: "Maristela Joam",
      description: "Description 1",
      stack: ["React", "TypeScript"],
      imageUrl: "https://via.placeholder.com/250",
    },
    {
      title: "Project 2",
      description: "Description 2",
      stack: ["React", "TypeScript"],
      imageUrl: "https://via.placeholder.com/250",
    },
    {
      title: "Project 3",
      description: "Description 3",
      stack: ["React", "TypeScript"],
      imageUrl: "https://via.placeholder.com/250",
    },
  ];

  return (
    <div className="bg-[#121212]">
      <main className="grid grid-cols-12 grid-rows-[384px_1fr_300px] ">
        <section className="col-span-12 row-start-1 h-96 py-20 px-4 md:px-8">
          <h3 className="text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl md:text-7xl font-black">
            {getText("title")}
          </h3>
          <p className="text-xl text-gray-400 text-center mt-6">
            {getText("description")}
          </p>
        </section>
        <section className="col-span-10 col-start-2 md:hidden">
          <p className="text-gray-600 text-center pb-6 font-thin text-xl"></p>
          <Carousel
            className="basis-0"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="basis-0">
              {projects.map((project) => (
                <CarouselItem key={project.title} className="basis-0">
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    stack={project.stack}
                    imageUrl={project.imageUrl}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        <section className="col-span-12 lg:col-span-10 lg:col-start-2 row-start-2 hidden md:flex justify-evenly gap-4 flex-wrap">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              stack={project.stack}
              imageUrl={project.imageUrl}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
