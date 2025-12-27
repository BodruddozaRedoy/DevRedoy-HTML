// 1. Service Data with Details Content
const services = [
  {
    id: "mobile-app",
    title: "Mobile App Development",
    mainImage: "assets/img/home-2/choose/choose-01.jpg",
    mainDesc:
      "I offer a range of professional services designed to meet \n your business needs with precision and creativity",
    serviceInfoTitle: "Innovative Mobile Solutions",
    serviceInfoDesc:
      "I specialize in building high-performance native and cross-platform mobile applications. Using React Native and Flutter, I ensure your app provides a seamless experience across iOS and Android. My approach focuses on clean UI, smooth animations, and robust backend integration.",
    subHeading1: "Strategy & UX Research",
    subDesc1:
      "Before writing a single line of code, I analyze user behavior to create a strategy that aligns with your business goals. This includes wireframing and prototyping to ensure the final product is intuitive and engaging.",
    subHeading2: "Tech Stack & Performance",
    subDesc2:
      "Leveraging modern state management tools like Redux or Zustand, I build apps that handle complex data efficiently. I focus on optimizing load times and ensuring battery efficiency for mobile users.",
    subImages: [
      "assets/img/inner/service-details/service-details-02.jpg",
      "assets/img/inner/service-details/service-details-03.jpg",
    ],
    benefitsHeading: "Key Mobile Benefits",
    benefitsDesc:
      "Choosing professional mobile development ensures your brand is accessible anywhere, anytime, with features designed specifically for handheld devices.",
    benefitsList: [
      {
        id: "01",
        title: "Cross-Platform Reach",
        desc: "One codebase for both Android and iOS saves time and cost.",
      },
      {
        id: "02",
        title: "Offline Capabilities",
        desc: "Implementing local caching so users can access data without internet.",
      },
      {
        id: "03",
        title: "Push Notifications",
        desc: "Engage your users directly with timely updates and alerts.",
      },
      {
        id: "04",
        title: "Secure Biometrics",
        desc: "Integration with FaceID and Fingerprint sensors for high security.",
      },
    ],
  },
  {
    id: "cms-integration",
    title: "CMS Integration",
    mainImage: "assets/img/home-2/choose/choose-02.jpg",
    mainDesc:
      "I offer a range of professional services designed to meet your business needs with precision and creativity",
    serviceInfoTitle: "Content Management Made Easy",
    serviceInfoDesc:
      "I provide seamless CMS integration services that empower you to manage your website content without needing any technical knowledge. Whether it's WordPress, Shopify, or a Headless CMS like Strapi, I tailor the backend to fit your specific workflow.",
    subHeading1: "Custom Dashboard Design",
    subDesc1:
      "I don't just install a CMS; I customize the administrative interface. I create custom fields and simplified editors so your team can publish content in seconds without breaking the layout.",
    subHeading2: "Headless CMS Solutions",
    subDesc2:
      "For modern performance, I offer Headless CMS integrations. This allows you to manage content in one place and deliver it to your website, mobile app, and other platforms via high-speed APIs.",
    subImages: [
      "assets/img/inner/service-details/service-details-03.jpg",
      "assets/img/inner/service-details/service-details-01.jpg",
    ],
    benefitsHeading: "Why Choose My CMS Solutions?",
    benefitsDesc:
      "A well-integrated CMS reduces your long-term maintenance costs and gives you total control over your digital brand.",
    benefitsList: [
      {
        id: "01",
        title: "Zero Coding Required",
        desc: "Update text, images, and blogs through an easy-to-use interface.",
      },
      {
        id: "02",
        title: "SEO Friendly",
        desc: "Built-in tools to manage meta tags, alt text, and sitemaps easily.",
      },
      {
        id: "03",
        title: "Multi-User Access",
        desc: "Role-based permissions to control who can edit and publish content.",
      },
      {
        id: "04",
        title: "Platform Scalability",
        desc: "Add thousands of pages or products without slowing down your site.",
      },
    ],
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    mainImage: "assets/img/home-2/choose/choose-03.jpg",
    mainDesc:
      "I offer a range of professional services designed to meet your business needs with precision and creativity",
    serviceInfoTitle: "End-to-End Web Ecosystems",
    serviceInfoDesc:
      "From database architecture to front-end polish, I build complete web systems using the MERN stack. I handle the server logic, API development, and the user interface to ensure a unified, secure, and scalable product.",
    subHeading1: "Backend & Database Design",
    subDesc1:
      "Using Node.js and MongoDB or PostgreSQL, I design secure and efficient databases. My backends are built to handle thousands of concurrent users while maintaining lightning-fast response times.",
    subHeading2: "Frontend Excellence",
    subDesc2:
      "Using React.js and Next.js, I create highly responsive user interfaces. I focus on Server-Side Rendering (SSR) for maximum SEO performance and ultra-fast initial page loads.",
    subImages: [
      "assets/img/inner/service-details/service-details-01.jpg",
      "assets/img/inner/service-details/service-details-02.jpg",
    ],
    benefitsHeading: "The Full-Stack Advantage",
    benefitsDesc:
      "A unified development process ensures that the frontend and backend communicate perfectly without any integration friction.",
    benefitsList: [
      {
        id: "01",
        title: "Unified Workflow",
        desc: "Lower development costs with a single point of contact for the whole stack.",
      },
      {
        id: "02",
        title: "Scalable Infrastructure",
        desc: "Cloud-ready code designed for AWS, Vercel, or Firebase hosting.",
      },
      {
        id: "03",
        title: "Secure Data Handling",
        desc: "Implementation of JWT, OAuth, and modern security protocols.",
      },
      {
        id: "04",
        title: "API First Design",
        desc: "Robust REST or GraphQL APIs that can connect to any future platform.",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    mainImage: "assets/img/home-2/choose/choose-04.jpg",
    mainDesc:
      "I offer a range of professional services designed to meet your business needs with precision and creativity",
    serviceInfoTitle: "High-Conversion Online Stores",
    serviceInfoDesc:
      "I build robust e-commerce platforms designed to convert visitors into loyal customers. From simple online shops to complex multi-vendor marketplaces like VendoCart, I ensure a secure and smooth shopping experience.",
    subHeading1: "Payment Gateway Integration",
    subDesc1:
      "Security is my priority. I integrate secure payment solutions like Stripe, PayPal, and SSL-encrypted checkouts to build trust with your customers and ensure safe transactions.",
    subHeading2: "Inventory & Order Tracking",
    subDesc2:
      "I build custom management tools that allow you to track stock levels, manage shipping, and view detailed sales analytics in real-time from a central dashboard.",
    subImages: [
      "assets/img/inner/service-details/service-details-02.jpg",
      "assets/img/inner/service-details/service-details-03.jpg",
    ],
    benefitsHeading: "Boost Your Digital Sales",
    benefitsDesc:
      "A professional e-commerce site provides a seamless journey from product discovery to the final click of the purchase button.",
    benefitsList: [
      {
        id: "01",
        title: "Optimized Checkout",
        desc: "Minimize cart abandonment with a fast, one-page checkout process.",
      },
      {
        id: "02",
        title: "Multi-Vendor Ready",
        desc: "Build platforms where multiple sellers can manage their own stores.",
      },
      {
        id: "03",
        title: "Mobile Shopping",
        desc: "Fully responsive designs that look great on phones and tablets.",
      },
      {
        id: "04",
        title: "Customer Analytics",
        desc: "Track user behavior to improve your marketing and sales strategy.",
      },
    ],
  },
];

// 2. Rendering Function
function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = services
    .map(
      (service) => `
      <div class="col-xl-12">
        <div class="choose-us-box-items-2">
          <div class="choose-content">
            <div class="content">
              <h2>
                <a href="service-details.html?id=${service.id}" class="text_invert-2">
                  ${service.title}
                </a>
              </h2>
              <p ">${service.mainDesc}</p>
            </div>
            <a style="width:60px; height: 50px; margin-right: 20px" href="service-details.html?id=${service.id}" class="arrow-icon">
              <i class="fa-solid fa-arrow-up-right"></i>
            </a>
          </div>
          <div class="choose-image fix">
            <img class="grow" src="${service.mainImage}" alt="${service.title}" />
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// 3. Execution
document.addEventListener("DOMContentLoaded", function () {
  renderServices();

  setTimeout(() => {
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  }, 300);
});
