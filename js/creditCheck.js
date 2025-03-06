function creditCheck(str) {
    arr_of_nums = str.split('')
    let isValid = timesTwoEveryOtherNum(arr_of_nums.reverse())

    return isValid
}

function timesTwoEveryOtherNum(arr) {
    let new_arr = []
    let count = 0
    for(i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            let strToNum = parseInt(arr[i])
            new_arr.push(strToNum)
            count += strToNum
        }
        else {
            digitTimesTwo = parseInt(arr[i]) * 2

                if (digitTimesTwo > 9) {
                    let summedDigit = sumDigits(digitTimesTwo)
                    new_arr.push(summedDigit)
                    count += summedDigit
                } else {
                    new_arr.push(digitTimesTwo)
                    count += digitTimesTwo
                }
        }
    }
    return validatingCard(count)
}

function sumDigits(num) {
    let splittedNum = num.toString().split('')
    
    return parseInt(splittedNum[0]) + parseInt(splittedNum[1])
}

function validatingCard(num) {
    return num % 10 == 0 ? "The number is valid!" : "The number is invalid!"
}
module.exports = {creditCheck}