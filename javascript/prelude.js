function fetchPreludeDiv() {
    const preludeContainer = document.querySelector(".prelude-container");
    preludeContainer.style.display = "flex";

    startPreludeWithInterval();
}

function startPreludeWithInterval() {
    setTimeout(() => {
        setInterval(fetchPreludeTitle, 60);
    }, 2000);
}

function fetchPreludeTitle() {
    const preludeTitle = document.querySelectorAll(".prelude-container span");  
    targetEachLetterFromTitle(preludeTitle);
}

function targetEachLetterFromTitle(preludeTitle) {
    for (let i = 0; i < preludeTitle.length; i++) {
        
        if (preludeTitle[i].classList.contains("fade")) {
            preludeTitle[i].classList.remove("fade");
            preludeTitle[i].classList.add("fill");
            break;
        }
    }
}