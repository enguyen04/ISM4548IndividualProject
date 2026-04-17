// index.html JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // delcaring 
    let goButton = document.getElementById("goButton");
    let subButton = document.getElementById("subButton");
    let form = document.getElementById("groupForm");
    let closeBtn = document.querySelector(".close");

    // go to biasSelect.html when button is clicked
    if (goButton) {
        goButton.addEventListener("click", function () {
            window.location.href = "biasSelect.html";
        });
    } // end if 

    // displays a message
    if (subButton) {
        subButton.addEventListener("click", function () {
        document.getElementById("subForm").textContent = "This doesn't actually do anything, but thanks for subscribing!";
        });
    } // end if 

    // my group form
    if (form) {
        form.addEventListener("submit", handleQuiz);
    } // end if form

    // close my pop up
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            document.getElementById("resultModal").style.display = "none";
        });
    } // end if closeBtn

}); // end DOMContentLoaded

    // quiz form handling
    function handleQuiz(e) {
        e.preventDefault(); // stops refresh

        if (!questValid()) return;

        displayGroup();
    }; // end handleQuiz


    // display group form quiz result
function displayGroup() {

    let modal = document.getElementById("resultModal");
    let resultImage = document.getElementById("resultImage");
    let resultText = document.getElementById("resultText");

    let result = calculateResult(); // FIXED

    if (result === "huntrx") {
        resultText.textContent = "You got HUNTR/X!";
        resultImage.src = "huntrix.gif";
    } else {
        resultText.textContent = "You got Saja Boys!";
        resultImage.src = "sajaboys.gif";
    }
    modal.style.display = "flex";
}; // end displayGroup


    // validate form
    function questValid() {
        let valid = true;

        for (let i = 1; i <= 5; i++) {
            document.getElementById(`q${i}Error`).textContent = "";
        } // end for

        for (let i = 1; i <= 5; i++) {
            let options = document.getElementsByName(`q${i}`);
            let answered = false;

            for (let option of options) {
                if (option.checked) {
                    answered = true;
                    break;
                }
            } // end for if

            if (!answered) {
                document.getElementById(`q${i}Error`).textContent = "Please select an option";
                valid = false;
            }
        } // end for loop with for if if

        return valid;
    }; // end questValid validate form

// calc scores
function calculateResult() {

    let huntrxScore = 0;
    let sajaScore = 0;

    for (let i = 1; i <= 5; i++) {

        let answer = document.querySelector(`input[name="q${i}"]:checked`);

        if (!answer) continue; // safety check

        if (answer.value === "huntrx") {
            huntrxScore++;
        } else {
            sajaScore++;
        }
    }

    return huntrxScore > sajaScore ? "huntrx" : "saja";
} // end calculateResult
