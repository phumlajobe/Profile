function controlHover(contentId) {
    // Adding the hover effect to the active link
    let activeLink = document.querySelector(`.profile-nav a[href="${contentId}"]`);
    let allLinks = document.querySelectorAll('.profile-nav li');
    activeLink.parentElement.classList.add("hovered");

    // Remove "hovered" class from all list items except the one containing the active link
    allLinks.forEach(link => {
        if (link !== activeLink.parentElement) {
            link.classList.remove("hovered");
        }
    });
}

function displayContent(contentId) {
    controlHover(contentId);

    // Find the content that corresponds to the clicked link
    let contentElement = document.querySelector("#portfolio-content");
    let display = document.querySelector(contentId);

    // Clear previous content in portfolio-content
    contentElement.innerHTML = "";

    // Instead of innerHTML, append the actual content element
    contentElement.appendChild(display.cloneNode(true));  // Clone the node to avoid duplication
}

function findActiveLink(link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        // Get the target content ID from the link's href attribute
        const targetContentId = link.getAttribute("href");
        displayContent(targetContentId);
    });
}

// Set up the navigation links to listen for clicks
let navElement = document.querySelectorAll("#profile-list a");
navElement.forEach(findActiveLink);

// Initially hide the content section
let allContent = document.querySelector("#content");
allContent.style.display = "none";

// Trigger the initial content display (About Me section)
displayContent("#about-section");

// Redirect function for the portfolio
function redirectToPortfolio() {
    window.location.href = "#portfolio";
}

let aboutElement = document.querySelector(".nav-links a[href='#about']");
aboutElement.addEventListener("click", function () {
    alert("Please click View Portfolio button ⬇️");
});
