import $ from 'jquery'
import { Swiper, Autoplay, Pagination, Navigation } from 'swiper'
import MicroModal from 'micromodal'

window.jQuery = $
window.$ = $

Swiper.use([Autoplay, Navigation, Pagination]);

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	MicroModal.init({

	})

	function humburger() {
		$(".menu-burger").click(function () {
			$(".mobile-menu").toggleClass("mobile-menu--active");
		});
	}

	humburger()

	$("a.menu__item").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	})

	const swiperCollaborating = new Swiper('.swiper-collaborating', {
		speed: 1000,
		slidesPerView: 4,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 4,
				spaceBetween: 40
			}
		}
	})

	const swiperThank = new Swiper('.swiper-thank', {
		slidesPerView: 6,
		pagination: {
			el: '.swiper-pagination',
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		scrollbar: {
			el: '.swiper-scrollbar',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 40
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 30
			},
			992: {
				slidesPerView: 5,
				spaceBetween: 30
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 40
			}
		}
	})

})
