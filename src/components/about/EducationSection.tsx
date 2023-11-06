import { data } from "@/data";
import TimeLineEducation from "./TimeLineEducation";

export default function EducationSection() {
  const { educations } = data;
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Education</h2>
      <ol className="relative border-l border-neutral-700">
        {educations.map((education, index) => (
          <TimeLineEducation education={education} key={index} />
        ))}
      </ol>
    </div>
  );
}
