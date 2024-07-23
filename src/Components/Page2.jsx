import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Page2() {
  useGSAP(() => {
    gsap.from(".page2>img", {
      width: "50%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page2",
        start: "top 100%",
        end: "top 0",
        scrub: 1,
      },
    });
  });
  return (
    <div className="page2 h-[100vh] w-full px-[2vw] py-[4vw] flex justify-center items-center">
      <img
        className="w-full h-full object-cover"
        src="../public/images/oaxaca.png"
        alt=""
      />
    </div>
  );
}

export default Page2;
