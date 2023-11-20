/* Typing animation */
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Web designer", "Graphiste"],
  typeSpeed: 100,
  backSpeed: 60,
  fadeOut: true,
  loop: true,
});

/* Aside
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
} */

/* Portfolio Web Item Filter */
const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");

    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }

      if (filterValue === "all") {
        portfolioItems[k].classList.add("show");
      }
    }
  });
}

/* Portfolio Design Item Filter */
const filterContainerDesign = document.querySelector(".design-filter");
const filterBtnsDesign = filterContainerDesign.children;
const totalFilterBtnDesign = filterBtnsDesign.length;
const portfolioItemsDesign = document.querySelectorAll(".design-item");
const totalPortfolioItemDesign = portfolioItemsDesign.length;

for (let i = 0; i < totalFilterBtnDesign; i++) {
  filterBtnsDesign[i].addEventListener("click", function () {
    filterContainerDesign.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValueDesign = this.getAttribute("design-data-filter");

    for (let k = 0; k < totalPortfolioItemDesign; k++) {
      if (
        filterValueDesign ===
        portfolioItemsDesign[k].getAttribute("design-data-category")
      ) {
        portfolioItemsDesign[k].classList.remove("hide");
        portfolioItemsDesign[k].classList.add("show");
      } else {
        portfolioItemsDesign[k].classList.remove("show");
        portfolioItemsDesign[k].classList.add("hide");
      }

      if (filterValueDesign === "all") {
        portfolioItemsDesign[k].classList.add("show");
      }
    }
  });
}

/* Lightbox */
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const lightboxClose = lightbox.querySelector(".lightbox-close");
const lightboxText = lightbox.querySelector(".caption-text");
const lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItemDesign; i++) {
  portfolioItemsDesign[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function nextItem() {
  if (itemIndex == totalPortfolioItemDesign - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}

function prevItem() {
  if (itemIndex == 0) {
    itemIndex = totalPortfolioItemDesign - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

function toggleLightbox() {
  lightbox.classList.toggle("open");
}

function changeItem() {
  const imgSrc = portfolioItemsDesign[itemIndex]
    .querySelector(".design-img img")
    .getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML =
    portfolioItemsDesign[itemIndex].querySelector("h4").innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortfolioItemDesign;
}

/* Close lightbox */
lightbox.addEventListener("click", function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});

/* Contact form */
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMessage = document.getElementById("contact-message");
const errorMessage = document.getElementById("error-message");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    //Show message
    errorMessage.textContent = "Veuillez remplir tous les champs";
  } else {
    // ServiceID - templateID - #form - publickey
    emailjs
      .sendForm(
        "service_5y6o7ov",
        "template_tv1l189",
        "#contact-form",
        "RF7bVmj5k1xTdEPs2"
      )
      .then(
        () => {
          //Show message
          errorMessage.textContent = "Message envoyé ⎷";

          // Remove message after 5 seconds
          setTimeout(() => {
            errorMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("Oups ! Quelque chose s'est mal passé...", error);
        }
      );

    // Clear input fields
    contactName.value = "";
    contactEmail.value = "";
    contactSubject.value = "";
    contactMessage.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
