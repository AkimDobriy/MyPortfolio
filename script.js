/* =========================
   TRANSLATIONS
========================= */

const translations = {

    ru: {
        about: "Обо мне",
        projects: "Проекты",
        skills: "Навыки",
        contact: "Контакты",

        status: "Открыт для новых проектов",

        heroText:
            "Создаю современные сайты, Telegram-ботов и цифровые интерфейсы.",

        viewProjects: "Смотреть проекты ↓",

        aboutTitle: "Обо",
        aboutTitle2: "мне.",

        aboutText1:
            "Привет! Я Akim Xaytaliev — Web Developer.",

        aboutText2:
            "Я занимаюсь разработкой современных, адаптивных и интерактивных веб-сайтов.",

        aboutText3:
            "Работаю с HTML, CSS, JavaScript, React, PHP, Python и Tailwind CSS.",

        aboutText4:
            "Также создаю Telegram-ботов и занимаюсь UI-дизайном. Мне нравится превращать идеи в реальные работающие проекты.",

        skillsTitle: "Мой",
        skillsTitle2: "стек.",

        projectsTitle: "Избранные",
        projectsTitle2: "проекты.",

        project1:
            "Современный веб-проект с интерактивным интерфейсом.",

        project2:
            "Интерактивный проект с визуальным интерфейсом.",

        project3:
            "Адаптивный сайт с современным дизайном.",

        project4:
            "Landing page для маркетингового проекта.",

        project5:
            "Современный адаптивный веб-интерфейс.",

        project6:
            "Адаптивный сайт с аккуратной структурой.",

        botText:
            "Telegram-бот для автоматизации и взаимодействия с пользователями.",

        designText:
            "Визуальные концепции, интерфейсы и digital-дизайн.",

        contactTitle: "Давай создадим",

        contactTitle2:
            "что-нибудь крутое.",

        contactText:
            "Открыт к новым проектам, идеям и сотрудничеству."
    },


    uz: {
        about: "Men haqimda",
        projects: "Loyihalar",
        skills: "Ko'nikmalar",
        contact: "Aloqa",

        status:
            "Yangi loyihalar uchun ochiqman",

        heroText:
            "Zamonaviy saytlar, Telegram botlar va raqamli interfeyslar yarataman.",

        viewProjects:
            "Loyihalarni ko'rish ↓",

        aboutTitle: "Men",
        aboutTitle2: "haqimda.",

        aboutText1:
            "Salom! Men Akim Xaytaliev — Web Developer.",

        aboutText2:
            "Men zamonaviy, moslashuvchan va interaktiv veb-saytlar yarataman.",

        aboutText3:
            "HTML, CSS, JavaScript, React, PHP, Python va Tailwind CSS bilan ishlayman.",

        aboutText4:
            "Shuningdek, Telegram botlar yarataman va UI dizayn bilan shug'ullanaman. G'oyalarni haqiqiy ishlaydigan loyihalarga aylantirishni yoqtiraman.",

        skillsTitle: "Mening",
        skillsTitle2: "steckim.",

        projectsTitle: "Tanlangan",
        projectsTitle2: "loyihalar.",

        project1:
            "Interaktiv interfeysga ega zamonaviy web loyiha.",

        project2:
            "Chiroyli vizual interfeysga ega interaktiv loyiha.",

        project3:
            "Zamonaviy dizaynga ega moslashuvchan sayt.",

        project4:
            "Marketing loyihasi uchun landing page.",

        project5:
            "Zamonaviy moslashuvchan web interfeys.",

        project6:
            "Toza tuzilishga ega moslashuvchan sayt.",

        botText:
            "Foydalanuvchilar bilan ishlash va avtomatlashtirish uchun Telegram bot.",

        designText:
            "Vizual konsepsiyalar, interfeyslar va digital dizayn.",

        contactTitle: "Keling,",

        contactTitle2:
            "ajoyib narsa yaratamiz.",

        contactText:
            "Yangi loyihalar, g'oyalar va hamkorlik uchun ochiqman."
    },


    en: {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",

        status:
            "Available for new projects",

        heroText:
            "I create modern websites, Telegram bots and digital interfaces.",

        viewProjects:
            "View projects ↓",

        aboutTitle: "About",
        aboutTitle2: "me.",

        aboutText1:
            "Hi! I'm Akim Xaytaliev — Web Developer.",

        aboutText2:
            "I build modern, responsive and interactive websites.",

        aboutText3:
            "I work with HTML, CSS, JavaScript, React, PHP, Python and Tailwind CSS.",

        aboutText4:
            "I also create Telegram bots and work with UI design. I enjoy turning ideas into real working projects.",

        skillsTitle: "My",
        skillsTitle2: "stack.",

        projectsTitle: "Selected",
        projectsTitle2: "projects.",

        project1:
            "A modern web project with an interactive interface.",

        project2:
            "An interactive project with a visual interface.",

        project3:
            "A responsive website with a modern design.",

        project4:
            "A landing page for a marketing project.",

        project5:
            "A modern responsive web interface.",

        project6:
            "A responsive website with a clean structure.",

        botText:
            "A Telegram bot for automation and user interaction.",

        designText:
            "Visual concepts, interfaces and digital design.",

        contactTitle: "Let's create",

        contactTitle2:
            "something amazing.",

        contactText:
            "Open to new projects, ideas and collaborations."
    }

};


/* =========================
   LANGUAGE
========================= */

const language = document.querySelector(".language");
const languageBtn = document.querySelector("#languageBtn");
const languageMenu = document.querySelector("#languageMenu");
const currentLanguage = document.querySelector("#currentLanguage");


function changeLanguage(lang) {

    const data = translations[lang];

    if (!data) return;


    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (data[key]) {
            element.textContent = data[key];
        }

    });


    document.documentElement.lang = lang;


    if (currentLanguage) {
        currentLanguage.textContent = lang.toUpperCase();
    }


    localStorage.setItem(
        "portfolioLanguage",
        lang
    );


    if (language) {
        language.classList.remove("active");
    }

}


/* Language button */

if (languageBtn && language) {

    languageBtn.addEventListener("click", event => {

        event.stopPropagation();

        language.classList.toggle("active");

    });

}


/* Close language menu */

document.addEventListener("click", () => {

    if (language) {
        language.classList.remove("active");
    }

});


/* Language menu */

if (languageMenu) {

    languageMenu.addEventListener("click", event => {

        event.stopPropagation();

    });

}


/* Language buttons */

document.querySelectorAll("[data-lang]").forEach(button => {

    button.addEventListener("click", () => {

        changeLanguage(button.dataset.lang);

    });

});


/* Load saved language */

const savedLanguage =
    localStorage.getItem("portfolioLanguage");

changeLanguage(savedLanguage || "ru");


/* =========================
   PROJECT FILTER
========================= */

const filters =
    document.querySelectorAll(".filter");

const cards =
    document.querySelectorAll(".project-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {

            item.classList.remove("active");

        });


        filter.classList.add("active");


        const category =
            filter.dataset.filter;


        cards.forEach(card => {

            const cardCategory =
                card.dataset.category;


            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* =========================
   MOUSE GLOW
========================= */

const glow1 =
    document.querySelector(".glow-1");

const glow2 =
    document.querySelector(".glow-2");


document.addEventListener("mousemove", event => {

    const x = event.clientX;
    const y = event.clientY;


    if (glow1) {

        glow1.style.transform =
            `translate(${x * 0.025}px, ${y * 0.025}px)`;

    }


    if (glow2) {

        glow2.style.transform =
            `translate(${x * -0.015}px, ${y * -0.015}px)`;

    }

});


/* =========================
   SMOOTH SCROLL
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();


            const target =
                document.querySelector(
                    link.getAttribute("href")
                );


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });