const coin = document.getElementById("coin");
const result = document.getElementById('result');
const flipButton = document.getElementById("flip-button");

coin.addEventListener("click", flipCoin);
flipButton.addEventListener("click", flipCoin);

function flipCoin() {
	const random = Math.random();
	random < 0.5 ? heads() : tails();
}

function heads() {
	coin.src = "/resources/heads.svg";
    result.innerText = 'Heads';
}

function tails() {
	coin.src = "/resources/tails.svg";
    result.innerText = 'Tails'
}
