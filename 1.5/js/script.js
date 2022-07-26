const slider = document.querySelector('.swiper');

function mobileSlider() {
  document.querySelector('.swiper-pagination').classList.remove('hidden'); 

  myswip = new Swiper(slider, {
    loop:true,
    slideToClickedSlide: false,  
    slidesPerView: 'auto',
    spaceBetween:16,
    slideClass: 'service-logo__slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }); 
  if(window.innerWidth >= 768) {
    myswip.destroy();

    document.querySelector('.swiper-pagination').classList.add('hidden');
  }
}

mobileSlider();

window.addEventListener('resize', mobileSlider );




const serviceShowMore = document.querySelector('.service__show-more');
const service = document.querySelector('.service');
const serviceLogoWrapper = document.querySelector('.service-logo__wrapper');
const serviceLogo = document.querySelector('.service-logo');

serviceShowMore.addEventListener('click', showMore)

const logoData = [
  {
    src: '../img/samsung.png',
    alt: 'Samsung'
  },
  {
    src: '../img/apple.png',
    alt: 'Apple'
  }
]

function createElement (tagName, parent, className, className2 ) {
  let element = document.createElement(tagName);
  parent.appendChild(element);
  element.classList.add(className);
  element.classList.add(className2)
  return element;
};

function deleteEvent () {
  document.querySelector('.dop').remove();
}

function showMore() {
  service.classList.toggle ('service-click');
  serviceLogoWrapper.classList.toggle ('service-logo__wrapper-click');
  serviceLogo.classList.toggle ('service-logo-click');
  serviceShowMore.classList.toggle ('show-more-click');

  if (service.classList.contains('service-click')){
    serviceShowMore.textContent = 'Скрыть'
  } 
  else {
    serviceShowMore.textContent = 'Показать всё'
  }

  if (window.innerWidth >= 1120 && service.classList.contains('service-click')) {
    for (let i=0; i< logoData.length; i++) {
      let div = createElement('div', serviceLogoWrapper, 'service-logo__slide', 'swiper-slide');
      div.classList.add('dop');
      let button = createElement ('button', div, 'company');
      let image = createElement ('img', button, 'company__logo'); 
      image.src = logoData[i].src;
      image.alt = logoData[i].alt;
      serviceShowMore.addEventListener('click', deleteEvent);
    }
  }
}


