import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Page1() {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(".text-loop>h1", {
      top: "-100%",
      duration: 1.5,
    })
      .to(".text-loop>h1", {
        top: "-200%",
        duration: 1.5,
      })
      .to(".text-loop>h1", {
        top: "-300%",
        duration: 1.5,
      })
      .to(".text-loop>h1", {
        top: "-400%",
        duration: 1.5,
      })
      .to(".text-loop>h1", {
        top: "0%",
        duration: 3,
      });
  });

  return (
    <div className="page1 w-full h-[100vh]  text-white flex">
      <div className="page1-left w-1/2 h-full flex flex-col justify-center items-center">
        <h1 className="text-[8vw] uppercase font-[700] leading-none">
          HERE TO
        </h1>
        <div className="text-loop h-[8vw] overflow-hidden text-center mt-[-1vw] ">
          <h1 className="relative text-[8vw] uppercase font-[700] leading-none">
            Dream
          </h1>
          <h1 className="relative text-[8vw] uppercase font-[700] leading-none">
            Create
          </h1>
          <h1 className="relative text-[8vw] uppercase font-[700] leading-none">
            Develop
          </h1>
          <h1 className="relative text-[8vw] uppercase font-[700] leading-none">
            Amaze
          </h1>
          <h1 className="relative text-[8vw] uppercase font-[700] leading-none">
            Explore
          </h1>
        </div>
        <p className="mt-2 text-sm font-[600]">
          DIGITAL BUILDER IN SWITZERLAND
        </p>
      </div>
      <div className="page1-right w-1/2 h-full overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="/videos/rivair.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
}

export default Page1;
