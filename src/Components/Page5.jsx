import React from "react";
import Img from "./Img";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Page5() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page5",
        start: "top 100%",
        end: "top  0",
        scrub: 1,
      },
    });
    tl.from(".page5-text", {
      opacity: 0,
    }).from(".page5-para", {
      opacity: 0,
    }).from(".imgs>.img", {
      opacity: 0,
      stagger: 0.1,
    });
  });
  return (
    <div className="page5 w-full relative text-white px-[2vw]">
      <div className="page5-text flex flex-col justify-center items-center mt-[4vw]">
        <h3 className="text1 text-[.7vw] font-[600]">FEATURED WORK:</h3>
        <h1 className="page5-para text-4xl w-[30%] text-center mt-5 font-[700]">
          We awaken your wonder... one project at a time.
        </h1>
      </div>
      <div className="imgs flex justify-between gap-5 mt-[2vw]">
        <Img src={"/images/d1.jpg"}></Img>
        <Img src={"/images/d2.jpg"}></Img>
        <Img src={"/images/d3.jpg"}></Img>
      </div>
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
        className="btn m-auto mt-4 border relative w-fit  border-zinc-500 rounded-full h-[1.1vw] py-6 px-20 flex justify-center items-center flex-col overflow-hidden"
      >
        <h3 className="t1 text-[.8vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap  font-[500]">
          MORE WORKS
        </h3>
        <h3 className="t2 text-[.8vw] absolute top-[120%] left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap  font-[500]">
          MORE WORKS
        </h3>
      </div>
    </div>
  );
}

export default Page5;
