import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default function AboutPage() {
  return (
    <>
    <Navbar></Navbar>
    <main>
      <section className='py-5 position-relative overflow-hidden bg-light'>
        <div className='container pb-4 pb-lg-5 mb-5'>
          <div className="row pt-lg-5 pt-4 align-items-start">
            <div className="col-lg-6 col-xl-6">
              <h1>Kontakta oss</h1>

              <p style={{ maxWidth: "700px" }}>
                Har du frågor, funderingar eller vill veta mer om hur vi arbetar?
                Hör gärna av dig till oss så hjälper vi dig vidare och ger dig den
                information du behöver.
              </p>

              <div className="mt-4 mb-4 pb-4 d-flex flex-column align-items-start gap-3">
                <a className="d-block link-lansinfra-orange" href="mailto:info@example.com">
                  info@lansinfra.se
                </a>
                <a className="d-block link-lansinfra-orange" href="tel:000000000">
                  070 123 45 67
                </a>
              </div>

              <div className="row py-4 px-1 g-5 justify-content-center justify-content-sm-start">
                <div className="col-auto d-flex flex-column align-items-center mb-5 gap-2">
                  <img className="img-fluid rounded-circle" style={{ objectFit: "cover", height: "150px", width: "150px" }} src="/images/event.webp" alt="Bild på Fredrik"/>
                  <strong>Fredrik Arwidsson</strong>
                  <a className="link-lansinfra-orange" style={{ fontSize: "11px" }} href="mailto:fredrik@lansinfra.se">
                    fredrik@lansinfra.se
                  </a>
                  <a className="link-lansinfra-orange" href="tel:000000000">
                    00 00 00 00
                  </a>
                </div>

                <div className="col-auto d-flex flex-column align-items-center mb-5 gap-2">
                  <img
                    className="img-fluid rounded-circle bg-white" style={{ objectFit: "cover", height: "150px", width: "150px" }} src="/images/event.jpg" alt="Bild på Taulant"
                  />
                  <strong>Taulant Lami</strong>
                  <a className="link-lansinfra-orange" style={{ fontSize: "11px" }} href="mailto:taulant@lansinfra.se">
                    taulant@lansinfra.se
                  </a>
                  <a className="link-lansinfra-orange" href="tel:000000000">
                    00 00 00 00
                  </a>
                </div>
              </div>

              <h2>Vanliga frågor</h2>

              <div className="accordion shadow-sm border-0 mt-4" id="FAQ">
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

            <div className="mt-5 mt-lg-0 ps-lg-5 ps-xl-0 col-lg-6 col-xl-5 offset-xxl-1">
              <form
                action="/contact-submit"
                method="POST"
                id="contact-form"
                className="bg-white rounded p-3 p-sm-4 shadow sticky-xl-top"
                style={{ top: "100px" }}
              >
                <h2>Skicka ett meddelande</h2>

                <p className="mb-4">
                  Om du inte har möjlighet att kontakta oss direkt kan du skicka ett
                  meddelande via formuläret nedan. Vi återkommer så snart vi kan.
                </p>

                <div className="mb-3">
                  <label htmlFor="contactName" className="form-label fw-semibold">
                    Namn
                  </label>
                  <input id="contactName" name="contactName" type="text" required className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="contactEmail" className="form-label fw-semibold">
                    E-post
                  </label>
                  <input id="contactEmail" name="contactEmail" type="email" required className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="contactPhone" className="form-label fw-semibold">
                    Telefon
                  </label>
                  <input id="contactPhone" name="contactPhone" type="tel" required className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="contactMessage" className="form-label fw-semibold">
                    Meddelande
                  </label>
                  <textarea id="contactMessage" name="contactMessage" required className="form-control" />
                </div>

                <div className="d-block w-100" id="contact-status"></div>

                <button className="btn btn-lansinfra-primary mt-3" type="submit">
                  Skicka meddelande
                </button>
              </form>
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
      
    </main>

    <Footer></Footer>
    </>
  )
}