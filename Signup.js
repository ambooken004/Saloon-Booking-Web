const homeBtn = document.getElementById("home-btn");
const checkBox = document.getElementById("checkbox");
const registerBtn = document.getElementById("register-btn");
registerBtn.disabled=true;
registerBtn.style.backgroundColor="grey";

const changeColor = (event) => {
        event.target.style.backgroundColor= "purple";
    };
const originalColor = (event) => {
    event.target.style= "none";
};

const disableRegisBtn =(event) => {
    const checkBoxChecked = event;
    if(checkBoxChecked)
    {
        registerBtn.disabled=false;
        registerBtn.style.backgroundColor="black";
    }

    // Write code for the condition (if checkbox is unchecked after it's  been checked)...  LATER
}
const oncli = () => {
    alert("Thanks for registering...");
}


homeBtn.addEventListener("mouseover",changeColor);
homeBtn.addEventListener("mouseleave",originalColor);
checkBox.addEventListener("click",disableRegisBtn);
registerBtn.addEventListener("click",oncli);