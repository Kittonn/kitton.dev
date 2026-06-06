const formatMonthYear = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

export const formatPeriod = (startDate: string, endDate: string | null) =>
  `${formatMonthYear(startDate)} - ${endDate ? formatMonthYear(endDate) : "Present"}`;
