import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-white shadow-sm" style={{zIndex:"9999"}}>
        <div className="container py-2">
          <div className='d-flex align-items-center'>
            <Image className='me-1' src="/images/lansinfra-logo-icon.png" height={36} width={30} alt="" />
            <div className='fw-bold mt-1' style={{lineHeight:"13px", fontSize:"10px"}}>
              <span className='fs-4 text-dark'>LänsInfra AB</span>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Hem</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tjanster">Tjänster</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/om-oss">Om oss</a>
              </li>
            </ul>
            <a className='btn btn-lansinfra-primary py-1 px-3 ms-2' href="/kontakt">Kontakt</a>
          </div>
        </div>
      </nav>
  )
}
