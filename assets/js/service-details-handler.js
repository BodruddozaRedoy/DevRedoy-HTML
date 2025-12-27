document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the ID from URL (e.g., ?id=mobile-app)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    // 2. Find the service data (Ensure 'services' is loaded from service.js first)
    if (typeof services !== 'undefined' && serviceId) {
        const data = services.find(s => s.id === serviceId);

        if (data) {
            // 3. Update Page & Main Titles
            document.title = `${data.title} | DevRedoy`;
            
            // Matches: <h1 id="service-title">
            const mainTitle = document.getElementById('service-title');
            if(mainTitle) mainTitle.innerText = data.title;

            // 4. Update Images
            const mainImg = document.getElementById('service-main-img');
            if(mainImg) mainImg.src = data.mainImage;

            const subImg1 = document.getElementById('det-sub-img1'); // Optional ID if you added it
            const subImg2 = document.getElementById('det-sub-img2'); 
            if(subImg1) subImg1.src = data.subImages[0];
            if(subImg2) subImg2.src = data.subImages[1];

            // 5. Update Text Sections
            // Service Information
            const infoDesc = document.getElementById('service-long-desc');
            if(infoDesc) infoDesc.innerText = data.serviceInfoDesc;

            // Sub-sections (Style Guides / Brand Guidelines sections)
            // Use IDs: det-sub-title1, det-sub-desc1, etc.
            const subT1 = document.getElementById('det-sub-title1');
            const subD1 = document.getElementById('det-sub-desc1');
            if(subT1) subT1.innerText = data.subHeading1;
            if(subD1) subD1.innerText = data.subDesc1;

            const subT2 = document.getElementById('det-sub-title2');
            const subD2 = document.getElementById('det-sub-desc2');
            if(subT2) subT2.innerText = data.subHeading2;
            if(subD2) subD2.innerText = data.subDesc2;

            // 6. Update Benefits List (The 4-item grid)
            const listContainer = document.getElementById('det-list-container');
            if(listContainer && data.benefitsList) {
                listContainer.innerHTML = `
                    <ul>
                        <li>
                            <b>${data.benefitsList[0].id}</b>${data.benefitsList[0].title}
                            <p>${data.benefitsList[0].desc}</p>
                        </li>
                        <li>
                            <b>${data.benefitsList[2].id}</b>${data.benefitsList[2].title}
                            <p>${data.benefitsList[2].desc}</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <b>${data.benefitsList[1].id}</b>${data.benefitsList[1].title}
                            <p>${data.benefitsList[1].desc}</p>
                        </li>
                        <li>
                            <b>${data.benefitsList[3].id}</b>${data.benefitsList[3].title}
                            <p>${data.benefitsList[3].desc}</p>
                        </li>
                    </ul>
                `;
            }

        } else {
            console.error("Service ID not found in data.");
            const titleElem = document.getElementById('service-title');
            if(titleElem) titleElem.innerText = "Service Not Found";
        }
    }

    // 7. Refresh ScrollTrigger for animations (Essential for Revox)
    setTimeout(() => {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 500);
});