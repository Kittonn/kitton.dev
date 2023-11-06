import { Metadata } from "next";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <Container>
      <h1 className="text-center font-semibold text-5xl">About me</h1>
    </Container>
  );
}
