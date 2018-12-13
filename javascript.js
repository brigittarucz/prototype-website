function toggleFunction() {
    var sideMenu = document.getElementById("menu");
    if (sideMenu.style.display == "none") {
        sideMenu.style.display = "block";
    } else {
        sideMenu.style.display = "none";
    }
}

function sendFunction() {
    alert("You have succesfully submitted your assignment");
}

function dissapearFunction() {
    var clickButton = document.getElementById("dissapear");
    var wholeLine = document.getElementById("dissapear2");
    var boxJobs = document.getElementById("boxJobs");
    var addedAlready = document.getElementById("addedAlready");
    if ( clickButton.style.display != "none") {
        wholeLine.addEventListener("animationend", displayNone);
        wholeLine.classList.add("dissapear");
        function displayNone() {
            wholeLine.style.display = "none";
            addedAlready.style.display = "block";
        }
    }
    else {
        boxJobs.style.display = "block";
    }
}

/* function dissapearFunction() {
    var clickedButton = document.getElementById("dissapear");
    var wholeLine = document.getElementById("dissapear2");
    if (clickedButton.style.display == "block") {
        clickedButton.addEventListener("animationend", displayNone);

        function displayNone() {
            wholeLine.classList.add("dissapear");
            wholeLine.style.display = "none";
        }
    }
    else {
        var boxJobs = document.getElementById("boxJobs");
            boxJobs.style.display = "block";
    }
} */
