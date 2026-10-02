/* =========================================================
   EAGLE KREATIVES DESIGN
   WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   PORTFOLIO DATA
   Nigerian-inspired sample design projects
========================================================= */

const portfolioProjects = [

    {
        title: "Logo Creation",
        category: "Brand Identity",
        filter: "Branding",
        description:
            "A bold Nigerian-inspired visual identity concept combining deep blue, strong typography and contemporary African visual direction.",
        image:
            "logo.jpg"
    },

    {
        title: "Flyer Design",
        category: "Marketing Graphics",
        filter: "Promotional Flyers",
        description:
            "A social media campaign concept created for a modern Nigerian business brand.",
        image:
            "Flyer.jpg"
    },

    {
        title: "Birthday Design",
        category: "Invitation Materials",
        filter: "Birthday Flyers",
        description:
            "Premium fashion branding inspired by contemporary African style and Nigerian creative culture.",
        image:
            "birthday.jpg"
    },

    {
        title: "Church Design",
        category: "Church Programs & Event Graphics",
        filter: "Church Flyers",
        description:
            "A promotional flyer concept designed for a Lagos-based business.",
        image:
            "Church2.jpg"
    },

    {
        title: "School Design",
        category: "Educational Graphics",
        filter: "School Flyers",
        description:
            "A colourful packaging and identity direction for a contemporary African food business.",
        image:
            "school2.jpg"
    },

    {
        title: "Real Estate Design",
        category: "Property Flyers & Agent Branding",
        filter: "Property Flyers",
        description:
            "Creative promotional graphics for an independent Nigerian music artist.",
        image:
            "real estate.jpg"
    },

    {
        title: "Social Media Design",
        category: "Posts, Ads, Banners & Social Graphics",
        filter: "Digital",
        description:
            "Modern digital interface direction for a Nigerian technology startup.",
        image:
            "social media.jpg"
    },

    {
        title: "Business Card Design",
        category: "Professional Business Cards",
        filter: "Stationery",
        description:
            "Event campaign visuals created around a bold contemporary African aesthetic.",
        image:
            "business card.jpg"
    },

    {
        title: "Banner Design",
        category: "Web Banners, Roll-Up & Outdoor Banners",
        filter: "Brand Identity",
        description:
            "Restaurant branding concept combining premium typography and Nigerian-inspired visual elements.",
        image:
            "Banner.jpg"
    },

    {
        title: "Poster Design",
        category: "Promotional Posters",
        filter: "Digital",
        description:
            "Responsive website concept for a modern creative agency.",
        image:
            "Poster.jpg"
    },

    {
        title: "Brochure Design",
        category: "Company Profiles, Brochures & Catalogs",
        filter: "Print",
        description:
            "A bold social media visual campaign for a Nigerian streetwear label.",
        image:
            "Brochure.jpg"
    },

    {
        title: "Wedding Design",
        category: "Wedding Invitations & Stationery",
        filter: "print",
        description:
            "Editorial poster direction inspired by African culture and contemporary graphic design.",
        image:
            "Wedding Invitation.jpg"
    },

    {
        title: "Product Design",
        category: "Packaging, Labels & Product Branding",
        filter: "branding",
        description:
            "Clean corporate identity concept for a professional Nigerian business.",
        image:
            "Proudot.jpg"
    },

    {
        title: "Packaging Design",
        category: "Product Packaging & Label Design",
        filter: "branding",
        description:
            "Mobile interface concept focused on simple navigation and modern digital experiences.",
        image:
            "Packaging.jpg"
    },

    {
        title: "Book & E-Book Design",
        category: "Book Covers, E-Books & Print Layouts",
        filter: "print",
        description:
            "Elegant social graphics designed for a Nigerian wedding and events brand.",
        image:
            "book design.jpg.jpg"
    },

    {
        title: "Website Design",
        category: "Websites, Landing Pages & Digital Interfaces",
        filter: "digital",
        description:
            "Premium corporate brochure concept designed for a Nigerian organization.",
        image:
            "Website design.jpg.jpg"
    },

    {
        title: "Music Design",
        category: "Digital Design",
        filter: "digital",
        description:
            "Modern beauty packaging concept inspired by African identity and premium aesthetics.",
        image:
            "Music cover.jpg"
    },

    {
        title: "AI Video Creation",
        category: "Digital Design",
        filter: "digital",
        description:
            "Clean dashboard interface created around usability and visual hierarchy.",
        image:
            "Ai video.jpg"
    },

    {
        title: "YouTube Design",
        category: "Thumbnails, Channel Art & Video Graphics",
        filter: "digital",
        description:
            "Lifestyle campaign concept using bold photography and contemporary typography.",
        image:
            "YouTube.png"
    },

    {
        title: "Business Branding",
        category: "Brand Guidelines, Letterheads & Visual Identity",
        filter: "print",
        description:
            "Professional print design collection for a Nigerian corporate organization.",
        image:
            "Business brand.jpg"
    }
];


/* =========================================================
   SERVICES DATA
========================================================= */

const services = [

    {
        title: "Brand Identity & Logo Design",
        description:
            "Build a recognizable brand with professional logos, colours, typography and visual identity.",
        icon: "fa-pen-nib"
    },

    {
        title: "Graphic Design",
        description:
            "Creative designs for marketing materials, campaigns, presentations and business communication.",
        icon: "fa-palette"
    },

    {
        title: "Social Media Design",
        description:
            "Professional social media graphics that make your brand consistent and visually engaging.",
        icon: "fa-hashtag"
    },

    {
        title: "Flyer & Poster Design",
        description:
            "Eye-catching promotional flyers and posters for events, businesses and campaigns.",
        icon: "fa-file-image"
    },

    {
        title: "Business Card Design",
        description:
            "Clean and professional business cards designed to create a strong first impression.",
        icon: "fa-address-card"
    },

    {
        title: "Website Design",
        description:
            "Modern responsive websites that present your business professionally online.",
        icon: "fa-display"
    },

    {
        title: "UI/UX Design",
        description:
            "User-focused digital interfaces designed around clarity, usability and visual hierarchy.",
        icon: "fa-layer-group"
    },

    {
        title: "Packaging Design",
        description:
            "Creative product packaging and label designs that help products stand out.",
        icon: "fa-box-open"
    },

    {
        title: "Motion Graphics",
        description:
            "Animated graphics and visual content for social media, advertising and digital campaigns.",
        icon: "fa-film"
    },

    {
        title: "Print Design",
        description:
            "Print-ready artwork for banners, brochures, signage, clothing and promotional materials.",
        icon: "fa-print"
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const portfolioGrid =
    document.getElementById("portfolioGrid");

const servicesGrid =
    document.getElementById("servicesGrid");

const filterButtons =
    document.querySelectorAll(".filter-button");

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const header =
    document.getElementById("header");

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

const modal =
    document.getElementById("portfolioModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.getElementById("modalOverlay");

const year =
    document.getElementById("year");


/* =========================================================
   RENDER SERVICES
========================================================= */

function renderServices() {

    if (!servicesGrid) return;

    servicesGrid.innerHTML = "";

    services.forEach((service, index) => {

        const card =
            document.createElement("article");

        card.className =
            "service-card reveal";

        card.innerHTML = `

            <div>

                <div class="service-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="service-icon">

                    <i class="fa-solid ${service.icon}"></i>

                </div>

            </div>

            <div>

                <h3>
                    ${service.title}
                </h3>

                <p>
                    ${service.description}
                </p>

                <a
                    href="#contact"
                    class="service-link"
                >
                    Request service
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

            </div>

        `;

        servicesGrid.appendChild(card);

    });

}


/* =========================================================
   RENDER PORTFOLIO
========================================================= */

function renderPortfolio(filter = "all") {

    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = "";

    const projects =
        filter === "all"
            ? portfolioProjects
            : portfolioProjects.filter(
                project =>
                    project.filter === filter
            );


    projects.forEach((project) => {

        const index =
            portfolioProjects.indexOf(project);

        const item =
            document.createElement("article");

        item.className =
            "portfolio-item reveal";

        item.dataset.index =
            index;

        item.tabIndex = 0;

        item.setAttribute(
            "role",
            "button"
        );

        item.setAttribute(
            "aria-label",
            `View ${project.title}`
        );


        item.innerHTML = `

            <img
                src="${project.image}"
                alt="${project.title}"
                loading="lazy"
            >

            <div class="portfolio-info">

                <small>
                    ${project.category}
                </small>

                <h3>
                    ${project.title}
                </h3>

                <p>
                    View project
                    <i class="fa-solid fa-arrow-right"></i>
                </p>

            </div>

        `;


        portfolioGrid.appendChild(item);

    });


    observeReveal();

}


/* =========================================================
   PORTFOLIO FILTERING
========================================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            renderPortfolio(
                button.dataset.filter
            );

        }
    );

});


/* =========================================================
   MODAL
========================================================= */

function openModal(index) {

    const project =
        portfolioProjects[index];

    if (!project || !modal) return;


    modalImage.src =
        project.image;

    modalImage.alt =
        project.title;

    modalTitle.textContent =
        project.title;

    modalCategory.textContent =
        project.category;

    modalDescription.textContent =
        project.description;


    modal.classList.add(
        "open"
    );

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


function closeModal() {

    if (!modal) return;

    modal.classList.remove(
        "open"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* PORTFOLIO CLICK */

if (portfolioGrid) {

    portfolioGrid.addEventListener(
        "click",
        event => {

            const item =
                event.target.closest(
                    ".portfolio-item"
                );

            if (!item) return;

            openModal(
                Number(item.dataset.index)
            );

        }
    );


    portfolioGrid.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Enter" &&
                event.key !== " "
            ) {
                return;
            }


            const item =
                event.target.closest(
                    ".portfolio-item"
                );

            if (!item) return;


            event.preventDefault();


            openModal(
                Number(item.dataset.index)
            );

        }
    );

}


/* MODAL CLOSE */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );

}

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("open")
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        () => {

            const open =
                navMenu.classList.toggle(
                    "open"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                open
            );


            const spans =
                menuToggle.querySelectorAll(
                    "span"
                );


            if (open) {

                spans[0].style.transform =
                    "rotate(45deg) translate(4px, 4px)";

                spans[1].style.opacity =
                    "0";

                spans[2].style.transform =
                    "rotate(-45deg) translate(4px, -4px)";

            } else {

                spans.forEach(span => {

                    span.style.transform =
                        "";

                    span.style.opacity =
                        "";

                });

            }

        }
    );

}


/* CLOSE MENU AFTER CLICK */

document.querySelectorAll(
    ".nav-link"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navMenu.classList.remove(
                "open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle
                .querySelectorAll("span")
                .forEach(span => {

                    span.style.transform =
                        "";

                    span.style.opacity =
                        "";

                });

        }
    );

});


/* =========================================================
   HEADER SCROLL
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 30
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const navObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    !entry.isIntersecting
                ) {
                    return;
                }


                const currentId =
                    entry.target.id;


                navLinks.forEach(link => {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) === `#${currentId}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            });

        },
        {
            threshold: .3
        }
    );


sections.forEach(section => {

    navObserver.observe(
        section
    );

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

let revealObserver;


function createRevealObserver() {

    if (
        !("IntersectionObserver" in window)
    ) {

        document
            .querySelectorAll(".reveal")
            .forEach(element => {

                element.classList.add(
                    "visible"
                );

            });

        return;

    }


    revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .08,

                rootMargin:
                    "0px 0px -30px 0px"
            }
        );

}


function observeReveal() {

    if (!revealObserver) {

        createRevealObserver();

    }


    if (!revealObserver) return;


    document
        .querySelectorAll(
            ".reveal:not(.visible)"
        )
        .forEach(element => {

            revealObserver.observe(
                element
            );

        });

}


/* =========================================================
   CONTACT FORM
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const service =
                document.getElementById(
                    "service"
                ).value;


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            if (
                !name ||
                !email ||
                !service ||
                !message
            ) {

                formMessage.textContent =
                    "Please complete all required fields.";

                return;

            }


            const subject =
                encodeURIComponent(
                    `New Project Enquiry - ${service}`
                );


            const body =
                encodeURIComponent(

                    `Hello Eagle Kreatives Design,

I would like to discuss a project.

Name:
${name}

Email:
${email}

Service:
${service}

Project Details:
${message}

Thank you.`

                );


            const emailURL =
                `mailto:eaglekreativesdesign@gmail.com?subject=${subject}&body=${body}`;


            formMessage.textContent =
                "Opening your email application...";


            window.location.href =
                emailURL;

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

document.addEventListener(
    "error",
    event => {

        if (
            event.target.tagName !== "IMG"
        ) {
            return;
        }


        if (
            event.target.dataset.fallback
        ) {
            return;
        }


        event.target.dataset.fallback =
            "true";


        event.target.style.background =
            "#e9ecff";

    },
    true
);


/* =========================================================
   INITIALIZE
========================================================= */

function initializeWebsite() {

    renderServices();

    renderPortfolio();

    observeReveal();

}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeWebsite
    );

} else {

    initializeWebsite();

}