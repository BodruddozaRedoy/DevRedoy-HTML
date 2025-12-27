/**
 * DEVREDOY - Project Grid Handler
 * Features: Category Filtering & Pagination (4 cards per page)
 */

const allProjects = [
    {
      title: 'VendoCart',
      category: 'web-app',
      tag: 'Next.js / TypeScript',
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1758046958/Screenshot_2025-09-17_002202_thlkoj.png',
      live: 'https://vendo-cart-frontend.vercel.app/'
    },
    {
      title: 'Skill Hatch',
      category: 'web-app',
      tag: 'React.js / Node.js',
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1752421144/devredoy_uploads/g0ewqcnjp9fo60nyrwfg.png',
      live: 'https://skills-hatch.vercel.app/dashboard/student'
    },
    {
      title: 'PharmaOn',
      category: 'web-app',
      tag: 'MERN Stack / Firebase',
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1752381773/devredoy_uploads/u7mcrgccpus69mxidwft.png',
      live: 'https://pharmaon-ec9a5.web.app/'
    },
    {
      title: 'Dine Flow',
      category: 'cms-app',
      tag: 'CMS / Management',
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1752339603/devredoy_uploads/euos2yu7fpjr2mv0ulob.png',
      live: 'https://dine-flow-9cef9.web.app/'
    },
    {
      title: 'Sports Horizon',
      category: 'web-app',
      tag: 'MERN / Real-time',
      image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1752340289/devredoy_uploads/vd6dmlhwyepe7hzgqsqb.png',
      live: 'https://sports-horizon-b10a10.web.app/'
    },
    {
        title: 'Gadget Heaven',
        category: 'web-app',
        tag: 'E-commerce',
        image: 'https://res.cloudinary.com/dcrs7po93/image/upload/v1752381357/devredoy_uploads/fdqvwvowjomz525isqh3.png',
        live: 'https://gadget-heaven-d9be9.web.app/'
    }
    // Add more projects as needed
];

let currentFilter = 'all';
let currentPage = 1;
const itemsPerPage = 4;

function renderProjects() {
    const grid = document.getElementById('project-grid-container');
    const pagination = document.getElementById('pagination-container');
    
    // 1. Filter Logic
    const filteredData = currentFilter === 'all' 
        ? allProjects 
        : allProjects.filter(p => p.category === currentFilter);

    // 2. Pagination Logic
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    // 3. Inject Projects
    grid.innerHTML = paginatedData.map(p => `
        <div class="col-md-6 wow fadeInUp">
            <div class="project-box-items-555">
                <div class="thumb">
                    <img src="${p.image}" alt="${p.title}">
                </div>
                <div class="content">
                    <p>${p.tag}</p>
                    <h3><a href="${p.live}" target="_blank">${p.title}</a></h3>
                </div>
            </div>
        </div>
    `).join('');

    // 4. Inject Pagination Numbers
    let paginationHtml = '';
    for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<li><a class="page-numbers ${i === currentPage ? 'active' : ''}" href="javascript:void(0)" onclick="changePage(${i})">${i < 10 ? '0' + i : i}</a></li>`;
    }
    pagination.innerHTML = paginationHtml;

    // Refresh animations
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
}

// Global functions for UI interaction
window.changePage = (page) => {
    currentPage = page;
    renderProjects();
    window.scrollTo({ top: document.querySelector('.project-grid-section').offsetTop - 100, behavior: 'smooth' });
};

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    // Filter Click Listener
    document.querySelectorAll('.filter-nav .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.filter-nav .nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            currentPage = 1; // Reset to page 1 on filter
            renderProjects();
        });
    });
});