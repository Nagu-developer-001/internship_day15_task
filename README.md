# internship_day15_task
Mini Single Page Application Using Vanilla JavaScript

Project Overview

This project is a mini Single Page Application built using HTML CSS and Vanilla JavaScript. It demonstrates how modern web applications handle routing and navigation without reloading the entire page.

The application uses the History API to update the browser URL dynamically and render different views such as Home About and Contact inside a single HTML file.

Features

Single Page Application architecture
Dynamic content rendering
Navigation without page reload
Client side routing using JavaScript
History API integration using pushState
Browser back and forward button support
Loading simulation during view switching
Clean separation of routing and view logic

Technologies Used

HTML
CSS
Vanilla JavaScript
Browser History API

Project Structure

index.html contains the navigation and main content container
style.css contains styling
app.js contains routing logic and view rendering

How It Works

The application loads only one HTML file. When a user clicks on a navigation link the default browser reload is prevented using JavaScript.

The History API pushState method updates the URL without refreshing the page. The router function reads the current path from window location pathname and matches it with predefined routes.

The matching view function returns dynamic HTML which is injected into the main content container. When the user presses the browser back or forward button the popstate event triggers the router again ensuring correct view rendering.

Authentication or server communication is not required because this is a purely frontend routing implementation.