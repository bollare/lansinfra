import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='container'>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div className='col-md-4 mb-0 d-flex flex-column'>
          <p className="fw-bold">
            © 2025 Länsinfra AB
          </p>
          <a className='mb-1 link-dark fs-sm' href="mailto:info@länsinfra.se">info@lansinfra.se</a>
          <a className='link-dark fs-sm' href="tel:0701234567">070 123 45 67</a>
        </div>

        <div className='d-flex align-items-center'>
          <Image className='me-2' src="/images/lansinfra-logo-icon.png" height={30} width={25} alt="" />
          <div className='fw-bold text-uppercase mt-1' style={{lineHeight:"13px", fontSize:"10px"}}>
            <span className='fs-5 text-dark'>Länsinfra</span>
          </div>
        </div>

        <ul  className="nav col-md-4 justify-content-end">
          <li  className="nav-item">
            <a href="/" className="nav-link px-2 text-body-secondary">
              Hem
            </a>
          </li>
          <li  className="nav-item">
            <a href="/tjanster"  className="nav-link px-2 text-body-secondary">
              Tjänster
            </a>
          </li>
          <li  className="nav-item">
            <a href="/om-oss"  className="nav-link px-2 text-body-secondary">
              Om oss
            </a>
          </li>
          <li  className="nav-item">
            <a href="/kontakt"  className="nav-link px-2 text-body-secondary">
              Kontakt
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
