// 1. Service Data
const services = [
  {
    title: "Mobile App development",
    description: "I offer a range of professional services designed to meet <br /> your business needs with precision and creativity",
    image: "assets/img/home-2/choose/choose-01.jpg",
    link: "service-details.html"
  },
  {
    title: "CMS Integration",
    description: "I offer a range of professional services designed to meet <br /> your business needs with precision and creativity",
    image: "assets/img/home-2/choose/choose-02.jpg",
    link: "service-details.html"
  },
  {
    title: "Full-Stack Development",
    description: "I offer a range of professional services designed to meet <br /> your business needs with precision and creativity",
    image: "assets/img/home-2/choose/choose-03.jpg",
    link: "service-details.html"
  },
  {
    title: "E-commerce Development",
    description: "I offer a range of professional services designed to meet <br /> your business needs with precision and creativity",
    image: "assets/img/home-2/choose/choose-04.jpg",
    link: "service-details.html"
  }
];

// 2. Rendering Function
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = services.map(service => `
    <div class="col-xl-12">
      <div class="choose-us-box-items-2">
        <div class="choose-content">
          <div class="content">
            <h2>
              <a href="${service.link}" class="text_invert-2">${service.title}</a>
            </h2>
            <p>${service.description}</p>
          </div>
          <a href="${service.link}" class="arrow-icon">
            <i class="fa-solid fa-arrow-up-right"></i>
          </a>
        </div>
        <div class="choose-image fix">
          <img class="grow" src="${service.image}" alt="img" />
        </div>
      </div>
    </div>
  `).join('');
}

// 3. Execution
document.addEventListener('DOMContentLoaded', function () {
    renderServices(); // Injects the HTML

    // Essential for Revox Template: Refresh animations after injection
    setTimeout(() => {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 300);
});