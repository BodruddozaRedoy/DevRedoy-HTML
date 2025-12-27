const skills = [
  {
    name: "React.js",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "C Programming",
    level: 70,
    icon: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000",
  },
  {
    name: "C++",
    level: 70,
    icon: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
  },
  {
    name: "Dart",
    level: 60,
    icon: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
  },
  {
    name: "Next.js",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Express.js",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "React Native",
    level: 50,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Prisma",
    level: 80,
    icon: "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png&color=000000",
  },
  {
    name: "Mongoose",
    level: 80,
    icon: "https://img.icons8.com/?size=100&id=gKfcEStXI1Hm&format=png&color=000000",
  },
  {
    name: "PostgreSQL",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Redux",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Zustand",
    level: 90,
    icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
  },
  {
    name: "Tailwind CSS",
    level: 95,
    icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
  },
  {
    name: "Shadcn UI",
    level: 90,
    icon: "https://ui.shadcn.com/favicon.ico",
  },
  {
    name: "Docker",
    level: 50,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    level: 40,
    icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
  },
  {
    name: "Firebase",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "GraphQL",
    level: 40,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "REST",
    level: 80,
    icon: "https://img.icons8.com/?size=100&id=55497&format=png&color=000000",
  },
  {
    name: "WordPress",
    level: 80,
    icon: "https://img.icons8.com/?size=100&id=13664&format=png&color=000000",
  },
  {
    name: "Shopify",
    level: 80,
    icon: "https://img.icons8.com/?size=100&id=uSHYbs6PJfMT&format=png&color=000000",
  },
  {
    name: "Git",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Jest",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "React Testing Library",
    level: 70,
    icon: "https://testing-library.com/img/octopus-64x64.png",
  },
  {
    name: "Scalability",
    level: 60,
    icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    name: "Query Optimization",
    level: 65,
    icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  },
  {
    name: "Schema Design",
    level: 80,
    icon: "https://img.icons8.com/?size=100&id=13643&format=png&color=000000",
  },
];

// 2. Function to Render Skills
function renderSkills() {
  const container = document.getElementById("skills-container");
  container.innerHTML = skills
    .map(
      (skill) => `
        <div class="swiper-slide">
            <div class="skill-box-items-2">
                <div class="icon">
                    <img src="${skill.icon}" alt="${skill.name}" style="width:40px; height:40px; object-fit:contain;">
                </div>
                <p>${skill.name}</p>
                <h2><span class="count">${skill.level}</span>%</h2>
                <div class="progress">
                    <div class="progress-bar" data-width="${skill.level}%"></div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// 3. Initialize Everything
document.addEventListener("DOMContentLoaded", function () {
  renderSkills(); // Build the HTML first

  const skillSwiper = new Swiper(".skill-grid-slider", {
    slidesPerView: 1,
    grid: { rows: 2, fill: "row" },
    spaceBetween: 30,
    navigation: {
      nextEl: ".skill-next-btn",
      prevEl: ".skill-prev-btn",
    },
    breakpoints: {
      768: { slidesPerView: 2, grid: { rows: 2 } },
      1200: { slidesPerView: 4, grid: { rows: 2 } },
    },
    on: {
      init: function () {
        animateBars();
      },
      transitionEnd: function () {
        animateBars();
      },
    },
  });

  function animateBars() {
    const bars = document.querySelectorAll(".progress-bar");
    bars.forEach((bar) => {
      bar.style.width = bar.getAttribute("data-width");
    });
  }
});
