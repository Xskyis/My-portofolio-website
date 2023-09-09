import data from "../../data/index.json"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

export default function MySkills(){
    const Skillref = useRef(null)

    useEffect(() => {
        const Sk = Skillref.current
    
        const onCompleteAnimation = () => {
          // Setelah animasi selesai, atur properti CSS kembali ke nilai semula
          gsap.set(Sk, { x: 0, opacity: 1, position: 'static', zIndex: 'auto' })
        }
    
        // Hentikan animasi sebelumnya jika ada
        gsap.killTweensOf(Sk)
    
        gsap.fromTo(
          Sk,
          { x: -50, opacity: 0 },
            {
            x: 0,
            opacity: 1,
            duration: 1,
            position: 'static',
            zIndex: 'auto',
            onComplete: onCompleteAnimation,
            scrollTrigger: {
                id: 'mySkills',
                trigger: Sk,
                start: 'top 80%',
                toggleActions: 'play none none none',
                markers: false
            }
            }
        )
      }, [])

    return (
        <section className="skills--section" id="mySkills">
            <div className="portofolio--container">
                <p className="section--title">
                    My Skills
                </p>
                <h2 className="skills--section--heading">
                    My Expertise
                </h2>
            </div>
            <div className="skills--section--container" ref={Skillref}>
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt="Product Chain"/>
                        </div>
                        <div className="skills-section--card--content">
                            <h3 className="skills--section--title">
                                {item.title}
                            </h3>
                        </div>
                        <div className="skills-section-card-description">
                            <ul>
                                {item.description?.map((item, index) => (
                                    <li key={index} className="li-desc">
                                        {item.desc} <br />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}