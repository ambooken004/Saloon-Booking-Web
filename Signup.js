const homeBtn = document.getElementById("home-btn");

const changeColor = (event) => {
        event.target.style.backgroundColor= "purple";
    }
const originalColor = (event) => {
    event.target.style= "none";
}

homeBtn.addEventListener("mouseover",changeColor);
homeBtn.addEventListener("mouseleave",originalColor);