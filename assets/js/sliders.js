document.addEventListener("DOMContentLoaded", () => {
      let sliders =document.querySelectorAll('.product__slider')
    if(sliders.length) {
 let productSlider = new Swiper(".product__slider .slider", {
            slidesPerView: 'auto',
            // centeredSlides: true,
            //  spaceBetween: 8,
            // passiveListeners: true,
            grabCursor: true,
            observeParents: true,
            breakpoints: {
                1024: {
                
                    // spaceBetween: 15,
                    navigation: {
                        nextEl: '.product__slider .slider-nav-arrow--next',
                        prevEl: '.product__slider .slider-nav-arrow--prev',
            },
                },
            },
            
        
            })
            let curSlider = document.querySelector('.product__slide.current')
            let arrSlides= [...document.querySelectorAll('.product__slide')]
            let curIndex = arrSlides.indexOf(curSlider)
          
            productSlider.slideTo(curIndex)
           
    }
       
})

