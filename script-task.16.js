function defineSuit(card) {
    if (card.match(/♣/g)) {
    return "clubs";
    }
    else if (card.match(/♠/g)) {
        return "spades";
    }
    else if (card.match(/♦/g)) {
        return "diamonds";
    }
    else 
        return "hearts";
}