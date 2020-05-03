const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const ctaButton = document.querySelector(".main-nav__item--cta");
const planButton = document.querySelector(".plan__list button");

for (let i = 0; i < selectPlanButtons.length; i++) {
  if (planButton) {
    planButton.addEventListener("click", () => {
      modal.style.display = "block";
    });

    selectPlanButtons[i].addEventListener("click", () => {
      modal.classList.add("open");
      backdrop.style.display = "block";

      setTimeout(() => {
        backdrop.classList.add("open");
      }, 10);
    });
  }
}

  const closeModal = () => {
    if (modal) {
      modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
    mobileNav.classList.remove("open");
    setTimeout(() => {
      backdrop.style.display = "none";
    }, 200);
  };

  backdrop.addEventListener("click", () => {
    setTimeout(() => {
      mobileNav.style.display = "none";
    }, 600);
    closeModal();
  });

  if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
  }

  toggleButton.addEventListener("click", () => {
    // console.log("clicked");
    if ((mobileNav.style.display = "none")) {
      mobileNav.style.display = "block";
    }

    backdrop.style.display = "block";
    if (modal) {
      modal.style.display = "none";
    }

    setTimeout(() => {
      backdrop.classList.add("open");
      mobileNav.classList.add("open");
    }, 10);
  });

// ctaButton.addEventListener("animationstart", () => {
//   console.log('animation started', event);
// })

// ctaButton.addEventListener("animationend", () => {
//   console.log('animation end', event);
// })
// ctaButton.addEventListener("animationiteration", () => {
//   console.log('animation iteration', event);
// })
