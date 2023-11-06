import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";
import LanguageIcon from "../icons/LanguageIcon";
import { cn } from "@/utils/classNames";
import { Project } from "@/types/project";

type Props = {
  project: Project
};

export default function ProjectCard({ project }: Props) {
  const { name, description, language, html_url, homepage } = project;
  return (
    <div className="border-[1px] rounded border-gray-800 p-5 space-y-3">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex justify-between items-center">
        <p
          className={cn({
            "text-xs bg-neutral-800 py-1 px-4": language,
          })}
        >
          {language}
        </p>
        <div className="flex items-center">
          {html_url && (
            <Link href={html_url} target="_blank">
              <GithubIcon />
            </Link>
          )}
          {homepage && (
            <div className="ml-2">
              <Link href={homepage} target="_blank">
                <LanguageIcon />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
