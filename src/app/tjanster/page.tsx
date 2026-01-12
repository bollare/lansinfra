import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import CTA from '../components/cta'
export default function AboutPage() {
  return (
    <>
    <main>
        <section className='py-5 position-relative overflow-hidden' style={{backgroundColor:"#fbf3f0"}}>
          <div className='container'>
            <div className='row align-items-center mb-5'>
              <div className='col-lg-7 mt-4 mt-lg-0'>
                <h1 className='fs-1'>Våra tjänster</h1>
                <p style={{maxWidth:"650px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore eum quibusdam incidunt maiores quaerat nam reprehenderit vitae delectus tempora.</p>
                <p className='mb-0' style={{maxWidth:"650px"}}>Magni quam amet quaerat mollitia sunt ipsam beatae aspernatur aut tenetur tempore, omnis assumenda dignissimos blanditiis doloremque, ducimus dolorem possimus quod facere! Doloremque expedita molestias obcaecati dignissimos dolorum quibusdam id enim ut eaque, laboriosam, tenetur, nihil quaerat culpa assumenda quam eligendi officia.</p>
              </div>
              <div className='col-lg-5 order-first order-lg-last'>
                <img src="images/områdesskydd-grafik.jpg" className='img-fluid w-100' alt="" style={{maxHeight:"300px", objectFit:"cover"}}/>
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
        <section className='py-sm-5 py-4 position-relative overflow-hidden'>
          <div className='container mb-5'>
            <div className='row align-items-center mb-4 mb-lg-5 g-4 g-lg-5'>
              <div className='col-xl-auto col-lg-6 order-last'>
                <h2 className='fs-3'>Tjänst 1</h2>
                <p style={{maxWidth:"650px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore eum quibusdam incidunt maiores quaerat nam reprehenderit vitae delectus tempora.</p>
                <p className='mb-0' style={{maxWidth:"650px"}}>Magni quam amet quaerat mollitia sunt ipsam beatae aspernatur aut tenetur tempore, omnis assumenda dignissimos blanditiis doloremque, ducimus dolorem possimus quod facere! Doloremque expedita molestias obcaecati dignissimos dolorum quibusdam id enim ut eaque, laboriosam, tenetur, nihil quaerat culpa assumenda quam eligendi officia.</p>
              </div>
              <div className='col-xl col-lg-6'>
                <img src="images/event_2.webp" style={{maxHeight:"300px", objectFit:"cover"}} className='img-fluid w-100' alt="" />
              </div>
            </div>
            <div className='row align-items-center my-4 my-lg-5 g-4 g-lg-5'>
              <div className='col-xl-auto col-lg-6 order-last order-lg-first'>
                <h2 className='fs-3'>Tjänst 2</h2>
                <p style={{maxWidth:"650px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore eum quibusdam incidunt maiores quaerat nam reprehenderit vitae delectus tempora.</p>
                <p className='mb-0' style={{maxWidth:"650px"}}>Magni quam amet quaerat mollitia sunt ipsam beatae aspernatur aut tenetur tempore, omnis assumenda dignissimos blanditiis doloremque, ducimus dolorem possimus quod facere! Doloremque expedita molestias obcaecati dignissimos dolorum quibusdam id enim ut eaque, laboriosam, tenetur, nihil quaerat culpa assumenda quam eligendi officia.</p>
              </div>
              <div className='col-xl col-lg-6'>
                <img src="images/byggställning.webp" style={{maxHeight:"300px", objectFit:"cover"}} className='img-fluid w-100' alt="" />
              </div>
            </div>
            <div className='row align-items-center my-4 my-lg-5 g-4 g-lg-5'>
              <div className='col-xl-auto col-lg-6 order-last'>
                <h2 className='fs-3'>Tjänst 3</h2>
                <p style={{maxWidth:"650px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore eum quibusdam incidunt maiores quaerat nam reprehenderit vitae delectus tempora.</p>
                <p className='mb-0' style={{maxWidth:"650px"}}>Magni quam amet quaerat mollitia sunt ipsam beatae aspernatur aut tenetur tempore, omnis assumenda dignissimos blanditiis doloremque, ducimus dolorem possimus quod facere! Doloremque expedita molestias obcaecati dignissimos dolorum quibusdam id enim ut eaque, laboriosam, tenetur, nihil quaerat culpa assumenda quam eligendi officia.</p>
              </div>
              <div className='col-xl col-lg-6'>
                <img src="images/grind.jpg" style={{maxHeight:"300px", objectFit:"cover"}} className='img-fluid w-100' alt="" />
              </div>
            </div>
            <div className='row align-items-center my-4 my-lg-5 g-4 g-lg-5'>
              <div className='col-xl-auto col-lg-6 order-last order-lg-first'>
                <h2 className='fs-3'>Tjänst 4</h2>
                <p style={{maxWidth:"650px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore eum quibusdam incidunt maiores quaerat nam reprehenderit vitae delectus tempora.</p>
                <p className='mb-0' style={{maxWidth:"650px"}}>Magni quam amet quaerat mollitia sunt ipsam beatae aspernatur aut tenetur tempore, omnis assumenda dignissimos blanditiis doloremque, ducimus dolorem possimus quod facere! Doloremque expedita molestias obcaecati dignissimos dolorum quibusdam id enim ut eaque, laboriosam, tenetur, nihil quaerat culpa assumenda quam eligendi officia.</p>
              </div>
              <div className='col-xl col-lg-6'>
                <img src="images/områdesskydd-grafik.jpg" style={{maxHeight:"300px", objectFit:"cover"}} className='img-fluid w-100' alt="" />
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
                  fill="#f8f9fa"
                />
            </svg>
          </div>
        </section>
        <section className='pt-4 pt-sm-5 pb-5 mb-lg-4 bg-light'>
          <div className='container'>
            <div className='row g-4 g-lg-5 align-items-center'>
              <div className='col-md-6 h-100'>
                <img className="img-fluid w-100 h-100" style={{objectFit:"cover"}} src="/images/områdesskydd-grafik.jpg" alt="" />
              </div>
              <div className='col-md-6'>
                <h2>Varför välja oss?</h2>
                <p style={{maxWidth:"750px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab neque, libero esse voluptatibus reprehenderit dolores corporis reiciendis ea alias, soluta amet, perferendis id repellendus quod quia earum beatae hic enim optio dicta natus deserunt dolor! Officia aut temporibus nam!</p>
                <p style={{maxWidth:"750px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate laboriosam voluptates, voluptatibus qui ipsa cum nobis voluptas accusantium rem?</p>
                <a href="/om-oss" className='btn btn-dark mt-2'>Läs mer om oss</a>
              </div>
            </div>
          </div>
        </section>
        <CTA></CTA>
    </main>
    </>
  )
}