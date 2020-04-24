const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className ="open"; will override complete class list.
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

const closeModal = () => {
//   backdrop.style.display = "none";
//   modal.style.display = "none";
    modal.classList.remove('open');
    backdrop.classList.remove('open');
};

backdrop.addEventListener("click", ()=> {
    // mobileNav.style.display = "none";
    mobileNav.classList.remove('open');
    closeModal();
});

modalNoButton.addEventListener("click", closeModal);


toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = "block";
    // backdrop.style.display = "block";
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})