// MODE LOGIC //
let toggleButton = document.querySelector("#toggle");
let main = document.body;

toggleButton.addEventListener("click", () => {
    main.classList.toggle("dark");
});


// ACCODION LOGIC //
document.addEventListener('DOMContentLoaded', function () {
    function setupAccordion(accordionId) {
        const accordion = document.getElementById(accordionId);
        const headers = accordion.querySelectorAll('button[data-accordion-target]');

        headers.forEach(header => {
            header.addEventListener('click', function () {
                const targetId = this.getAttribute('data-accordion-target');
                const target = document.querySelector(targetId);
                const icon = this.querySelector('[data-accordion-icon]');

                // Toggle the current section
                const isHidden = target.classList.toggle('hidden');
                this.setAttribute('aria-expanded', !isHidden);
                icon.classList.toggle('rotate-180');

                // Close other sections
                headers.forEach(otherHeader => {
                    if (otherHeader !== this) {
                        const otherTargetId = otherHeader.getAttribute('data-accordion-target');
                        const otherTarget = document.querySelector(otherTargetId);
                        const otherIcon = otherHeader.querySelector('[data-accordion-icon]');

                        otherTarget.classList.add('hidden');
                        otherHeader.setAttribute('aria-expanded', false);
                        otherIcon.classList.remove('rotate-180');
                    }
                });
            });
        });
    }

    setupAccordion('accordion-collapse');
    // setupAccordion('accordion-collapse-2');

});


// ALERT LOGIC //
const button = document.getElementById('loginAlert');
button.addEventListener("click", () => {
    alert("this is the error of code")
})


// CAROUSEL LOGIC //
function initializeCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('[data-carousel-item]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');

    let currentIndex = 0;
    const totalItems = items.length;

    // Function to show current slide
    function showSlide(index) {
        if (index < 0 || index >= totalItems) {
            return;
        }

        // Hide all items
        items.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('block');
        });

        // Show the item at the given index
        items[index].classList.remove('hidden');
        items[index].classList.add('block');

        // Update aria-current attribute for indicators
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.setAttribute('aria-current', 'false');
            }
        });
    }

    // Show initial slide
    showSlide(currentIndex);

    // Function to show next slide
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }

    // Function to show previous slide
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    }

    // Event listeners for previous and next buttons
    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Event listener for slide indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initializeCarousel('default-carousel');
    // initializeCarousel('another-carousel');
});


// MODALS LOGIC //
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    const openButtons = document.querySelectorAll(`[data-modal-toggle="${modalId}"]`);
    const closeButtons = document.querySelectorAll(`[data-modal-hide="${modalId}"]`);

    // Function to open the modal
    const openModal = () => {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('overflow-hidden');
    };

    // Function to close the modal
    const closeModal = () => {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('overflow-hidden');
    };

    // Attach click event listeners to open buttons
    openButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    // Attach click event listeners to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Close modal if clicked outside of content area
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal on ESC key press
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' || event.key === 'Esc') {
            closeModal();
        }
    });
}
toggleModal('default-modal');


// OFFCANVAS //
function toggleOffCanvasMenu(menuId) {
    const menu = document.getElementById(menuId);
    const openButtons = document.querySelectorAll(`[data-drawer-show="${menuId}"]`);
    const closeButtons = document.querySelectorAll(`[data-drawer-hide="${menuId}"]`);

    // Function to open the menu
    const openMenu = () => {
        menu.classList.remove('translate-x-full');
        menu.setAttribute('aria-hidden', 'false');
        document.body.classList.add('overflow-hidden');
    };

    // Function to close the menu
    const closeMenu = () => {
        menu.classList.add('translate-x-full');
        menu.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('overflow-hidden');
    };

    // Attach click event listeners to open buttons
    openButtons.forEach(button => {
        button.addEventListener('click', openMenu);
    });

    // Attach click event listeners to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', closeMenu);
    });

    // Close menu if clicked outside of content area
    menu.addEventListener('click', event => {
        if (event.target === menu) {
            closeMenu();
        }
    });

    // Close menu on ESC key press
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' || event.key === 'Esc') {
            closeMenu();
        }
    });
}
toggleOffCanvasMenu('drawer-right-example');


// TOOLTIPS //
