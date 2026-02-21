// Simple SPA Router using Vanilla JS
// No page reloads

const app = document.getElementById("app");
const loading = document.getElementById("loading");

// Views
const Home = () => `
    <h2>Home Page</h2>
    <p>Welcome to our mini Single Page Application.</p>
`;

const About = () => `
    <h2>About Page</h2>
    <p>This SPA is built using Vanilla JavaScript and History API.</p>
`;

const Contact = () => `
    <h2>Contact Page</h2>
    <p>Email: nagabhoshanabhat@email.com</p>
`;

// Routes
const routes = {
    "/": Home,
    "/about": About,
    "/contact": Contact
};

// Router Function
const router = async () => {
    loading.style.display = "block";
    app.innerHTML = "";

    // simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const path = window.location.pathname;
    const view = routes[path] || Home;

    app.innerHTML = view();
    loading.style.display = "none";
};

// Navigation
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// Click Event Delegation
document.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        const url = e.target.getAttribute("href"); 
        navigateTo(url);
    }
});

// Back/Forward button support
window.addEventListener("popstate", router);

// Initial Load
router();