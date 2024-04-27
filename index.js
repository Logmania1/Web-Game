class DeckOfCards {
    constructor() {
        this.deck = []
        this.discardPile = []
        this.hand = []
        this.dealerHand = []
        
    }

    init() {
        const suits = ['hearts', 'spades', 'diamonds', 'clubs']
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.deck.push(values[j] + suits[i]);
            }
        }
            }
        
    

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }


    }

    deal(a) {
        myDeckOfCards.hand = myDeckOfCards.deck.slice(52-a)
        
        
    }
    hit(a) {
        myDeckOfCards.hand.length = 0
        myDeckOfCards.hand = myDeckOfCards.deck.slice(52-a)
        
    }
    stay(a) {
        myDeckOfCards.shuffle()
        myDeckOfCards.dealerHand = myDeckOfCards.deck.slice(52-a)
    }
}

function addImage() {
    for (let i = 0; i < myDeckOfCards.dealerHand.length; i++) {
        let img = document.createElement('img');
        img.src = `Assets/CardFaces/${myDeckOfCards.dealerHand.value}+${myDeckOfCards.dealerHand.suit}.jpg`;
        document.getElementsByClassName('dealercards').appendChild(img);
    }
}
var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var playerAceCount = 0;

var hidden;
var deck;

var canHit = true;
const myDeckOfCards = new DeckOfCards()
myDeckOfCards.init()
myDeckOfCards.shuffle()


// myDeckOfCards.deal()

console.log(myDeckOfCards)
