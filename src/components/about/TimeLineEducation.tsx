import { Education } from "@/types/education";
import { formatRangeDate } from "@/utils/date";

type Props = {
  education: Education;
};

export default function TimeLineEducation({ education }: Props) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        {education.degree}, {education.fieldOfStudy} |{" "}
        {formatRangeDate(education.startDate, education.endDate)}
      </h2>
      <h3>
        {education.schoolName} - {education.location}
      </h3>
      {education.laboratory && (
        <div>
          {education.laboratory.map((laboratory, index) => (
            <div
              key={index}
              className="mb-4 text-base font-normal text-gray-500 flex gap-2"
            >
              <div>
                <p>-</p>
              </div>
              <div>
                <p>{laboratory.name}</p>
                <p>{laboratory.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
