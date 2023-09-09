import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

export default function AboutMe() {
    const img = useRef(null)
    const content = useRef(null)

    useEffect(() => {
        const image = img.current
    
        const onCompleteAnimation = () => {
          // Setelah animasi selesai, atur properti CSS kembali ke nilai semula
          gsap.set(image, { x: 0, opacity: 1, position: 'static', zIndex: 'auto' })
        }
    
        // Hentikan animasi sebelumnya jika ada
        gsap.killTweensOf(image)
    
        gsap.fromTo(
          image,
          { x: -50, opacity: 0 },
            {
            x: 0,
            opacity: 1,
            duration: 0.8,
            position: 'static',
            zIndex: 'auto',
            onComplete: onCompleteAnimation,
            scrollTrigger: {
                id: 'AboutMe',
                trigger: image,
                toggleActions: 'play none none none',
                markers: false
            }
            }
        )
      }, [])

        useEffect(() => {
            const contents = content.current
            const image = img.current

            const onCompleteAnimation = () => {
                // Setelah animasi selesai, atur properti CSS kembali ke nilai semula
                gsap.set(contents, { x: 0, opacity: 1, position: 'static', zIndex: 'auto' })
            }

            // Hentikan animasi sebelumnya jika ada
            gsap.killTweensOf(contents)

            gsap.fromTo(
                contents,
                { x: 50, opacity: 0 },
                {
                x: 0,
                opacity: 1,
                duration: 0.8,
                position: 'static',
                zIndex: 'auto',
                onComplete: onCompleteAnimation,
                scrollTrigger: {
                    id: 'AboutMe',
                    trigger: image,
                    start: 'top 80%',
                    toggleActions: "play none none none",
                    markers: false
                }
                }
            )
        }, [])
        
    return (
        <section id="AboutMe" className="about--section">   
            <div className="about--section--img" ref={img}>
                <img src="./img/gw.png" alt="gw"/>
            </div>
            <div className="hero--section--content--box--about--section--box" ref={content}>
                <div className="hero--section--content">
                    <p className="section--title">
                        Hi! 👋  My Name is Achmad Nabil Afgareza
                    </p>
                    <h1 className="skills-section-heading">
                        About Me
                    </h1>
                    <p className="hero--section--description">
                    I'm a student at Telkom Malang vocational high school, I like to explore new things, especially in the world of IT,  currently learning JavaScript, React.js, Node.js, HTML, CSS.
                    </p>
                    <p className="hero--section--description">
                    Besides that I also have ability to design a UI from a website using figma, balanced with my ability to communicate well, work with a team, and adapt easily.
                    </p>
                    <div className="education">
                        <h1 className="skills-section-heading">
                            Education
                        </h1><br />
                        <div className="education--content">
                            <div className="education--content--box">
                                <div className="education--content--box--title">
                                    <h2 className="education--content--box--title--name">
                                        SMK Telkom Shandy Putra Malang
                                    </h2>
                                    <h4>
                                        Software Engineering
                                    </h4>
                                    <p className="education--content--box--title--year">
                                        Juli 2021 - Present
                                    </p><br />
                                    <h4>
                                    Studying Software Engineering and learning how to build software and web applications using various technologies and programming languages.
                                    </h4>
                                    <ul className="hero--section--description">
                                        <li>
                                        Learned fundamentals of programming such as Data Structures, Algorithms, Object Oriented Programming, Functional Programming, and Software Engineering.
                                        </li>
                                        <li>
                                        Learned about web development using HTML, CSS, JavaScript, Express.js, React.js, and Node.js.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}