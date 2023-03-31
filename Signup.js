const homeBtn = document.getElementById("home-btn");
const checkBox = document.getElementById("checkbox");
const registerBtn = document.getElementById("register-btn");
registerBtn.disabled=true;

const changeColor = (event) => {
        event.target.style.backgroundColor= "blue";
    };
const originalColor = (event) => {
    event.target.style= "none";
};

const onClicked = () => {
    alert("Thanks for registering...");
}

homeBtn.addEventListener("mouseover",changeColor);
homeBtn.addEventListener("mouseleave",originalColor);
checkBox.addEventListener("change", function()
{
    if(this.checked)
    {
        registerBtn.disabled=false;
        registerBtn.style.backgroundColor="green";

    }
    else
    {
        registerBtn.disabled=true;
        registerBtn.style.backgroundColor="black";
    }
});
registerBtn.addEventListener("click",onClicked);