"use client";
import React, { useRef, useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'
import CTA from './components/cta'

export default function HomePage() {
  useEffect(() => {
    const wrapper = document.getElementById("data-bg-target");
    if (!wrapper) return;

    const items = document.querySelectorAll(".card-hover");

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const bg = item.getAttribute("data-bg");
        wrapper.style.backgroundImage = `url(/images/${bg})`;
      });
    });
  }, []);

  return (
    <>
    <main>
        <section className='position-relative d-flex justify-content-center align-items-center pb-5' style={{height:"40vw", backgroundColor:"black",}}>
          <video style={{width:"100vw"}} autoPlay loop muted>
            <source src="/images/lansinfra-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="shape-divider" style={{filter:"flipH", marginBottom:"-1px"}}>
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
                  fill="#ffebe8"
                />
            </svg>
          </div>
        </section>
        
        <section className='pt-4 position-relative overflow-hidden' style={{backgroundColor:"#ffebe8", paddingBottom:"160px !important"}}>
          <div className='container mt-5'>
            <div className='d-flex flex-column flex-lg-row w-100 justify-content-between align-items-lg-end mb-4'>
              <div>
                <h2 className='fs-1'>Våra tjänster</h2>
                <p className='mb-0' style={{maxWidth:"650px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore eum quibusdam incidunt maiores quaerat.</p>
              </div>
              <div className='mt-4 mt-lg-0'>
                <a className='link-lansinfra-orange' href="/om-oss">Läs mer om våra tjänster &#8594;</a>
              </div>
            </div>
            <div className='mt-4 mt-sm-5 rounded-5 overflow-hidden shadow' style={{backgroundImage:"url(/images/stockholm_byggplats.webp)", backgroundSize:"cover", backgroundPosition:"0 20%"}}>
              <div id='data-bg-target' className='p-4 p-md-5 shadow h-100' style={{backgroundSize:"cover", backgroundPosition:"0 20%"}}>
                <div className='row g-4 text-dark my-4 my-sm-5 py-4 py-sm-5'>
                  <div className='col-lg-3 col-sm-6'>
                    <div data-bg="stockholm_byggplats.webp" className='card card-hover card-body p-4 border-0 shadow'>
                      <h3 className='fs-5 mt-3'>Tjänst 1</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa?.</p>
                      <a className='link-lansinfra-orange mt-4' href="">Läs mer &#8594;</a>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-6'>
                    <div data-bg="grind.jpg" className='card card-hover card-body border-0 shadow'>
                      <h3 className='fs-5 mt-3'>Tjänst 2</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa?.</p>
                      <a className='link-lansinfra-orange mt-4' href="">Läs mer &#8594;</a>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-6'>
                    <div data-bg="omradesskydd-grafik.jpg" className='card card-hover card-body border-0 shadow'>
                      <h3 className='fs-5 mt-3 '>Tjänst 3</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa?.</p>
                      <a className='link-lansinfra-orange mt-4' href="">Läs mer &#8594;</a>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-6'>
                    <div data-bg="event.webp" className='card card-hover card-body border-0 shadow'>
                      <h3 className='fs-5 mt-3'>Tjänst 4</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa?.</p>
                      <a className='link-lansinfra-orange mt-4' href="">Läs mer &#8594;</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-divider" style={{filter:"flipH", marginBottom:"-1px"}}>
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
                  fill="#ffff"
                />
            </svg>
          </div>
        </section>

        <section className='pt-4 pt-sm-5 pb-5 mb-lg-4'>
          <div className='container my-5'>
            <div className='row g-4 g-lg-5 align-items-center'>
              <div className='col-md-6 h-100'>
                <img className="img-fluid w-100 h-100" style={{objectFit:"cover"}} src="/images/omradesskydd-grafik.jpg" alt="" />
              </div>
              <div className='col-md-6'>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p style={{maxWidth:"750px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab neque, libero esse voluptatibus reprehenderit dolores corporis reiciendis ea alias, soluta amet, perferendis id repellendus quod quia earum beatae hic enim optio dicta natus deserunt dolor! Officia aut temporibus nam!</p>
                <p style={{maxWidth:"750px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate laboriosam voluptates, voluptatibus qui ipsa cum nobis voluptas accusantium rem?</p>
                <a href="/om-oss" className='link-lansinfra-orange mt-2'>Läs mer om oss &#8594;</a>
              </div>
            </div>
          </div>
        </section>

        <div className='position-relative w-100 d-flex align-items-center my-5' style={{minHeight:"600px", backgroundImage:"url('/images/stockholm_byggplats_2.webp')", backgroundSize:"cover", backgroundPosition:"100% 50%", backgroundAttachment:"fixed"}}>
          <div className='position-absolute w-100 h-100 bg-dark opacity-50'></div>
          <div className='position-relative container py-5 text-center text-light d-flex flex-column align-items-center'>
              <h2 className='text-white fs-1 mb-4' style={{maxWidth:"1000px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, soluta!</h2>
              <div className='mx-auto fs-5 text-white' style={{maxWidth:"900px", WebkitTextStroke:"0.5px"}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque impedit corrupti. Cumque, aliquid ipsam. Sapiente quasi dolorum provident nihil ipsam quibusdam commodi praesentium.</p>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa delectus, ullam minima optio architecto quasi quidem excepturi?</p>
              </div>
          </div>
          <div className="shape-divider" style={{filter:"flipH", marginBottom:"-5px"}}>
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
        </div>

        <section className='pt-4 pt-sm-5 pb-5 my-lg-4'>
          <div className='container'>
            <h2>Senaste på Länsinfra</h2>
              <p className='mb-0' style={{maxWidth:"650px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore eum quibusdam incidunt maiores quaerat.</p>            
              <div className='mt-4'>
              <Swiper
                slidesPerView={1}

                breakpoints={{
                  767: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}

                spaceBetween={0}
                freeMode={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                
                modules={[FreeMode, Pagination, Navigation]}
              >
                <SwiperSlide>
                  <div className='p-5'>
                    <div data-bg="event.webp" className='card card-hover card-body border-0 shadow'>
                      <img src="/images/event.Webp" className='img-fluid' alt="" style={{objectFit:"cover", maxHeight:"200px"}} />
                      <h3 className='fs-5 mt-3'>Lorem, ipsum dolor.</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa?.</p>
                      <a className='link-lansinfra-orange my-4' href="">Läs mer &#8594;</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='p-5'>
                    <div data-bg="event.webp" className='card card-hover card-body border-0 shadow'>
                      <img src="/images/event.Webp" className='img-fluid' alt="" style={{objectFit:"cover", maxHeight:"200px"}} />
                      <h3 className='fs-5 mt-3'>Lorem ipsum dolor sit.</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa?.</p>
                      <a className='link-lansinfra-orange my-4' href="">Läs mer &#8594;</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='p-5'>
                    <div data-bg="event.webp" className='card card-hover card-body border-0 shadow'>
                      <img src="/images/event.Webp" className='img-fluid' alt="" style={{objectFit:"cover", maxHeight:"200px"}} />
                      <h3 className='fs-5 mt-3'>Lorem ipsum dolor sit amet.</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.?.</p>
                      <a className='link-lansinfra-orange my-4' href="">Läs mer &#8594;</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='p-5'>
                    <div data-bg="event.webp" className='card card-hover card-body border-0 shadow'>
                      <img src="/images/event.Webp" className='img-fluid' alt="" style={{objectFit:"cover", maxHeight:"200px"}} />
                      <h3 className='fs-5 mt-3'>Lorem ipsum dolor sit amet consectetur.</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                      <a className='link-lansinfra-orange mt-4' href="">Läs mer &#8594;</a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        
        <section className='p-5 mb-4 position-relative overflow-hidden d-flex align-items-center justify-content-center'>
          <div className='row g-4 position-absolute'>
            <div className='col-6 col-lg-4'>
              <img className='img-fluid' src="/images/arbetsplats-1920x1280.jpg" style={{minHeight:"350px", objectFit:"cover"}} alt="" />
            </div>
            <div className='col-6 col-lg-4'>
              <img className='img-fluid' src="/images/arbetsplats-1920x1280.jpg" style={{minHeight:"350px", objectFit:"cover"}} alt="" />
            </div>
            <div className='col-6 col-lg-4'>
              <img className='img-fluid' src="/images/arbetsplats-1920x1280.jpg" style={{minHeight:"350px", objectFit:"cover"}} alt="" />
            </div>
            <div className='col-6 col-lg-4'>
              <img className='img-fluid' src="/images/arbetsplats-1920x1280.jpg" style={{minHeight:"350px", objectFit:"cover"}} alt="" />
            </div>
            <div className='col-6 col-lg-4'>
              <img className='img-fluid' src="/images/arbetsplats-1920x1280.jpg" style={{minHeight:"350px", objectFit:"cover"}} alt="" />
            </div>
            <div className='col-6 col-lg-4'>
              <img className='img-fluid' src="/images/arbetsplats-1920x1280.jpg" style={{minHeight:"350px", objectFit:"cover"}} alt="" />
            </div>
          </div>
          <div className='position-relative'>
            <div className='p-5 bg-white rounded-5 shadow text-center' style={{maxWidth:"650px"}}>
              <h2>Upptäck våra projekt</h2>
              <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque non aspernatur. Fuga natus ratione, eaque corporis nulla tenetur aspernatur.</p>
              <a className='link-lansinfra-orange mt-5' href="">Läs mer om våra projekt &#8594;</a>
            </div>
          </div>
        </section>
        <CTA></CTA>
    </main>
    </>
  )
}