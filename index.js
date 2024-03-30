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
        suits.forEach(suit => {
            values.forEach(value => {
                const card = {
                    suit: suit,
                    value: value
                }
                this.deck.push(card)
            })
        })
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }


    }

    deal() {
        myDeckOfCards.hand = myDeckOfCards.deck.slice(50)
        myDeckOfCards.shuffle()
        myDeckOfCards.dealerHand = myDeckOfCards.deck.slice(50)
        
    }

}


const myDeckOfCards = new DeckOfCards()
myDeckOfCards.init()
myDeckOfCards.shuffle()
myDeckOfCards.deal()
console.log(myDeckOfCards)
