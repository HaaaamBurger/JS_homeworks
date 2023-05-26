function UserCard(number) {
    const cardTemplate = {balance: 100, transactionLimit: 100,historyLogs: [], key: number,};

    this.getCardOptions = function (){
        return {
           balance: cardTemplate.balance,
           transactionLimit: cardTemplate.transactionLimit,
           historyLogs: cardTemplate.historyLogs,
           key: cardTemplate.key,
        }
    };

    this.putCredits = function (credits) {
        cardTemplate.balance += credits;
        cardTemplate.historyLogs.push({operationType: 'Received credits', credits: credits, operationTime: new Date()});
    };

    this.takeCredits = function (credits) {
        if (credits <= cardTemplate.transactionLimit) {
            cardTemplate.balance -= credits;
        } else {
            console.error(`Transaction limit is : ${cardTemplate.transactionLimit}.`);
        }


        cardTemplate.historyLogs.push({operationType: 'Withdrawal of credits', credits: credits, operationTime: new Date()});
    };
    this.setTransactionLimit = function (credits) {
        if (credits >= 0) {
            cardTemplate.transactionLimit = credits;
        } else {
            console.error('You cannot set transaction limit less than 0 credits !');
        }
        const date = new Date();
        cardTemplate.historyLogs.push({operationType: 'Transaction limit change', credits: credits, operationTime: date});
    };

    this.transferCredits = function (credits, recipient) {
        if (credits > 0 && cardTemplate.balance >= credits) {
            credits -= (credits / 100) * 0.5;
            cardTemplate.balance -= credits;
            recipient.putCredits(credits);
        } else if (credits < 0){
            console.error('You cannot send 0 credits !');
        } else {
            console.error('Something went wrong !');
        }
    }
}

function UserAccount(name) {
    this.name = name;
    this.cards = [];
    this.addCard = function (number) {
        if (this.cards.length < 3) {
            this.cards.push(new UserCard(number));
        } else {
            console.error('Maximum cards limit reached !(3)');
        }
    };
    this.getCardById = function (cardKey) {
        switch (cardKey) {
            case 1:
                return this.cards[0].getCardOptions();
            case 2:
                return this.cards[1].getCardOptions();
            case 3:
                return this.cards[2].getCardOptions();
            default:
                console.error('Something went wrong !');
        }
    }
}
let user = new UserAccount('Bob');
user.addCard(1);
user.addCard(2);

let card1 = user.getCardById(1);
let card2 = user.getCardById(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300,card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());




