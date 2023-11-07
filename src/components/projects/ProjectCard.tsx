import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/classNames";
import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const { name, description, language, html_url, homepage } = project;
  return (
    <div className="border-[1px] rounded border-neutral-700 hover:border-neutral-900 p-5 space-y-3 transition duration-300 ease-in-out">
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
          {homepage && (
            <div>
              <Link href={homepage} target="_blank">
                <Image
                  src="/icons/language.svg"
                  alt="language icon"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          )}
          {html_url && (
            <div className="ml-2">
              <Link href={html_url} target="_blank">
                <Image
                  src="/icons/github.svg"
                  alt="github icon"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
