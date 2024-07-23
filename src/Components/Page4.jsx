import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import LeftImg from "./LeftImg";

function Page4() {
  useGSAP(() => {
    gsap.from(".page4-right h1,.page4-right h3", {
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page4",
        start: "top 40%",
        end: "top 00%",
        scrub: 1,
        // markers: true,
      },
    });
  });
  return (
    <div className="page4 w-full h-[100vh] flex px-[2vw]">
      <LeftImg img={"/images/img.avif"}></LeftImg>
      <div className="page4-right w-1/2 h-full flex justify-center items-center text-white flex-col">
        <h3 className="text-[.7vw] font-[500]">SERVICES:</h3>
        <h1 className="text-4xl leading-[1.1] font-[700]">Development</h1>
        <h1 className="text-4xl leading-[1.1] font-[700]">Branding</h1>
        <h1 className="text-4xl leading-[1.1] font-[700]">UI/UX</h1>
        <h1 className="text-4xl leading-[1.1] font-[700]">Art direction</h1>
        <h1 className="text-4xl leading-[1.1] font-[700]">Motion design</h1>
        <h1 className="text-4xl leading-[1.1] font-[700]">Maintenance</h1>
        <h1 className="text-4xl leading-[1.1] font-[700]">Design system</h1>
        <h1 className="text-4xl leading-[1.1] font-[700]">
          Audit and security
        </h1>
        <h1 className="text-4xl leading-[1.1] font-[700]">3D</h1>
      </div>
    </div>
  );
}

export default Page4;
