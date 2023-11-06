import Link from "next/link";
import GithubIcon from "./Icons/GithubIcon";
import LanguageIcon from "./Icons/LanguageIcon";

type Props = {
  name: string;
  description: string;
  language: string;
  html_url: string;
  homepage: string;
};

export default function ProjectCard({ project }: { project: Props }) {
  const { name, description, language, html_url, homepage } = project;
  return (
    <div>
      <h2 className="text-xl">{name}</h2>
      <p className="text-sm">{description}</p>
      <p>{language}</p>
      <div>
        {html_url && (
          <Link href={html_url} target="_blank">
            <GithubIcon />
          </Link>
        )}
      </div>
      <div>
        {homepage && (
          <Link href={homepage} target="_blank">
            <LanguageIcon />
          </Link>
        )}
      </div>
    </div>
  );
}
