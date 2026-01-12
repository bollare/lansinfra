import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'
import CTA from './components/cta'
export default function HomePage() {
  return (
    <>
    <main>
        <section className='position-relative' style={{height:"500px", backgroundImage:"url(/images/arbetsplats-1920x1280.jpg)", backgroundSize:"cover", overflow:"hidden", backgroundAttachment:"fixed"}}>
          <div className='position-absolute w-100 h-100 opacity-50 bg-dark'></div>
          <div className='container position-relative h-100 d-flex justify-content-center align-items-start flex-column pb-5'>
            <h1 className='text-white mb-3' style={{maxWidth:"650px"}}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p className='lead text-white' style={{maxWidth:"650px"}}>Soluta commodi veniam, aut cum reiciendis quaerat laborum vel dolores. Dolore, tenetur!</p>
            <a className='btn btn-lansinfra-primary btn-lg mt-2' href="">Kontakta oss</a>
          </div>
          <div className="shape-divider" style={{marginBottom:"-5px"}}>
              <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
              >
                <path
                  d="
                    M0,80
                    C120,100 240,40 360,50
                    C480,60 600,110 720,100
                    C840,90 960,40 1080,50
                    C1200,60 1320,100 1440,90
                    L1440,120
                    L0,120
                    Z
                  "
                  fill="#fbf3f0"
                />
              </svg>
            </div>
        </section>
        <section className='py-sm-5 pt-4 pb-3 position-relative overflow-hidden' style={{backgroundColor:"#fbf3f0"}}>
          <div className='container'>
            <div className='d-flex flex-column flex-lg-row w-100 justify-content-between align-items-lg-end mb-4'>
              <div>
                <h2 className='fs-1'>Våra tjänster</h2>
                <p className='mb-0' style={{maxWidth:"650px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore eum quibusdam incidunt maiores quaerat nam reprehenderit vitae delectus tempora.</p>
              </div>
              <div className='mt-4 mt-lg-0'>
                <a className='btn btn-dark' href="">Läs mer om våra tjänster</a>
              </div>
            </div>
            
            <div className='row g-4 pb-5 mb-5 text-dark'>
              <div className='col-lg-3 col-sm-6'>
                <div className='card card-body border-0 shadow'>
                  <img style={{objectFit:"cover", width:"100%;", maxHeight:"200px;"}} src="/images/grind.jpg" alt="" />
                  <h3 className='fs-4 mt-3'>Tjänst 1</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa? Cupiditate eveniet obcaecati odio aliquam.</p>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6'>
                <div className='card card-body border-0 shadow'>
                  <img style={{objectFit:"cover", width:"100%;", maxHeight:"200px;"}} src="/images/event.jpg" alt="" />
                  <h3 className='fs-4 mt-3'>Tjänst 2</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa? Cupiditate eveniet obcaecati odio aliquam.</p>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6'>
                <div className='card card-body border-0 shadow'>
                  <img style={{objectFit:"cover", width:"100%;", maxHeight:"200px;"}} src="/images/områdesskydd-grafik.jpg" alt="" />
                  <h3 className='fs-4 mt-3 '>Tjänst 3</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa? Cupiditate eveniet obcaecati odio aliquam.</p>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6'>
                <div className='card card-body border-0 shadow'>
                  <img style={{objectFit:"cover", width:"100%;", maxHeight:"200px;"}} src="/images/event.jpg" alt="" />
                  <h3 className='fs-4 mt-3'>Tjänst 4</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa? Cupiditate eveniet obcaecati odio aliquam.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-divider" style={{filter:"flipH"}}>
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
                  fill="#ffffff"
                />
            </svg>
          </div>
        </section>
        <section className='pt-4 pt-sm-5 pb-5 mb-lg-4'>
          <div className='container'>
            <div className='row g-4 g-lg-5 align-items-center'>
              <div className='col-md-6 h-100'>
                <img className="img-fluid w-100 h-100" style={{objectFit:"cover"}} src="/images/områdesskydd-grafik.jpg" alt="" />
              </div>
              <div className='col-md-6'>
                <h2>Varför välja oss?</h2>
                <p style={{maxWidth:"750px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab neque, libero esse voluptatibus reprehenderit dolores corporis reiciendis ea alias, soluta amet, perferendis id repellendus quod quia earum beatae hic enim optio dicta natus deserunt dolor! Officia aut temporibus nam!</p>
                <p style={{maxWidth:"750px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate laboriosam voluptates, voluptatibus qui ipsa cum nobis voluptas accusantium rem?</p>
                <a href="" className='btn btn-dark mt-2'>Läs mer om oss</a>
              </div>
            </div>
          </div>
        </section>
        <CTA></CTA>
    </main>
    </>
  )
}