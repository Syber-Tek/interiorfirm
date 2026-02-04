const navMobile = document.querySelector("#nav-mobile");
const navTrigger = document.querySelector("#nav-trigger");
const navClose = document.querySelector("#nav-close");

const toggleMenu = () => {
	navMobile.classList.toggle("translate-x-0");
	navMobile.classList.toggle("translate-x-full");
};

navTrigger.addEventListener("click", toggleMenu);
navClose.addEventListener("click", toggleMenu);

// Swiper for Projects
const swiperProjects = new Swiper(".swiper-projects", {
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: false,
});

// Swiper for Testimonials
const swiperTestimonials = new Swiper(".swiper-testimonials", {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: false,
});

// Scroll Reveal
const sr = ScrollReveal({
	origin: "bottom",
	distance: "60px",
	duration: 3000,
	delay: 600,
	// reset: true // Reset animation
});

// hero
sr.reveal(".hero__title");
sr.reveal(".hero__subtitle", { delay: 500 });
sr.reveal(".hero__featuredImg", { delay: 700 });
sr.reveal(".hero__btn", { origin: "top", delay: 700 });
sr.reveal(".hero__mainImg", { delay: 700, origin: "right" });
sr.reveal(".hero__mainImg-border", { delay: 700, origin: "right" });

// about
sr.reveal(".about__featuredImg", { delay: 300, origin: "left" });
sr.reveal(".about__stats", { delay: 400 });
sr.reveal(".about__form", { delay: 500 });

// services
sr.reveal(".services__title");
sr.reveal(".services__item", { interval: 100 });

// services secondary
sr.reveal(".services-secondary__title");
sr.reveal(".services-secondary__img1", { origin: "left" });

// services tertiary
sr.reveal(".service-tertiary__title");
sr.reveal(".services-tertiary__imgs", { delay: 400 });
sr.reveal(".services-tertiary__p", { delay: 400 });

// projects
sr.reveal(".projects h2");
sr.reveal(".projects__slider");

// testimonials
sr.reveal(".testimonials__title");
sr.reveal(".testimonials__slider");
