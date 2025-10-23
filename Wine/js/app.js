document.addEventListener("DOMContentLoaded", function () {
	const burger = document.querySelector(".mobile__burger__menu");
	const menu = document.querySelector(".header__nav");
	const navigation = document.querySelector(".navigation");
	let scrollPosition = 0;

	burger.addEventListener("click", function (e) {
		e.preventDefault();

		menu.classList.toggle("menu-active");
		navigation.classList.toggle("navigation-active");
		burger.classList.toggle("active");

		if (menu.classList.contains("menu-active")) {
			// Блокируем прокрутку и блюрим фон
			scrollPosition = window.scrollY;
			document.body.style.position = "fixed";
			document.body.style.top = `-${scrollPosition}px`;
			document.body.style.width = "100%";
			document.body.classList.add("blur-active");
		} else {
			// Возвращаем всё как было
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.width = "";
			window.scrollTo(0, scrollPosition);
			document.body.classList.remove("blur-active");
		}
	});
});


var swiper = new Swiper(".myTeam", {
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	grabCursor: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		690: {
			slidesPerView: 2,
		},
		1015: {
			slidesPerView: 3,
		},
	},
});



var swiper = new Swiper(".myGallery", {
	slidesPerView: 3,
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	grabCursor: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 5,
		},
		630: {
			slidesPerView: 2,
			spaceBetween: 5,
		},
		990: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	},
});


var swiper = new Swiper(".myGallery2", {
	slidesPerView: 2,
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	grabCursor: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 5,
		},
		630: {
			slidesPerView: 2,
			spaceBetween: 5,
		},
		990: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
	},
});


document.addEventListener('DOMContentLoaded', function () {
	function getModal() {
		return document.querySelector('.subscription-modal');
	}

	function openModal() {
		const modal = getModal();
		if (!modal) return;
		modal.classList.add('subscription-modal-active');
		document.body.classList.add('blur-active');
		document.body.dataset.modal = 'subscription';
	}

	function closeModal() {
		const modal = getModal();
		if (!modal) return;
		modal.classList.remove('subscription-modal-active');
		document.body.classList.remove('blur-active');
		delete document.body.dataset.modal;
	}

	document.addEventListener('click', function (e) {
		const openBtn = e.target.closest('.open-subscription');
		if (openBtn) {
			e.preventDefault();
			openModal();
			return;
		}

		const closeBtn = e.target.closest('.close-btn, .close-subscription');
		if (closeBtn) {
			e.preventDefault();
			closeModal();
			return;
		}

		const modal = getModal();
		if (modal && e.target.closest('.subscription-modal')) {
			if (!e.target.closest('.subscription-container')) {
				e.preventDefault();
				closeModal();
			}
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' || e.key === 'Esc') closeModal();
	});
});



const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const rangeMin = document.getElementById('rangeMin');
const rangeMax = document.getElementById('rangeMax');
const minValue = document.getElementById('minValue');
const maxValue = document.getElementById('maxValue');
const rangeFill = document.getElementById('rangeFill');

function updateValues() {
	let min = parseInt(rangeMin.value);
	let max = parseInt(rangeMax.value);

	if (min > max - 100) {
		if (this.id === 'rangeMin') {
			min = max - 100;
			rangeMin.value = min;
		} else {
			max = min + 100;
			rangeMax.value = max;
		}
	}

	minInput.value = min;
	maxInput.value = max;
	minValue.textContent = '$' + min;
	maxValue.textContent = '$' + max;

	const percentMin = (min / 3000) * 100;
	const percentMax = (max / 3000) * 100;
	rangeFill.style.left = percentMin + '%';
	rangeFill.style.right = (100 - percentMax) + '%';
}

function updateFromInput() {
	let min = parseInt(minInput.value) || 0;
	let max = parseInt(maxInput.value) || 3000;

	if (min < 0) min = 0;
	if (max > 3000) max = 3000;
	if (min > max) min = max;

	rangeMin.value = min;
	rangeMax.value = max;
	updateValues();
}

rangeMin.addEventListener('input', updateValues);
rangeMax.addEventListener('input', updateValues);
minInput.addEventListener('input', updateFromInput);
maxInput.addEventListener('input', updateFromInput);

updateValues();


document.addEventListener("DOMContentLoaded", function () {
	const filterBtn = document.querySelector(".set__info__filtre_btn");
	const catalog = document.querySelector(".catalog__filters");
	const clearBtn = document.querySelector(".mobile__btn:not(.mobile__btn-bg)");
	const applyBtn = document.querySelector(".mobile__btn-bg");
	const clearTopLink = document.querySelector(".catalog__filters_name_clear_link");
	let overlay;

	if (filterBtn && catalog) {
		filterBtn.addEventListener("click", function (e) {
			e.preventDefault();
			catalog.classList.add("catalog__active");

			if (!overlay) {
				overlay = document.createElement("div");
				overlay.classList.add("overlay-bg");
				document.body.appendChild(overlay);
			}
			overlay.style.display = "block";
		});

		function closeFilter(e) {
			e.preventDefault();
			catalog.classList.remove("catalog__active");
			if (overlay) overlay.style.display = "none";
		}

		if (clearBtn) clearBtn.addEventListener("click", closeFilter);
		if (applyBtn) applyBtn.addEventListener("click", closeFilter);
		if (clearTopLink) clearTopLink.addEventListener("click", closeFilter);
	}
});


document.addEventListener("DOMContentLoaded", function () {
	const sortBtn = document.querySelector(".set__info__sort_btn");
	const sortBlock = document.querySelector(".sort");
	const applySortBtn = document.querySelector(".sort-yes");
	const closeSortBtn = document.querySelector(".close-btn");
	let overlay;

	if (sortBtn && sortBlock) {
		sortBtn.addEventListener("click", function (e) {
			e.preventDefault();
			sortBlock.classList.add("sort__active");

			if (!overlay) {
				overlay = document.createElement("div");
				overlay.classList.add("overlay-bg");
				document.body.appendChild(overlay);
			}
			overlay.style.display = "block";
		});

		function closeSort(e) {
			e.preventDefault();
			sortBlock.classList.remove("sort__active");
			if (overlay) overlay.style.display = "none";
		}

		if (applySortBtn) applySortBtn.addEventListener("click", closeSort);
		if (closeSortBtn) closeSortBtn.addEventListener("click", closeSort);
	}
});



