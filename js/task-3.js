

function checkForSpam (message) {
    const blacklisteWord1 = "spam";
    const blacklistWord2 = "sale";

    const messageLowerCase = message.toLowerCase();
    const messageUpperCase = message.toUpperCase();

    const resolt = messageLowerCase.includes(blacklisteWord1) || messageLowerCase.includes(blacklistWord2) ||
                    messageUpperCase.includes(blacklisteWord1) || messageUpperCase.includes(blacklistWord2);
    return resolt;


    
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true