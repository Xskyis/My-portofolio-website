import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

export default function ContactMe() {
    const contact = useRef(null)

    useEffect(() => {
        const contents = contact.current

        const onCompleteAnimation = () => {
            // Setelah animasi selesai, atur properti CSS kembali ke nilai semula
            gsap.set(contents, { x: 0, opacity: 1, position: 'static', zIndex: 'auto' })
        }

        // Hentikan animasi sebelumnya jika ada
        gsap.killTweensOf(contents)

        gsap.fromTo(
            contents,
            { y: 50, opacity: 0 },
            {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.4,
            position: 'static',
            zIndex: 'auto',
            onComplete: onCompleteAnimation,
            scrollTrigger: {
                id: 'Contact',
                trigger: contents,
                start: 'top 40%',
                toggleActions: 'play none none none',
                markers: false
            }
            }
        )
    }, [])

    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
           For any inquiries, Or just to say hello, get in touch with me.
          </p>
        </div>
        <form className="contact--form--container" ref={contact}>
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Phone-Number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form>
      </section>
    );
  }
  