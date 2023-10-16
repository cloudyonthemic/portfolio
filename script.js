AOS.init();
particlesJS('particles', {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: '#ffffff',
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000',
			},
		},
		opacity: {
			value: 0.8,
			random: true,
			animation: {
				enable: true,
				speed: 1,
				opacity_min: 0,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 2,
			direction: 'none',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: false,
		},
	},
	interactivity: {
		detectsOn: 'canvas',
		events: {
			onHover: {
				enable: true,
				mode: 'push',
			},
			onClick: {
				enable: true,
				mode: 'push',
			},
			resize: true,
		},
		modes: {
			repulse: {
				distance: 100,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
		},
	},
	retina_detect: true,
});

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
window.addEventListener('scroll', function () {
	var scrollTopButton = document.querySelector('.scroll-top');
	if (this.window.pageYOffset > 200) {
		scrollTopButton.style.display = 'block';
	} else {
		scrollTopButton.style.display = 'none';
	}
});

const navbar = document.getElementById('navbar');
let scrollPosition = window.scrollY;
function hideNavbarOnScroll() {
	const currentScrollPosition = window.scrollY;
	if (currentScrollPosition > scrollPosition) {
		navbar.style.top = '-100px';
	} else {
		navbar.style.top = '0';
	}
	scrollPosition = currentScrollPosition;
}
window.addEventListener('scroll', hideNavbarOnScroll);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const targetId = this.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: 'smooth',
			});
		}
	});
});

function scrollToTop() {
	try {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	} catch (error) {
		console.error('Error scrolling to top:', error);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	// Get a reference to the "My Projects" link
	const myProjectsLink = document.querySelector('a[href="#myProjects"]');

	// Add a click event listener to the link
	myProjectsLink.addEventListener('click', function (event) {
		event.preventDefault(); // Prevent the default link behavior (scrolling to a different page)

		// Get a reference to the target section (the section with id "myProjects")
		const targetSection = document.getElementById('myProjects');

		// Scroll to the target section with smooth behavior
		targetSection.scrollIntoView({ behavior: 'smooth' });
	});
});
