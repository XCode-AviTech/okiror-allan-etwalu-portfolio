const projects = [
  {
    name: "Tapoh FC Website",
    description:
      "A football club website project developed to present club information, activities, updates and an engaging online presence.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    role: "Website Development Project",
    features: [
      "Responsive website interface",
      "Football club presentation",
      "Structured content sections"
    ],
    live: "",
    github: "https://xcode-avitech.github.io/Tapoh-Fc"
  },

  {
    name: "AviTech Solutions Website",
    description:
      "The AviTech Solutions business website created to present technology services, digital solutions and the company's professional online presence.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    role: "Business Website",
    features: [
      "Business service presentation",
      "Responsive website",
      "Digital solutions showcase"
    ],
    live: "https://xcode-avitech.github.io/AviTech-Solutions",
    github: ""
  },

  {
    name: "BKS Engineering Services Website",
    description:
      "A modern responsive website project created to showcase BKS Engineering Services' engineering, security, electrical and ICT solutions.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    role: "Website Development Project",
    features: [
      "Responsive company website",
      "Services presentation",
      "Security and ICT solutions showcase"
    ],
    live: "",
    github: "https://xcode-avitech.github.io/bks-demo-website"
  },

  {
    name: "Julius Paul Kabonge Website",
    description:
      "A personal website project developed from a customizable web template, demonstrating practical front-end development and website customization.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    role: "Portifolio Project",
    features: [
      "Responsive website layout",
      "Template customization",
      "Personal profile presentation"
    ],
    live: "",
    github: "https://xcode-avitech.github.io/JPaul_Kabonge"
  }
];

const projectGrid = document.getElementById("projectGrid");
if (projectGrid) {
  projectGrid.innerHTML = projects.map((p, i) => `
    <div class="col-md-6">
      <article class="project-card reveal">
        <div class="project-thumb"><span>${p.role}</span><i class="bi bi-window-stack"></i></div>
        <div class="project-body">
          <div class="project-kicker"></div>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
          <ul class="feature-list">${p.features.map(f => `<li><i class="bi bi-check2"></i>${f}</li>`).join("")}</ul>
          <div class="project-actions">
            ${p.live ? `<a class="text-link" href="${p.live}" target="_blank" rel="noopener">Live <i class="bi bi-globe"></i></a>` : ``}
            ${p.github ? `<a class="text-link" href="${p.github}" target="_blank" rel="noopener">GitHub <i class="bi bi-github"></i></a>` : ``}
          </div>
        </div>
      </article>
    </div>
  `).join("");
}

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("allan-theme");
if (savedTheme === "light") document.body.classList.add("light-theme");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("allan-theme", document.body.classList.contains("light-theme") ? "light" : "dark");
    themeToggle.innerHTML = document.body.classList.contains("light-theme")
      ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  });
}

const nav = document.querySelector(".glass-nav");
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (nav) nav.classList.toggle("scrolled", y > 20);
  if (backTop) backTop.classList.toggle("show", y > 500);
});
if (backTop) backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navMenu");
    if (menu && menu.classList.contains("show") && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }});
}, {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = document.getElementById("contactForm");

if (form) {

    emailjs.init({
        publicKey: "hT4fzuOh9CNnUrLjr"
    });

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const status = document.getElementById("formStatus");
        const button = document.getElementById("sendMessageBtn");

        if (!form.checkValidity()) {

            form.classList.add("was-validated");

            status.textContent =
                "Please complete the required fields.";

            status.className = "form-error";

            return;
        }

        button.disabled = true;

        const originalButtonHTML = button.innerHTML;

        button.innerHTML = `
            Sending...
            <i class="bi bi-hourglass-split"></i>
        `;

        status.textContent = "";
        status.className = "";

        try {

            await emailjs.sendForm(
                "service_hxifwbx",
                "template_fwayq8s",
                form
            );

            status.textContent =
                "Message sent successfully. I'll get back to you soon.";

            status.className = "form-success";

            form.reset();
            form.classList.remove("was-validated");

        } catch (error) {

            console.error("EmailJS Error:", error);

            status.textContent =
                "Sorry, your message could not be sent. Please try again or contact me directly.";

            status.className = "form-error";

        } finally {

            button.disabled = false;
            button.innerHTML = originalButtonHTML;

        }

    });
}
