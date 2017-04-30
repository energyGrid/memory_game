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
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
};

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("cards[cardId].cardImage");
	console.log("cardss[cardId].suit");
	//if cardsInPlay array is 2 and the cards are the same 
		//send alert
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	checkForMatch();
	};

flipCard(0);
flipCard(2);