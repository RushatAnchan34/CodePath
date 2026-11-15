console.log("Welcome to CodePath!");

const startButton = document.querySelector(".start-bth");

startButton.addEventListener("click", () => {
    document.querySelector('#languages').scrollIntoView({
        behavior: "smooth"
    });
});