//CARD DECK
var CLUB = 0, DIAMOND = 1, HEART = 2, SPADE = 3;
var ACE = 1, JACK = 11, QUEEN = 12, KING = 13;
var RANK = 0, SUIT = 1, IMAGE = 2;

//Returns 0 as the index of the card at the top of the deck.
function topOfDeck()
{
	return 0;
}

//Returns the last index of the deck.
function bottomOfDeck(deck)
{
	return deck.length - 1;
}

//Returns the number of cards in the deck.
function getNumCards(deck)
{
	return deck.length;
}

//Generates and returns a standard deck of 52 poker cards.
function generateStandardDeck()
{
	var deck = new Array();
	
	for (s = CLUB; s <= SPADE; s++)
	{
		for (r = ACE; r <= KING; r++)
		{
			cardStr = r + ";" + s + ";" + r + "-" + s + ".png";
			
			deck.push(cardStr);
		}
	}
		
	return deck;
}

//Returns a single piece of information from a card string based on the index.
//A card string is a semi-colon delimited string made in the format rank;suit;imageFileName
//
//card is a string in this format
//dataIdx is the index of the piece of information requested
function extractCardData(card, dataIdx)
{
	var cardInfo = card.split(";");
	return cardInfo[dataIdx];
}

//Returns a single card removed from the deck
//
//deck is the card deck
//idx is the position of the card you want to remove
function removeCard(deck, idx)
{
	var card = deck.splice(idx, 1);
	return card[0];
}

//Returns an array of cards removed from the deck
//
//deck is the deck from which the cards are being removed
//idx is the position of the first card to be removed
//numCards is the number of cards removed from the deck
function removeCards(deck, idx, numCards)
{
	var cardsRemoved = deck.splice(idx, numCards);
	return cardsRemoved;
}

//Inserts a card into the deck.
//
//deck is the deck receiving the card
//card is the card being inserted into the deck
//idx is the position at which the card will be inserted
function insertCard(deck, card, idx)
{
	if (!idx)
	{
		idx = topOfDeck();
	}
		
	deck.splice(idx, 0, card);
}


//Inserts a group of cards into a deck.
//
//deck is the deck receiving the cards
//cards is an array of cards being inserted into the deck
//idx is the position at which the cards will be inserted
function insertCards(deck, cards, idx)
{
	deck.splice(idx, 0, cards);
}

//Returns a deck of cards made out of 2 decks of cards.
//
//receiver is the deck that will hold all of the cards
//giver is the deck being added to receiver
function combineDecks(receiver, giver)
{
	return receiver.concat(giver);
}

//Shuffles a deck of cards.
//
//deck is the deck of cards being shuffled
function shuffle(deck)
{
	var tmpDeck = new Array();
	while (deck.length > 0)
	{
		cardIdx = parseInt(Math.random() * deck.length);
		card = removeCard(deck, cardIdx);
		tmpDeck.push(card);
	}

	return tmpDeck;
}

//Returns true if there are no cards in the deck, false if there are one or more cards in the deck.
//
//deck is the deck being tested.
function isEmpty(deck)
{
	return deck.length == 0;
}

//Returns and removes the top card from the deck.
//
//deck is the deck from which the card is being dealt
function dealCard(deck)
{
	return removeCard(deck, topOfDeck());
}