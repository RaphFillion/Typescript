// Exercice 1
 enum Level {
  ADMIN,
  MODERATOR,
  SUPPORT,
  USER_READ_ONLY,
}

const users = {
  username: 'Batman',
  level: Level.SUPPORT,
}

if (users.level === Level.SUPPORT) {
  console.log(`
    Bienvenue ${users.username}
    Vous travaillez au service support
    ${Level.SUPPORT}
  `)
}


// Exercice 2
enum Color {
  Red = 1,
  Green = 5,
  Blue = 8
}

let c = Color.Green
let colorname: string = Color[5]
console.log(colorname, c)


// Exercice 3
let inputData: unknown
let inputAge: number

inputData = 20

if (typeof inputData === 'number') {
  // inputData est maintenant de Type number 
  inputAge = inputData
  console.log(typeof inputAge)
}


// Exercice 4
const gift = (age: number) => age + 3
const data = (arg) => console.log(`Résultat: ${arg}`)

console.log(gift(20))
data(gift(20))


// Exercice 5
const giftAlt = (num: number) => num + 3
console.log(giftAlt(10))

let age: (num: number) => number
age = giftAlt
console.log(age(10))


// Exercice 6
const buildName = (firstName: string, lastName?: string) => {
  if (lastName) { return `${firstName} ${lastName}` }
  else { return firstName }
}

const buildNameAlt = (firstName: string, lastName = 'smith') => {
  return `${firstName} ${lastName}`
}

let result = buildName('Bob', 'Adams')
let result2 = buildName('Bob')
console.log(result, result2)

let result3 = buildNameAlt('bob', 'adams')
console.log(result3)


// Exercice 7
const colorContainer = document.getElementById('colors')

let colors = function(arg_one: string, ...restOfColors: string[]) {
  const h1 = document.createElement('H1')
  h1.innerHTML = `Titre: ${arg_one}`
  colorContainer?.appendChild(h1)

  const ul = document.createElement('ul')
  for (let i in restOfColors) {
    let li = document.createElement('li')
    li.innerHTML = restOfColors[i]
    ul.appendChild(li)
  }
  colorContainer?.appendChild(ul)
}

colors('Liste 1','Green', 'Red', 'Orange');
colors('Liste 2','Blue', 'Black', 'Pink');


// Exercice 8 
const constructName = (firstName: string, ...restOfName: string[]) => {
  return `${firstName} ${restOfName.join(' ')}`
}

let constructNameFun: (fnam: string, ...rest: string[]) => string = constructName


// Exercice 9
const sum = (num: number, gift: (arg: number) => void) => {
  const sumUp =  num + 3
  gift(sumUp)
}

sum(40, (num) => console.log(num))


// Exercice 10
type NumStr = number|string

let data_alt: NumStr
let user_id: NumStr


// Exercice 11
const PI = 3.14 // Type 3.14
const API_KEY = 'jfkdlosahgkdjsloai' // Type jfkdlosahgkdjsloai
const count = 200 // Type 200
const boolValue = false // Type false

let PI_alt = 3.14 // Type number

// Literal type
let PI_other: 3.14 // Type 3.14

function total(one: number, two: number, totalVersion?: 'getStringValue'|'getSquare') {
  let resultat
  if (totalVersion === 'getStringValue') {
    resultat = one.toString() + two.toString() // Type string
  } else if (totalVersion === 'getSquare') {
    const val = one + two
    resultat = Math.pow(val, 2)
  } else {
    resultat = one + two // Type number
  }
  return resultat
}

const summed = total(20, 10, 'getStringValue')
console.log(summed)

const summed_alt = total(20, 10)
console.log(summed_alt)

const summed_other = total(20, 10, 'getSquare')
console.log(summed_other)
