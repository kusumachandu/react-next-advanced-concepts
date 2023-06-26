import LargeHeading from "@/components/ui/LargeHading";
import Paragraph from "@/components/ui/Paragraph";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Next Custom Application',
  description: "Build custom components in easy and good looking"
}

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size='lg'
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br /> Text Similarity
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left
          ">
            with the text similarity API, you can easily determine the similiarity between two piedes of text with a free {' '}
            <Link href="/login" className="underline underline-offset-2 text-black dark:text-light-gold">API key</Link>.
          </Paragraph>
          <div className="relative w-full max-w-lg lg:max-w-2xl lg:left-1/2 aspect-square lg:absolute">
            <Image priority alt="typewriter" src="/typewriter.png" className="img-shadow" quality={100} style={{objectFit: 'contain'}} fill  />
          </div>
        </div>
      </div>
    </div>
  )
}
