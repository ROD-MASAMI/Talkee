import Container from "@/components/MaxWidthWrapper";
import Hero from "@/components/ui/website/Hero";
import Steps from "@/components/ui/website/Steps";
import Image from "next/image";

export default function Home() {
  return (
    <Container className=" mb-12  mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <Hero />
      <Steps />
    </Container>
  );
}
