import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectItem({ project }: Props) {
  return (
    <>
      <Card className="flex justify-evenly h-96">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="basis-1/2">
            {/* <a href={project.link} target="_blank">
              <Image
                src={project.image}
                width={400}
                height={600}
                alt={project.alt}
              ></Image>
            </a> */}
          </CardDescription>
        </CardHeader>
        <CardContent className="basis-1/2 mt-20">
          {project.description}
        </CardContent>
      </Card>
    </>
  );
}
