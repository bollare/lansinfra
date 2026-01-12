import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='container'>
      <footer className="d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-md-start py-3 my-4 gap-1">
        <div className='col-md-4 mb-0 d-flex flex-column order-md-1'>
          <p className="d-none d-md-inline fw-bold mb-2">
            © 2025 LänsInfra AB
          </p>
          <span className='fs-sm mb-1'>Org.nr: 55XXXX-XXXX</span>
          <a className='mb-1 nav-link fs-sm' href="mailto:info@länsinfra.se">info@lansinfra.se</a>
          <a className='nav-link fs-sm' href="tel:0701234567">070 123 45 67</a>
        </div>

        <a href='/' className='d-flex align-items-center order-first order-md-2 mb-4 mb-md-0 text-decoration-none'>
          <Image className='me-2' src="/images/lansinfra-logo-icon.png" height={30} width={25} alt="" />
          <div className='fw-bold mt-1' style={{lineHeight:"13px", fontSize:"10px"}}>
            <span className='fs-5 text-dark'>LänsInfra AB</span>
          </div>
        </a>

        <ul  className="nav col-md-4 flex-wrap flex-column flex-md-row justify-content-md-end order-md-3 mt-4 mt-md-0 gap-3">
          <li  className="nav-item">
            <a href="/" className="nav-link p-0">
              Hem
            </a>
          </li>
          <li  className="nav-item">
            <a href="/tjanster"  className="nav-link p-0">
              Tjänster
            </a>
          </li>
          <li  className="nav-item">
            <a href="/om-oss"  className="nav-link p-0">
              Om oss
            </a>
          </li>
          <li  className="nav-item">
            <a href="/kontakt"  className="nav-link p-0">
              Kontakt
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
