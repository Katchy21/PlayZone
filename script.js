console.log("Script is linked and running!");
// Menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("box");
    const scrollBar = document.getElementById("menu");

    menuButton.addEventListener("click", (event)=> {
        event.stopPropagation();
        scrollBar.classList.toggle("hidden");
        scrollBar.classList.toggle("show");
    });

    scrollBar.addEventListener("click", (event) => {
        if(event.target.tagName === "A") {
            event.preventDefault();
            event.stopPropagation();
            const targetId = event.target.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);


            targetElement.scrollIntoView({behavior:"smooth"});

            scrollBar.classList.remove("show");
            scrollBar.classList.add("hidden");
        }
    })

    document.addEventListener("click", () => {

        if (scrollBar.classList.contains("show")) {
            scrollBar.classList.remove("show");
            scrollBar.classList.add("hidden");
        }
    })
})

// Info button functionality
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.image-info').forEach(infoButton => {
        infoButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from bubbling up to the anchor tag
            event.preventDefault(); // Prevent the anchor tag's default behavior (navigation)
            
            const row = infoButton.closest('.row');
            row.classList.toggle('active'); // Toggle the class to reveal text and slide the image
        });
    });
    
    document.querySelectorAll('.image a').forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            if (!event.target.closest('.image-info')) {
                return; // Allow the anchor to work normally if the image (not the info button) is clicked
            }
            event.preventDefault(); // Prevent the default link behavior if the info button was clicked
        });
    });
})

// Site go to 
