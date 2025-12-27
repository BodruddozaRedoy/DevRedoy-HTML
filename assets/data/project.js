// 1. Projects Data
const projects = [
    {
      title: 'VendoCart',
      tags: ['Next.js', 'TypeScript', 'Node.Js', 'MongoDB'],
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1758046958/Screenshot_2025-09-17_002202_thlkoj.png',
      live: 'https://vendo-cart-frontend.vercel.app/'
    },
    {
      title: 'Skill Hatch',
      tags: ['React.js', 'TypeScript', 'Express.Js'],
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1752421144/devredoy_uploads/g0ewqcnjp9fo60nyrwfg.png',
      live: 'https://skills-hatch.vercel.app/dashboard/student'
    },
    {
      title: 'PharmaOn',
      tags: ['React.Js', 'Node.js', 'Firebase'],
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1752381773/devredoy_uploads/u7mcrgccpus69mxidwft.png',
      live: 'https://pharmaon-ec9a5.web.app/'
    },
    {
      title: 'Dine Flow',
      tags: ['React', 'Express.Js', 'Firebase'],
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1752339603/devredoy_uploads/euos2yu7fpjr2mv0ulob.png',
      live: 'https://dine-flow-9cef9.web.app/'
    },
    {
      title: 'Sports Horizon',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1752340289/devredoy_uploads/vd6dmlhwyepe7hzgqsqb.png',
      live: 'https://sports-horizon-b10a10.web.app/'
    },
    {
      title: 'Gadget Heaven',
      tags: ['React.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1752381357/devredoy_uploads/fdqvwvowjomz525isqh3.png',
      live: 'https://gadget-heaven-d9be9.web.app/'
    }
];

// 2. Rendering Function
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map((project, index) => {
        // Decide layout based on even/odd index
        const isEven = index % 2 === 0;
        
        // HTML for Text Content
        const textHtml = `
            <div class="card-text-content">
                <div class="card-btn">
                    <a href="${project.live}" target="_blank" class="btn btn--primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M11.0039 3.414L2.39691 12.021L0.98291 10.607L9.5889 2H2.00391V0H13.0039V11H11.0039V3.414Z" fill="black" />
                        </svg>
                    </a>
                </div>
                <div class="card-content">
                    <h3 class="title"><a href="${project.live}" target="_blank">${project.title}</a></h3>
                    <p class="text">${project.tags.join(' / ')}</p>
                </div>
            </div>`;

        // HTML for Image Content
        const imageClass = isEven ? "project-image-last" : "project-image-fast";
        const imageHtml = `
            <div class="project-image ${imageClass}">
                <img src="${project.image}" alt="${project.title}" />
            </div>`;

        // Return the combined card with alternating order
        return `
            <div class="card-single-item des-portfolio-panel">
                ${isEven ? textHtml + imageHtml : imageHtml + textHtml}
            </div>`;
    }).join('');
}

// 3. Update your DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    renderSkills();
    renderServices();
    renderProjects(); // New injection

    // Refresh ScrollTrigger to ensure animations "catch" the new cards
    setTimeout(() => {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 400);
});