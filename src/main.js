const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/assets/projects/e-commerce-website.png",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/assets/projects/task-manager.webp",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/assets/projects/portfolio-website.jpg",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform with user authentication and markdown support.",
    technologies: ["Gatsby", "GraphQL", "Contentful"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/assets/projects/blog-website.jpeg",
  },
  {
    title: "Weather App",
    description:
      "A weather application that provides real-time weather updates.",
    technologies: ["React", "OpenWeatherMap API"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/assets/projects/weather-app.png",
  },
  {
    title: "Chat Application",
    description: "A real-time chat application using WebSocket technology.",
    technologies: ["React", "Node.js", "Socket.io"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/assets/projects/chat-app.png",
  },
  {
    title: "Recipe Finder",
    description: "A recipe search application using the Edamam API.",
    technologies: ["React", "Edamam API"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/assets/projects/recipe-finder.png",
  },
  {
    title: "Expense Tracker",
    description: "A personal finance tracker to manage expenses and income.",
    technologies: ["React", "Firebase"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/assets/projects/expense-tracker.webp",
  },
];
// Dynamically render projects
const projectsContainer = document.getElementById("projects-container");
projects.forEach((project) => {
  const techTags = project.technologies
    .map(
      (tech) => `
    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
      ${tech}
    </span>
  `
    )
    .join("");
  const projectCard = `
    <div class="bg-gray-50 p-6 rounded-xl shadow-md card-hover">
      <img src="${project.image}" alt="${project.title}" class="w-full h-40 object-cover rounded-md mb-4">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">${project.title}</h3>
      <p class="text-gray-600 mb-4">${project.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">${techTags}</div>
      <div class="flex space-x-4">
        <a href="${project.githubLink}" class="text-primary hover:underline flex items-center" target="_blank">
          <i class="fab fa-github mr-1"></i> Code
        </a>
        <a href="${project.demoLink}" class="text-primary hover:underline flex items-center" target="_blank">
          <i class="fas fa-external-link-alt mr-1"></i> Live Demo
        </a>
      </div>
    </div>
  `;
  projectsContainer.innerHTML += projectCard;
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile navbar toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});
