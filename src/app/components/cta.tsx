import Link from 'next/link'
import Image from 'next/image'

export default function CTA() {
  return (
    <section>
        <div className='position-relative w-100 d-flex align-items-center' style={{minHeight:"300px", backgroundImage:"url('images/stockholm_byggplats_2.webp')", backgroundSize:"cover", backgroundPosition:"100% 75%"}}>
            <div className='position-absolute w-100 h-100 bg-dark opacity-50'></div>
            <div className='position-relative container py-5 text-center text-light'>
                <h2 className='text-white'>Hör av dig!</h2>
                <p className='mx-auto' style={{maxWidth:"650px"}}>Du är alltid välkommen att höra av dig till oss, oavsett var du befinner dig i processen. Vi hjälper dig mer än gärna att reda ut dina funderingar.</p>
                <a className='btn btn-lansinfra-primary px-3 ms-3' href="/kontakt">Kontakta oss</a>
            </div>
        </div>
    </section>
  )
}
