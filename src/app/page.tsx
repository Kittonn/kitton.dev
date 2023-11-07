import Container from "@/components/common/Container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home - Kitton",
};

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Container>
        <div className="text-center">
        <h1 className="text-8xl font-bold">KITTIPOD L.</h1>
        <p className="text-xl mt-2 mb-10 text-neutral-200">A passionate developer who loves to learn new things.</p>
        <div className="flex justify-center items-center gap-8">
          <Link className="border-[1px] border-neutral-700 py-3 px-6 text-neutral-400 font-semibold" href="/about">About Me</Link>
          <Link className="border-[1px] border-neutral-700 py-3 px-6 text-neutral-400 font-semibold" href="https://github.com/Kittonn" target="_blank">
            Github
          </Link>
          <Link className="border-[1px] border-neutral-700 py-3 px-6 text-neutral-400 font-semibold" href="https://www.linkedin.com/in/kittonn/" target="_blank">
            Linkedin
          </Link>
        </div>
        </div>
      </Container>
    </div>
  );
}
