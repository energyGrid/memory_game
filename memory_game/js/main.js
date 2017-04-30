var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds"
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};

var flipCard = function() {
	var cardID = this.getAttribute("src");
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("cards[cardId].cardImage");
	console.log("cardss[cardId].suit");
	
	documents.setAttribute("src", "cards[cardID].cardImage")

	if (cardsInPlay.length === 2) {
	checkForMatch();
};

var createBoard = function() {
	for (var i =  0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		document.createElement("img").setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", this[i]);
		CardElement.addEventListener("click", function(flipCard));
		document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();
