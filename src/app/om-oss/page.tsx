import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import CTA from '../components/cta'
export default function AboutPage() {
  return (
    <>
    <main>
        <section className='pt-5 position-relative overflow-hidden' style={{backgroundColor:"#fbf4f0"}}>
          <div className='container'>
            <div className='row align-items-center mb-5'>
              <div className='col-lg-7 mt-4 mt-lg-0'>
                <h1 className='fs-1'>Om LänsInfra AB</h1>
                <p style={{maxWidth:"650px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore eum quibusdam incidunt maiores quaerat nam reprehenderit vitae delectus tempora.</p>
                <p className='mb-0' style={{maxWidth:"650px"}}>Magni quam amet quaerat mollitia sunt ipsam beatae aspernatur aut tenetur tempore, omnis assumenda dignissimos blanditiis doloremque, ducimus dolorem possimus quod facere! Doloremque expedita molestias obcaecati dignissimos dolorum quibusdam id enim ut eaque, laboriosam, tenetur, nihil quaerat culpa assumenda quam eligendi officia.</p>
              </div>
              <div className='col-lg-5 order-first order-lg-last'>
                <img src="images/arbetsplats-1920x1280.jpg" className='img-fluid w-100' style={{maxHeight:"300px", objectFit:"cover"}} alt="" />
              </div>
            </div>
            <div className='g-4 row'>
              <div className='col-lg-5 col-md-7'>
                <img className='img-fluid w-100' style={{height:"300px", objectFit:"cover"}} src="images/event_2.webp" alt="" />
              </div>
              <div className='col-lg-3 col-5 d-none d-md-inline'>
                <img className='img-fluid w-100' style={{height:"300px", objectFit:"cover"}} src="images/stockholm_byggplats.webp" alt="" />
              </div>
              <div className='col-4 d-none d-lg-inline'>
                <img className='img-fluid w-100' style={{height:"300px", objectFit:"cover"}} src="images/arbetsplats-1920x1280.jpg" alt="" />
              </div>
              <div className='col-lg-6'>
                <img className='img-fluid w-100' style={{height:"300px", objectFit:"cover", objectPosition:"0% 85%"}} src="images/stockholm_byggplats_2.webp" alt="" />
              </div>
              <div className='col-6 d-none d-lg-inline'>
                <img className='img-fluid w-100' style={{maxHeight:"300px", objectFit:"cover"}} src="images/byggställning.webp" alt="" />
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
                  fill="rgb(255, 255, 255)"
                />
            </svg>
          </div>
        </section>
        <section className='py-4 py-sm-5 bg-white'>
          <div className='container'>
            <h2 className='text-center mb-4 mb-sm-5'>Vad kännetecknar oss?</h2>
            <div className='row g-4 justify-content-center'>
              <div className='col-lg-4 col-md-6'>
                <div className='card card-body border-0 shadow-sm'>
                  <div className='d-flex align-items-center gap-3'>
                  <svg  xmlns="http://www.w3.org/2000/svg" width="64" height="64"  
                    fill="#fd6e01" viewBox="0 0 24 24" >
                    <path d="M20 8h-3V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1v2c0 .38.21.72.55.89.14.07.29.11.45.11.21 0 .42-.07.6-.2L9 15v2c0 1.1.9 2 2 2h3.67l3.73 2.8c.18.13.39.2.6.2.15 0 .31-.04.45-.11A1 1 0 0 0 20 21v-2c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2M6 12H4V4h11v8h-5c-.12 0-.24.03-.35.07-.04.02-.07.04-.11.06-.05.02-.09.04-.14.07L7 14v-1c0-.55-.45-1-1-1m14 5h-1c-.55 0-1 .45-1 1v1l-2.4-1.8a1 1 0 0 0-.6-.2h-4v-3h4c1.1 0 2-.9 2-2v-2h3z"></path>
                  </svg>
                  <h3 className='fs-4'>Tydlig kommunikation</h3>
                  </div>
                  <p>Vi arbetar transparent och strukturerat för att undvika missförstånd. Du ska alltid ha insyn, förstå nästa steg och känna dig lugn genom hela processen.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='card card-body border-0 shadow-sm'>
                  <div className='d-flex align-items-center gap-3'>
                  <svg  xmlns="http://www.w3.org/2000/svg" width="64" height="64"  
                    fill="#fd6e01" viewBox="0 0 24 24" >
                    <path d="M19 8.54V7c0-1.1-.9-2-2-2h-2.55c-.3 0-.58.13-.77.37s-.27.54-.21.83c.05.27.04.54-.05.81-.15.46-.56.83-1.03.94-.48.12-.94.02-1.32-.27a1.51 1.51 0 0 1-.54-1.48c.06-.29-.02-.6-.21-.83S9.85 5 9.55 5H7c-1.1 0-2 .9-2 2v1.54a3.45 3.45 0 0 0-2.89 2.6c-.26 1.07-.02 2.17.64 3.02A3.44 3.44 0 0 0 5 15.46V17c0 1.1.9 2 2 2h2.55c.3 0 .58-.13.77-.37s.27-.54.21-.83q-.03-.15-.03-.3c0-.46.21-.89.57-1.18.37-.29.84-.39 1.32-.27.47.11.87.48 1.02.94q.135.405.06.81c-.06.29.02.6.21.83s.47.37.77.37H17c1.1 0 2-.9 2-2v-1.54a3.45 3.45 0 0 0 2.89-2.6c.26-1.07.02-2.17-.64-3.02A3.44 3.44 0 0 0 19 8.54m.95 3.85a1.474 1.474 0 0 1-1.75 1.08c-.29-.06-.6.02-.83.21s-.37.47-.37.77V17h-1.54a3.45 3.45 0 0 0-2.6-2.89 3.5 3.5 0 0 0-3.02.64A3.44 3.44 0 0 0 8.54 17H7v-2.55c0-.3-.14-.58-.37-.78a.96.96 0 0 0-.83-.2c-.55.12-1.13-.1-1.48-.54-.29-.37-.39-.84-.27-1.32a1.474 1.474 0 0 1 1.75-1.08c.3.06.6-.02.83-.21S7 9.85 7 9.55V7h1.54c.13.89.58 1.69 1.3 2.25.85.67 1.95.9 3.02.64A3.47 3.47 0 0 0 15.46 7H17v2.55c0 .3.14.58.37.78.23.19.54.26.83.2.55-.12 1.13.1 1.48.54.29.37.39.84.27 1.32"></path>
                  </svg>
                  <h3 className='fs-4'>Kvalitativa lösningar</h3>
                  </div>
                  <p>Vi anpassar varje lösning efter dina behov för ett pricksäkert resultat. Vi tar stor glädje i att leverera kvalitet som tillför ett tydligt värde till dig som kund.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='card card-body border-0 shadow-sm'>
                  <div className='d-flex align-items-center gap-3'>
                  <svg  xmlns="http://www.w3.org/2000/svg" width="64" height="64"  
                    fill="#fd6e01" viewBox="0 0 24 24" >
                    <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M4 19V5h16v14z"></path><path d="M13 8h5v2h-5zM8 8.59 6.96 7.54 5.54 8.96 8 11.41l3.46-3.45-1.42-1.42zM13 14h5v2h-5zM8 14.59l-1.04-1.05-1.42 1.42L8 17.41l3.46-3.45-1.42-1.42z"></path>
                  </svg>
                  <h3 className='fs-4'>Effektiv leverans</h3>
                  </div>
                  <p>Vi förstår att din tid är värdefull. Därför arbetar vi effektivt och strukturerat, och är alltid proaktiva om att förebygga hinder och utmaningar i processen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className='py-4 py-sm-5'>
          <div className='container mb-4 mb-lg-5' style={{maxWidth:"650px"}}>
            <h2 className='mb-4'>Vanliga frågor</h2>
            <div className="accordion shadow-sm border-0" id="FAQ">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Fråga #1
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#FAQ">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, neque similique enim itaque voluptas culpa! Nesciunt placeat voluptate totam voluptatem labore ipsam veniam molestiae?
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Fråga #2
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#FAQ">
                  <div className="accordion-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid rem quidem at! Temporibus accusamus rerum dolorum doloremque. Vero nostrum id porro quos, consequatur nihil doloribus voluptatum voluptatibus magnam odit?</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Fråga #3
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#FAQ">
                  <div className="accordion-body">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt ipsum doloribus aut porro dolorum magni, fugiat optio fugit sapiente iste, explicabo accusantium quod amet? Labore cupiditate accusantium autem earum necessitatibus blanditiis corporis! Perferendis, accusamus similique harum tempore quam vel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTA></CTA>
    </main>
    </>
  )
}