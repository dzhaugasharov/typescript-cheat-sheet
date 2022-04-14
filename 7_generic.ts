const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStings: Array<string> = ['Hello', 'Darkhan']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStings)