import Link from 'next/link'
import Image from 'next/image'

export default function CTA() {
  return (
    <section className='position-relative'>
        <div className='position-relative w-100 d-flex align-items-center' style={{minHeight:"300px", backgroundImage:"url('images/stockholm_byggplats_2.webp')", backgroundSize:"cover", backgroundAttachment:"fixed"}}>
            <div className='position-absolute w-100 h-100 bg-dark opacity-50'></div>
            <div className='position-relative container py-5 text-center text-light mb-5'>
                <h2 className='text-white mt-5'>Hör av dig!</h2>
                <p className='mx-auto' style={{maxWidth:"650px"}}>Du är alltid välkommen att höra av dig till oss, oavsett var du befinner dig i processen. Vi hjälper dig mer än gärna att reda ut dina funderingar.</p>
                <a className='btn btn-lansinfra-primary px-3 ms-3 mb-5 shadow shadow-cta' href="/kontakt">Kontakta oss</a>
            </div>
        </div>
        <div className="shape-divider" style={{filter:"flipH", marginBottom:"-1px"}}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path
                d="
                  M0,85
                  C70,110 130,45 210,60
                  C280,75 310,120 380,100
                  C450,80 520,35 600,55
                  C660,70 710,115 780,95
                  C850,75 900,40 980,65
                  C1050,90 1100,120 1180,100
                  C1260,80 1320,50 1440,85
                  L1440,120
                  L0,120
                  Z
                "
                fill="#121010"
              />
          </svg>
      </div>
    </section>
  )
}
