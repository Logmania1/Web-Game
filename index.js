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

    deal() {
        hidden = myDeckOfCards.deck.pop();
        dealerSum += getValue(hidden);
        dealerAceCount += checkAce(hidden);
        
        while (dealerSum < 17) { 
            let cardImg = document.createElement('img');
            let card = myDeckOfCards.deck.pop();
            cardImg.src = "./Assets/CardFaces/" + card + ".jpg";
            cardImg.id = 'card'
            dealerSum += getValue(card);
            dealerAceCount += checkAce(card);
            document.getElementById("dealercards").append(cardImg);
         
        }
        console.log(dealerSum)
    }
}

const myDeckOfCards = new DeckOfCards()
myDeckOfCards.init()
myDeckOfCards.shuffle()



function getValue(card) {
    let data = card.charAt(0)
    let value = data

    if (isNaN(value)) {
        if (value == 'A') {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

var dealerSum = 0;
var playerSum = 0;

var dealerAceCount = 0;
var playerAceCount = 0;

var hidden;
var deck;

var canHit = true;

document.getElementById("deal").addEventListener('click', playerdeal)

function playerdeal() {
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement('img');
        let card = myDeckOfCards.deck.pop();
        cardImg.src = "./Assets/CardFaces/" + card + ".jpg";
        cardImg.id = 'card'
        playerSum += getValue(card);
        playerAceCount += checkAce(card);
        document.getElementById("playercards").append(cardImg);
    }

    console.log(playerSum)
}

document.getElementById('hit').addEventListener('click', hit);

function hit() {
    if (!canHit) {
        return;
    }
    let cardImg = document.createElement('img');
            let card = myDeckOfCards.deck.pop();
            cardImg.src = "./Assets/CardFaces/" + card + ".jpg";
            cardImg.id = 'card'
            playerSum += getValue(card);
            playerAceCount += checkAce(card);
            document.getElementById("playercards").append(cardImg);

        if (reduceAce(playerSum, playerAceCount) > 21) {
            canHit = false;
        }
}

document.getElementById("stay").addEventListener('click', stay)

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}

function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount)
    playerSum = reduceAce(playerSum, playerAceCount)

    canHit = false;
    document.getElementsByClassName('blankcard').src = "./Assets/CardFaces/" + hidden + '.jpg'

    if (playerSum > 21) {
        window.location.href = './lose.html'
    }
    else if (dealerSum > 21) {
        window.location.href = './win.html'
    }
    else if (playerSum == dealerSum) {
        window.location.href = './tie.html'
    }
    else if (playerSum > dealerSum) {
        window.location.href = './win.html'
    }
    else if (playerSum < dealerSum) {
        window.location.href = './lose.html'
    }
}

myDeckOfCards.deal()
