const coin = document.getElementById("coin");
const flipButton = document.getElementById("flip-button");

function flipCoin() {
	const random = Math.random();
	random < 0.5 ? heads() : tails();
}

function heads() {
	coin.src = "/resources/heads.svg";
}

function tails() {
	coin.src = "/resources/tails.svg";
}
