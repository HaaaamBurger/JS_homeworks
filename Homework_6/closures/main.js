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
    };

    this.takeCredits = function (credits) {
        if (credits <= cardTemplate.transactionLimit) {
            cardTemplate.balance -= credits;
        } else {
            console.error(`Transaction limit is : ${cardTemplate.transactionLimit}.`);
        }
    };
    this.setTransactionLimit = function (credits) {
        if (credits >= 0) {
            cardTemplate.transactionLimit = credits;
        } else {
            console.error('You cannot set transaction limit less than 0 credits !');
        }
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
const card = new UserCard(1);
const card1 = new UserCard(2);
