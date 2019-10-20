var btnEls = document.querySelectorAll(".btn-outline-secondary");
var currentDayEl = document.querySelector("#currentDay");
var dataIndexNum = document.querySelectorAll(".form-control");
var currentTime = moment().format('h');


// Button click event
btnEls.forEach(function(el) {
    el.addEventListener("click", function(e) {

        
        e.preventDefault();

        if (document.getElementById("9am")) {
        var user9Input = document.getElementById("9am").value
        localStorage.setItem("9am", user9Input);
        JSON.parse(localStorage.getItem(user9Input))
        } else if (document.getElementById("10am")) {
            var user10Input = document.getElementById("10am").value
            localStorage.setItem("10am", user10Input);
        }


        
        
        
    });
})

currentDayEl.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');

for (var i = 0; i < dataIndexNum.length; i++) {
if (currentTime > dataIndexNum[i]) {
    dataIndexNum[i].classList.add("past");
} else if (currentTime < dataIndexNum[i]) {
    dataIndexNum[i].classList.add("future");
} else {
    dataIndexNum[i].classList.add("present");
}
}
