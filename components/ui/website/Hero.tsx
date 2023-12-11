import React from "react";
import { Button } from "../button";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <h1 className=" max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Read by talking to your <span className=" text-primary">PDFs</span> in
        seconds
      </h1>
      <p className=" mt-5 max-w-prose text-zinc-700 sm:text-lg">
        Talkee revolutionizes the common reading method, now you can have
        conversations with any PDF documents. Upload your document and start
        asking it questions simple as that
      </p>
      <div className=" flex flex-row gap-4 mt-10">
        <Button size="lg">Get started</Button>
        <Button size="lg" variant="secondary">
          View Demo
        </Button>
      </div>

      <div className=" mx-auto max-w-6xl w-full px-6 lg:px-8">
        <div className=" mt-16 w-full flow-root sm:mt-24">
          <div className=" -m-2 rounded-xl w-full h-[20rem] md:h-[30rem] lg:h-[40rem] bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
            <Image
              src="/dashboard.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                height: "100%",
                width: "100%",
                // borderTopLeftRadius: 10,
                // borderTopRightRadius: 10,
              }}
              alt="dashboardPreview"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
