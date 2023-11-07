import { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import Container from "@/components/common/Container";
import { getProjectList } from "@/services/project";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function Projects() {
  const projects = await getProjectList();
  return (
    <Container>
      <h1 className="text-center font-semibold text-5xl mb-12">Projects</h1>
      <p className="mb-12 text-neutral-200">
        These are most of the projects I have worked on, including personal
        projects, practice projects, and university projects. if you want to see
        more of my projects, please visit my Github profile{" "}
        <Link
          className="hover:underline hover:text-white transition-all ease-in-out duration-300"
          href="https://github.com/Kittonn"
          target="_blank"
        >
          (github.com/Kittonn)
        </Link>
        .
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
