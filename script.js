console.log("Script is linked and running!");
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("box");
    const scrollBar = document.getElementById("menu");

    menuButton.addEventListener("click", (event)=> {
        event.stopPropagation();
        scrollBar.classList.toggle("hidden");
        scrollBar.classList.toggle("show");
        console.log("ceva");
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

