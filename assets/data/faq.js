/**
 * FAQ Data & Injection for DevRedoy Portfolio
 * Handles FAQ accordion content dynamically
 */

const faqData = [
    {
        question: "Who is Bodruddoza Redoy?",
        answer: "I am a passionate Full Stack Developer with over 3 years of intensive learning experience and 1 year of professional working experience. I specialize in creating innovative digital solutions that bridge the gap between complex code and user-friendly design.",
        isActive: true // First one is open by default
    },
    {
        question: "What is your professional background?",
        answer: "With 3 years of deep diving into technologies like the MERN stack and Next.js, and 1 year of industry experience, I have successfully delivered multiple full-stack projects including E-commerce platforms, LMS systems, and customized CMS integrations.",
        isActive: false
    },
    {
        question: "What technologies do you work with?",
        answer: "My core stack includes React.js, Next.js, Node.js, and TypeScript. I also have expertise in mobile development (React Native), databases (MongoDB/PostgreSQL), and cloud services like Firebase and AWS.",
        isActive: false
    },
    {
        question: "How long does it take to complete a project?",
        answer: "A standard website project typically takes 1-2 weeks for the design and development of landing pages, while complex full-stack applications like VendoCart or Skill Hatch usually take 4-8 weeks.",
        isActive: false
    },
    {
        question: "Do you provide support after the project is finished?",
        answer: "Yes, I offer dedicated support and maintenance after delivery to ensure your application remains secure, updated, and performs at its best.",
        isActive: false
    }
];

function renderFAQs() {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    faqContainer.innerHTML = faqData.map((faq, index) => `
        <li class="accordion block ${faq.isActive ? 'active-block' : ''} wow fadeInUp" data-wow-delay="${index * 0.2}s">
            <div class="acc-btn ${faq.isActive ? 'active' : ''}">
                ${faq.question}
                <div class="icon fa fa-plus"></div>
            </div>
            <div class="acc-content ${faq.isActive ? 'current' : ''}">
                <div class="content">
                    <div class="text">
                        ${faq.answer}
                    </div>
                </div>
            </div>
        </li>
    `).join('');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderFAQs();

    // Ensure GSAP / ScrollTrigger recognizes the new content height
    setTimeout(() => {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 500);
});