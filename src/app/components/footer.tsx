import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-dark py-5">
      <div className='container text-white'>
        <div className='w-100 d-flex justify-content-between'>
          <div className='d-flex flex-column align-items-start' style={{maxWidth:"450px"}}>
            <img className='mb-3' style={{marginLeft:"-4px"}} src="/images/lansinfra-logo-v-white.png" width={200} alt="LänsInfra AB" />
            <span className='fs-sm mb-3'>Org.nr: 55XXXX-XXXX</span>
            <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, quibusdam accusantium consequuntur consequatur pariatur.</p>
          </div>
          <div>
            <h6 className='text-white fw-bold'>Navigera</h6>
            <ul className='d-flex flex-column gap-2 ps-0 mb-4' style={{listStyle:"none"}}> 
              <li><a className='nav-link text-white' href="">Hem</a></li>
              <li><a className='nav-link text-white' href="">Tjänster</a></li>
              <li><a className='nav-link text-white' href="">Om oss</a></li>
              <li><a className='nav-link text-white' href="">Kontakt</a></li>
            </ul>
            <a className='icon mt-4' href=""><img src="/images/linkedinsvg.png" width={32} alt="LinkedIn" /></a>
          </div>
          <div>
            <div className='d-flex flex-column mb-4'>
              <h6 className='text-white fw-bold'>Kontakt</h6>
              <a className='nav-link text-white' href="">070 123 45 67</a>
              <a className='nav-link text-white' href="">info@lanssakerhet.se</a>
            </div>
            <div className='d-flex flex-column'>
              <h6 className='text-white fw-bold'>Kontor</h6>
              <span><span style={{fontSize:"13px"}}>Lärargatan 5,</span> Floby</span>
              <span><span style={{fontSize:"13px"}}>Södra Storgatan 37,</span> Helsingborg</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
