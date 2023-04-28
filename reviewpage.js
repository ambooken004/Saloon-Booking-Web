const textBox = document.getElementById("Textbox");
const displayFeedbacks = document.getElementById("display-feedbacks");

/* const feedBack1 = document.getElementById("1");
const feedBack2 = document.getElementById("2");
const feedBack3 = document.getElementById("3");
const feedBack4 = document.getElementById("4");
const feedBack5 = document.getElementById("5"); */
/* console.log(feedBack1); */

/* const feedBackArray = [feedBack1, feedBack2, feedBack3, feedBack4, feedBack5]; */
/* feedBackArray.forEach((feedback) => {
    console.log(feedback);
}) */

const addTextFeedback = () => {
    const feedbackBlock = document.createElement("div");
    feedbackBlock.style.backgroundColor = "rgba(255,255,255,0.5)";
    feedbackBlock.style.borderRadius = "10px";
    feedbackBlock.style.borderColor = "white";
    feedbackBlock.style.borderStyle = "solid";
    feedbackBlock.textContent = textBox.value;
    displayFeedbacks.append(feedbackBlock);
}


textBox.addEventListener("change",() =>  addTextFeedback());
