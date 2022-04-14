// strings
const str: string = "hello"
const message: string = 'Hello Typescript'



// booleans
const isFetching: boolean = true
const isLoading: boolean = false



// int
const int: number = 23
const float: number = 23.4
const num: number = 2e10



// arrays
const numberArray: number[] = [1, 2, 3, 4, 5]
const numberArray2: Array<number> = [1, 3, 4, 5]
const words: string[] = ['Hello', 'Typescript']



// tuples
const contacts: [string, number] = ['Name', 12323]



// any
let variable: any = 32
variable = 'str'
variable = []



// functions
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Darkhan')



// never
function throwError(message: string): never {
    throw new Error('Error')
}

function inifinite(): never {
    while(true) {}
}



// type
type Login = string
const login: Login = 'admin'
// const login2: Login = 3  - wrong

type ID = string | number
const id: ID = 'id12'
const userId: ID = 123
// const id3: ID = true  - wrong

type SomeType = string | null | undefined