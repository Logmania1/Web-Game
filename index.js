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

// function addImage() {
//     let img = document.createElement('img');
//         img.src = `Assets/CardFaces${this.value}+${this.suit}.jpg`;
//         document.getElementsByClassName('dealercards').appendChild(img);
// }

const myDeckOfCards = new DeckOfCards()
myDeckOfCards.init()
myDeckOfCards.shuffle()

const button = document.createElement('button');
    button.innerText = 'Deal';        
    button.id = 'deal'; 
        
        
    button.addEventListener('click', () => {    
        myDeckOfCards.deal();
        // addImage(myDeckOfCards.dealerHand(0))
        // addImage(myDeckOfCards.dealerHand(1))
        console.log(myDeckOfCards.dealerHand)
        console.log(myDeckOfCards.hand)
});

document.body.appendChild(button);

// myDeckOfCards.deal()


