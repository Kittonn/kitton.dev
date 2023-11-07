import { Metadata } from "next";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <div className="py-24">
      <Container>
      <h1 className="text-center font-semibold text-5xl">Coming Soon!</h1>
    </Container>
    </div>
  );
}
