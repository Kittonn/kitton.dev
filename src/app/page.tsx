import Container from "@/components/common/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Kitton",
};

export default function Home() {
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
}
