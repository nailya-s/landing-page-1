const swiper = new Swiper('.swiper', {

  
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    
    breakpoints: {
        320: {
            slidesPerView: 2,
           
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
        1920: {
            slidesPerView: 5,
            
        }
    },

  });

  const swiperCases = new Swiper('.cases-swiper', {

  
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    
    breakpoints: {
        320: {
            slidesPerView: 1.5,
           
        },
        768: {
            slidesPerView: 1.5,
           
        },
        1920: {
            slidesPerView: 3,
            
        }
    },

  });