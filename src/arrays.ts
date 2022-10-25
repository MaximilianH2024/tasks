/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }

    if (numbers.length === 1) {
        return [...numbers, ...numbers];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
    // return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNums = numbers.map((num: number): number => num * 3);

    return tripledNums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // const numArr = numbers.map(Number);

    const numArr = numbers.map((price: string): number =>
        isNaN(Number(price)) ? 0 : parseInt(price)
    );

    return numArr;

    // return numArr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const correctedVals = amounts.map((amount: string): number => {
        let spliced;

        if (amount.startsWith("$")) {
            if (amount.length === 0) {
                return 0;
            }
            if (amount.length > 1) {
                spliced = amount.substring(1);
            } else {
                return 0;
            }
            // spliced = amount.substring(1);
        } else {
            spliced = amount;
        }
        if (isNaN(parseFloat(spliced))) {
            return 0;
        } else {
            return parseFloat(spliced);
        }
    });

    return correctedVals;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let messagesRe = messages.map((message: string): string => {
        let upper = message;

        if (message.endsWith("!")) {
            upper = message.toUpperCase();
        }

        return upper;
    });

    messagesRe = messagesRe.filter(
        (message: string): boolean => !message.endsWith("?")
    );

    return messagesRe;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    // for (const word of words) {
    //     if (word.length < 4) {
    //         fourLetter += 1;
    //     }
    // }

    const isLessThanFour = (word: string): boolean => word.length < 4;
    const numberOfWords = words.filter(isLessThanFour);

    return numberOfWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    const allRGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue"
    );

    return allRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length != 0) {
        const arrSum = addends.reduce(
            (currSum: number, num: number) => currSum + num,
            0
        );
        // addends.sort();

        const addendsToString = addends.join("+");

        return arrSum.toString().concat("=", addendsToString);
    }
    if (addends.length === 0) {
        return "0=0";
    }

    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstInstanceOfNeg = values.findIndex(
        (value: number): boolean => value < 0
    );
    if (firstInstanceOfNeg != -1) {
        const firstPortion = values.slice(0, firstInstanceOfNeg);

        const pushedSum = firstPortion.reduce(
            (currSum: number, num: number) => currSum + num,
            0
        );

        firstPortion.push(pushedSum);

        const valueCopy = [...values];

        valueCopy.splice(firstInstanceOfNeg + 1, 0, pushedSum);

        return valueCopy;
    }
    if (firstInstanceOfNeg === -1) {
        const summed = values.reduce(
            (currSum: number, num: number) => currSum + num,
            0
        );

        const valueCopy = [...values];

        valueCopy.push(summed);

        return valueCopy;
    }
    return values;
}
