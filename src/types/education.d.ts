export type Education = {
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  laboratory: Laboratory[];
  location: string;
};

export type Laboratory = {
  name: string;
  description: string;
};
