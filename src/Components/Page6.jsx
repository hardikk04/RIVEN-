import React from "react";
import LeftImg from "./LeftImg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Page6() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page6",
        start: "top 50%",
        end: "top 0",
        scrub: 1,
      },
    });
    tl.from(".page6-text", {
      opacity: 0,
    });
  });
  return (
    <div className="page6 w-full h-[100vh] px-[2vw] pt-[3vw] flex">
      <LeftImg img={"/images/last.avif"}></LeftImg>
      <div className="page6-right w-1/2 h-full text-white flex justify-center items-center  flex-col px-[4vw]">
        <h1 className="page6-text text-[6vw] uppercase font-[700] leading-none text-center">
          LET'S CREATE TOGETHER
        </h1>
        <div
          onMouseEnter={() => {
            gsap.to(".t1", {
              top: "-50%",
            });

            gsap.to(".t2", {
              top: "50%",
            });
          }}
          onMouseLeave={() => {
            gsap.to(".t1", {
              top: "50%",
            });

            gsap.to(".t2", {
              top: "120%",
            });
          }}
          className="btn mx-auto mt-4 border relative w-fit  border-zinc-500 rounded-full h-[1.1vw] py-6 px-20 flex justify-center items-center flex-col overflow-hidden"
        >
          <h3 className="t1 text-[.8vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap  font-[500]">
            START
          </h3>
          <h3 className="t2 text-[.8vw] absolute top-[120%] left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap  font-[500]">
            START
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Page6;
