import { Experience } from "@/types/experience";
import { formatRangeDate } from "@/utils/date";

type Props = {
  experience: Experience;
};

export default function TimeLineExperience({ experience }: Props) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        {experience.position} |{" "}
        {formatRangeDate(experience.startDate, experience.endDate)}
      </h2>
      <h3>
        {experience.company} - {experience.location}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {experience.description}
      </p>
    </li>
  );
}
