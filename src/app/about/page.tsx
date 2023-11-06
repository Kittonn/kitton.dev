import { Metadata } from "next";
import Container from "@/components/common/Container";
import { data } from "@/data";
import { formatRangeDate } from "@/utils/date";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  const { profile, educations, experiences } = data;
  return (
    <Container>
      <h1 className="text-center font-semibold text-5xl mb-12">About me</h1>
      <p>{profile.about}</p>
      <div>
        <h1>Experience</h1>
        {experiences.map((experience, index) => (
          <div key={index}>
            <h2>{experience.position}</h2>
            <p>{experience.description}</p>
            <p>{formatRangeDate(experience.startDate, experience.endDate)}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
