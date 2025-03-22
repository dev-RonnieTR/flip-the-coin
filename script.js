const coin = document.getElementById("coin");
const result = document.getElementById("result");
const flipButton = document.getElementById("flip-button");

coin.addEventListener("click", flipCoin);
flipButton.addEventListener("click", flipCoin);

function flipCoin() {
    requestAnimationFrame(() => {
        coin.style.animation = "none";
        requestAnimationFrame(() => {
            Math.random() < 0.5 ? heads() : tails();
        });
    });
}

function heads() {
    setCoinState("Heads", "resources/heads.svg");
}

function tails() {
    setCoinState("Tails", "resources/tails.svg");
}

function setCoinState(outcome, imageSource) {
    coin.style.animation = "coinAnimation 0.2s ease-in-out";
    coin.src = imageSource;
    coin.alt = outcome;
    result.textContent = outcome;
}
