import { Education } from "@/types/education";

export const educations: Education[] = [
  {
    schoolName: "King Mongkut's Institute of Technology Ladkrabang",
    degree: "Bachelor of Engineering",
    fieldOfStudy: "Computer Engineering",
    startDate: "2022-08-01",
    endDate: "",
    laboratory: [
      {
        name: "Information Security Advisory Group (ISAG)",
        description:
          "Member of ISAG, a group of students who are interested in cyber security.",
      },
      {
        name: "Software and Artificial Intelligence Group (SAIG)",
        description:
          "Member of SAIG, a group of students who are interested in software development and artificial intelligence.",
      },
    ],
    location: "Bangkok, Thailand",
  },
  {
    schoolName: "Mary Vitthaya Kabinburi School",
    degree: "High School",
    fieldOfStudy: "Science and Mathematics",
    startDate: "2019-05-14",
    endDate: "2022-03-31",
    laboratory: [],
    location: "Prachinburi, Thailand",
  },
];
