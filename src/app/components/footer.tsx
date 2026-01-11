import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='container'>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div className='col-md-4 mb-0 d-flex flex-column'>
          <p className="fw-bold">
            © 2025 LänsInfra AB
          </p>
          <a className='mb-1 nav-link fs-sm' href="mailto:info@länsinfra.se">info@lansinfra.se</a>
          <a className='nav-link fs-sm' href="tel:0701234567">070 123 45 67</a>
        </div>

        <div className='d-flex align-items-center'>
          <Image className='me-2' src="/images/lansinfra-logo-icon.png" height={30} width={25} alt="" />
          <div className='fw-bold mt-1' style={{lineHeight:"13px", fontSize:"10px"}}>
            <span className='fs-5 text-dark'>LänsInfra AB</span>
          </div>
        </div>

        <ul  className="nav col-md-4 justify-content-end">
          <li  className="nav-item">
            <a href="/" className="nav-link">
              Hem
            </a>
          </li>
          <li  className="nav-item">
            <a href="/tjanster"  className="nav-link">
              Tjänster
            </a>
          </li>
          <li  className="nav-item">
            <a href="/om-oss"  className="nav-link">
              Om oss
            </a>
          </li>
          <li  className="nav-item">
            <a href="/kontakt"  className="nav-link">
              Kontakt
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
