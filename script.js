const coin = document.getElementById("coin");
const result = document.getElementById("result");
const flipButton = document.getElementById("flip-button");

coin.addEventListener("click", flipCoin);
flipButton.addEventListener("click", flipCoin);

function flipCoin() {
	coin.style.animation = "none";
    void coin.offsetHeight; // Forces a reflow, so the coin has to be animated every time there is a result
	Math.random() < 0.5 ? heads() : tails();
}

function heads() {
	coin.style.animation = "coinAnimation 0.2s ease-in-out";
	coin.src = "/resources/heads.svg";
	result.innerText = "Heads";
}

function tails() {
	coin.style.animation = "coinAnimation 0.2s ease-in-out";
	coin.src = "/resources/tails.svg";
	result.innerText = "Tails";
}
