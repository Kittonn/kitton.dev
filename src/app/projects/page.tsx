import { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import Container from "@/components/common/Container";
import { getProjectList } from "@/services/project";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function Projects() {
  const projects = await getProjectList();
  return (
    <Container>
      <h1 className="text-center font-semibold text-5xl">Projects</h1>
      <p className="my-12 text-neutral-200">
        These are most of the projects I have worked on, including personal
        projects, practice projects, and university projects. if you want to see
        more of my projects, please visit my Github profile{" "}
        <span>(github.com/Kittonn)</span>.
      </p>
      <div className="space-y-4">
        {projects?.length ? (
          projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))
        ) : (
          <p>No Projects Available.</p>
        )}
      </div>
    </Container>
  );
}
