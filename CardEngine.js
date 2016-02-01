//Matyas Fenyves
//Card Game Engine
var CLUB = 0, DIAMOND = 1, HEART = 2, SPADE = 3 ;
var ACE = 1, JACK = 11, QUEEN = 12, KING = 13 ;
var RANK = 0, SUIT = 1, IMAGE = 2 ;

function generateStandardDeck()
{
	var deck = new Array() ;
	for(r = ACE ; r <= KING ; r++)
	{
		for(s = CLUB ; s <= SPADE ; s++)
		{
			cardString = r + ";" + s + ";" + r + "-" + s + ".png" ;
			deck.push(cardString) ;
		}
	}
	return deck ;
}

function extraction(cardString,dataIndex)
{
	var cardArray = cardString.split(";") ;
	return cardArray[dataIndex] ;
}
function shuffle(deck)
{
	var tmpDeck = new Array() ;
	while(deck.length > 0)
	{
		rand = parseInt(Math.random()*deck.length) ;
		card = dispatchCard(deck, rand) ;
		tmpDeck.push(card) ;
	}
	return tmpDeck ;
}
function dispatchCard(deck, cardIndex)
{
	removedCard = deck.splice(cardIndex,1) ;
	return removedCard[0] ;
}
function dealCard(deck)
{
	return dispatchCard(deck,0) ;
}
function insertCard(deck, card, index)
{
	if(!index)
		index = 0 ;
	deck.splice(index, 0, card) ;
}