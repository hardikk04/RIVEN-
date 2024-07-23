import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Page3() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        start: "top 70%",
        end: "top 30%",
        // markers: true,
        scrub: 1,
      },
    });
    tl.from(".heading", {
      opacity: 0,
      y: 10,
    });

    tl.from(".para1", {
      opacity: 0,
      y: 10,
    });

    tl.from(".para2", {
      opacity: 0,
      y: 10,
    });

    tl.from(".city", {
      opacity: 0,
      y: 10,
    });

    tl.from(".btn", {
      opacity: 0,
      y: 10,
    });
  });

  return (
    <div className="page3 w-full h-[65vh] flex items-center flex-col text-white">
      <h3 className="heading text-sm font-[600]">CREATIVE MAKERS</h3>
      <h1 className="para1 text-4xl w-[30%] text-center mt-5 font-[700]">
        We are a creative agency focused on digital production.
      </h1>
      <h1 className="para2 text-4xl w-[33%] text-center mt-8 font-[700]">
        Passionate about technology and creativity, we push the boundaries
        further to transform every digital creation into an immersive
        experience, aiming to amaze you as much as we are.
      </h1>
      <div className="city flex justify-center items-center my-8">
        <img
          className="h-[2.5vh] w-[2.5vh] object-cover"
          src="/images/swiss.png"
          alt=""
        />
        <h3 className="text-[.6vw] font-[600]">BASED IN GENEVA</h3>
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
        className="btn border relative border-zinc-500 rounded-full h-[1.1vw] py-6 px-20 flex justify-center items-center flex-col overflow-hidden"
      >
        <h3 className="t1 text-[.8vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap  font-[500]">
          READ MORE
        </h3>
        <h3 className="t2 text-[.8vw] absolute top-[120%] left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap  font-[500]">
          READ MORE
        </h3>
      </div>
    </div>
  );
}

export default Page3;
