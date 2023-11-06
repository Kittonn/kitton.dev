import { Education } from "@/types/education";
import { cn } from "@/utils/classNames";
import { formatRangeDate } from "@/utils/date";

type Props = {
  education: Education;
};

export default function TimeLineEducation({ education }: Props) {
  const rangeDate = formatRangeDate(education.startDate, education.endDate);
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
          {education.degree}, {education.fieldOfStudy} | {rangeDate}
        </h2>
        <h3 className="text-neutral-200">
          {education.schoolName} - {education.location}
        </h3>
        {education.laboratory && (
          <div>
            {education.laboratory.map((laboratory, index) => (
              <div
                key={index}
                className="mb-4 text-base font-normal text-gray-500 flex gap-2"
              >
                <div className="text-neutral-200">
                  <p>-</p>
                </div>
                <div>
                  <p className="text-neutral-200 font-semibold">
                    {laboratory.name}
                  </p>
                  <p className="text-neutral-400">{laboratory.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
