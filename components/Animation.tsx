'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Animation = () => {
  useGSAP(() => {
    gsap.to(".plv", { y: 128, delay: 0.5, stagger: 0.1, yoyo: true, ease: "elastic.inOut", repeat: -1 });
    gsap.to(".plv2", { rotation: -12, delay: 1.5, duration: 1, yoyo: true, ease: "elastic.inOut", repeat: -1 });
  });

  return (
    <>
      <section className="flex justify-center z-40">
        <div className="plv text-9xl text-p400">p</div>
        <div className="plv text-9xl text-p600">u</div>
        <div className="plv text-9xl text-p900">l</div>
        <div className="plv text-9xl text-p900">v</div>
        <div className="plv text-9xl text-p600">e</div>
        <div className="plv text-9xl text-p400">r</div>
      </section>

      <section className="flex justify-center">
        <div className="plv2 text-9xl text-p400">pulver</div>
      </section>
    </>
  );
};

export default Animation;
