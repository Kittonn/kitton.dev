import { data } from "@/data";
import SkillCategory from "./SkillCategory";

export default function SkillSection() {
  const { skills } = data;
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Skills & Tools</h2>
      <p className="text-neutral-200 mb-8">
        A look at all the programming languages, frameworks, libraries, and
        tools I've worked with. I started programming about 3 years ago. I have
        tried a lot of different technologies, but I am most comfortable with
        JavaScript and TypeScript.
      </p>
      <div>
        {skills.map((skill, index) => (
          <SkillCategory skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
}
