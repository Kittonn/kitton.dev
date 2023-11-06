import { data } from "@/data";
import TimeLineExperience from "./TimeLineExperience";

export default function ExperienceSection() {
  const { experiences } = data;
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
      <ol className="relative border-l border-neutral-700">
        {experiences.map((experience, index) => (
          <TimeLineExperience experience={experience} key={index} />
        ))}
      </ol>
    </div>
  );
}
