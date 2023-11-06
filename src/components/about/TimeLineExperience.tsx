import { Experience } from "@/types/experience";
import { cn } from "@/utils/classNames";
import { formatRangeDate } from "@/utils/date";

type Props = {
  experience: Experience;
};

export default function TimeLineExperience({ experience }: Props) {
  const rangeDate = formatRangeDate(experience.startDate, experience.endDate);
  const isCurrent = rangeDate.includes("current");
  return (
    <li className="mb-10 ml-5">
      <div
        className={cn(
          "absolute w-4 h-4 bg-neutral-700 rounded-full mt-1.5 -left-2",
          {
            "bg-green-500": isCurrent,
          }
        )}
      ></div>
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-neutral-200">
          {experience.position} | {rangeDate}
        </h2>
        <h3 className="text-neutral-200">
          {experience.company} - {experience.location}
        </h3>
        <p className="text-neutral-400">{experience.description}</p>
      </div>
    </li>
  );
}
