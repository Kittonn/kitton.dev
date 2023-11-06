export const formatRangeDate = (startDate: string, endDate: string) => {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "currently";
  return `${start} - ${end}`;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};
