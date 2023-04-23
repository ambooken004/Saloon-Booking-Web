const timeSlots = document.getElementById("slots");


const timeSlot1 = document.getElementById("1");
const timeSlot2 = document.getElementById("2");
const timeSlot3 = document.getElementById("3");
const timeSlot4 = document.getElementById("4");
const timeSlot5 = document.getElementById("5");
const timeSlot6 = document.getElementById("6");
const timeSlot7 = document.getElementById("7");
const timeSlot8 = document.getElementById("8");
const timeSlot9 = document.getElementById("9");
const timeSlot10 = document.getElementById("10");
const timeSlot11 = document.getElementById("11");
const timeSlot12 = document.getElementById("12");
const timeSlot13 = document.getElementById("13");
const timeSlot14 = document.getElementById("14");


const markBooked = (event) => {
    event.target.textContent = "BOOKED";
    event.target.style.backgroundColor = "yellow";
    event.target.style.color = "green";
    event.target.style.borderRadius = "50px";
    
};



timeSlot1.addEventListener("click", markBooked);
timeSlot2.addEventListener("click", markBooked);
timeSlot3.addEventListener("click", markBooked);
timeSlot4.addEventListener("click", markBooked);
timeSlot5.addEventListener("click", markBooked);
timeSlot6.addEventListener("click", markBooked);
timeSlot7.addEventListener("click", markBooked);
timeSlot8.addEventListener("click", markBooked);
timeSlot9.addEventListener("click", markBooked);
timeSlot10.addEventListener("click", markBooked);
timeSlot11.addEventListener("click", markBooked);
timeSlot12.addEventListener("click", markBooked);
timeSlot13.addEventListener("click", markBooked);
timeSlot14.addEventListener("click", markBooked);

