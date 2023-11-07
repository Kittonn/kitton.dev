import { Metadata } from "next";
import Container from "@/components/common/Container";
import ExperienceSection from "@/components/about/ExperienceSection";
import EducationSection from "@/components/about/EducationSection";
import ProfileSection from "@/components/about/ProfileSection";
import SkillSection from "@/components/about/SkillSection";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <Container>
      <h1 className="text-center font-semibold text-5xl mb-12">About me</h1>
      <div className="space-y-12">
        <ProfileSection />
        <ExperienceSection />
        <EducationSection />
        <SkillSection />
      </div>
    </Container>
  );
}
