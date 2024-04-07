/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
const templeList = []; // Array to store temple data fetched from the JSON file

/* async displayTemples Function */
const displayTemples = (temples) => {
    // Sort temples alphabetically by templeName
    temples.sort((a, b) => a.templeName.localeCompare(b.templeName));
    temples.forEach((temple) => {
        // Create HTML elements for each temple
        const article = document.createElement("article");
        const h3 = document.createElement("h3")
        const img = document.createElement("img");

        // Set temple name and image attributes
        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append temple name and image to the article element
        article.appendChild(h3);
        article.appendChild(img);

        // Append the article element to the temples container on the webpage
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
    // Clear existing templeList and push new temple data from JSON response
    templeList.length = 0;
    templeList.push(...await response.json());

    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML ="";
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset(); 
    const filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "alphabetical":
            displayTemples([...temples]); // Display all temples sorted alphabetically
            break;
        case "all":
        default:
            displayTemples(temples); // Display all temples if no filter selected or on default
            break;
    } 
};

getTemples(); // Initial function call to fetch and display temples when the page loads

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });