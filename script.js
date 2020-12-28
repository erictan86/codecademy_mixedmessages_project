function randNum(num) {
    return Math.floor(Math.random() * num);
}

//Four D random generator
const fourD = {
    luckyNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    luckStatus: ['terrible luck', 'bad luck', 'good luck', 'super good luck'],
    betAmount: ['$1', '$2', '$5', '$10', '$20']
}

//my personal pick
let luckyNum = []
let luckyStatus = []
let luckAmount = []

//Iterate over object
for (let num in fourD) {
    if (num === 'luckyNumber') {
        for (let i = 0; i < 4; i++) {
            luckyNum.push(fourD['luckyNumber'][randNum(fourD['luckyNumber'].length)])
        }
    } 
    else if (num === 'luckStatus') {
        luckyStatus.push(fourD['luckStatus'][randNum(fourD['luckStatus'].length)])
    }
    else if (num === 'betAmount') {
        luckAmount.push(fourD['betAmount'][randNum(fourD['betAmount'].length)])
    }
}

function generateMessage(num, status, amount) {
    console.log(`Your lucky number is ${num.join('')}.`)
    console.log(`Your luck status is ${luckyStatus.toString()}.`)
    console.log(`Your bet amount is ${luckAmount.toString()}.`)
}

generateMessage(luckyNum, luckyStatus, luckAmount)

