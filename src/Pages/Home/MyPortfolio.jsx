import data from '../../data/index.json'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

export default function MyPortfolio () {
  const Portref = useRef(null)

  useEffect(() => {
    const Port = Portref.current

    const onCompleteAnimation = () => {
      // Setelah animasi selesai, atur properti CSS kembali ke nilai semula
      gsap.set(Port, { x: 0, opacity: 1, position: 'static', zIndex: 'auto' })
    }

    // Hentikan animasi sebelumnya jika ada
    gsap.killTweensOf(Port)

    gsap.fromTo(
      Port,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        position: 'static',
        zIndex: 'auto',
        onComplete: onCompleteAnimation,
        scrollTrigger: {
          id: 'MyPortfolio',
          trigger: Port,
          start: 'top 60%',
          toggleActions: 'play none none none',
          markers: false
        }
      }
    )
  }, [])

  return (
    <section className='portfolio--section' id='MyPortfolio'>
      <div className='portfolio--container-box'>
        <div className='portfolio--container'>
          <p className='sub--title'>Recent Projects</p>
          <h2 className='section--heading'>My Portfolio</h2>
        </div>
        <div className='button--portfolio'>
          <a href='https://drive.google.com/drive/folders/1w_M9brVHHvly9LYo8MNJluTHlVwEVAac?usp=sharing'>
            <button className='btn btn-github'>
              <svg
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                width='25px'
                height='25px'
                fill='currentColor'
              >
                <title>Google Drive</title>
                <path d='M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z' />
              </svg>
              More Projects
            </button>
          </a>

          <a href='https://github.com/Xskyis'>
          <button className='btn btn-github'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              class='bi bi-github'
              viewBox='0 0 16 16'
            >
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
            Visit My GitHub
          </button>
          </a>
        </div>
      </div>
      <div className='portfolio--section--container' ref={Portref}>
        {data?.portfolio?.map((item, index) => (
          <div key={index} className='portfolio--section--card'>
            <div className='portfolio--section--img'>
              <img src={item.src} alt='Placeholder' />
            </div>
            <div className='portfolio--section--card--content'>
              <div>
                <h3 className='portfolio--section--title'>{item.title}</h3>
                <p className='text-md'>{item.description}</p>
              </div>
              <p className='text-sm portfolio--link'>
                {item.link}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 20 19'
                  fill='none'
                >
                  <path
                    d='M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z'
                    stroke='currentColor'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
