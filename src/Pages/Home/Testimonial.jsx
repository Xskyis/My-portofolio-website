import data from "../../data/index.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

//import tilt from 'tilt.js'
import Tilt from "react-parallax-tilt";

export default function Testimonial() {
  const testimonial = useRef(null);

  useEffect(() => {
    const contents = testimonial.current;

    const onCompleteAnimation = () => {
      // Setelah animasi selesai, atur properti CSS kembali ke nilai semula
      gsap.set(contents, { x: 0, opacity: 1, position: "static", zIndex: "auto" });
    };

    // Hentikan animasi sebelumnya jika ada
    gsap.killTweensOf(contents);

    gsap.fromTo(
      contents,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.2,
        position: "static",
        zIndex: "auto",
        onComplete: onCompleteAnimation,
        scrollTrigger: {
          id: "testimonial",
          trigger: contents,
          start: "top 40%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );
  }, []);
  
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Experience</p>
          <h2 className="sections--heading">Internship Or Work Experience</h2>
        </div>
      </div>
      <div className="portfolio--section--container" ref={testimonial}>
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
              <h2>
                {item.type}
              </h2>
              <h3>
                {item.waktu}
              </h3>
            </div>
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
