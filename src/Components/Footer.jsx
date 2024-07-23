import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Footer() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".footer",
        start: "top 100%",
        end: "top 50%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.from(".elem", {
      opacity: 0,
      stagger: 0.1,
    });
  });
  return (
    <>
      <div className="footer w-full h-[50vh] px-[2vw] text-white flex gap-[14vw]">
        <div className="elem flex justify-between flex-col">
          <div>
            <h3 className="text-[.7vw] font-[600] mb-[1vw]">NAVIGATE</h3>
            <h1 className="text-5xl font-[700]">HOME</h1>
            <h1 className="text-5xl font-[700]">WORKS</h1>
            <h1 className="text-5xl font-[700]">ABOUT</h1>
            <h1 className="text-5xl font-[700]">CONTACT</h1>
            <h1 className="text-5xl font-[700]">PRODUCTS</h1>
            <h1 className="text-5xl font-[700]">CAREERS</h1>
            <h1 className="text-5xl font-[700]">BLOG</h1>
            <h1 className="text-5xl font-[700]">MY RIVEN</h1>
          </div>
          <h3 className="text-[.7vw] font-[600] mb-[1vw]">EN</h3>
        </div>

        <div className="elem flex justify-between flex-col">
          <div>
            <h3 className="text-[.7vw] font-[600] mb-[1vw]">CONNECT</h3>
            <h1 className="text-5xl font-[700]">INSTAGRAM</h1>
            <h1 className="text-5xl font-[700]">LINKEDIN</h1>
            <h1 className="text-5xl font-[700]">BEHANCE</h1>
          </div>
          <h3 className="text-[.7vw] font-[600] mb-[1vw]">
            © 2024 RIVEN - ALL RIGHTS RESERVED
          </h3>
        </div>

        <div className="elem flex justify-between flex-col">
          <div>
            <h3 className="text-[.7vw] font-[600] mb-[1vw]">OFFICE</h3>
            <h1 className="text-5xl font-[700]">RUE DU RHÔNE 8</h1>
            <h1 className="text-5xl font-[700]">1204 GENÈVE</h1>
          </div>
          <h3 className="text-[.7vw] font-[600] mb-[1vw]">
            RIVEN® IS A REGISTERED TRADEMARK
          </h3>
        </div>
      </div>
    </>
  );
}

export default Footer;
