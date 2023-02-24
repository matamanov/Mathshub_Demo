// alert('Alert!')

// const skill  = document.getElementById('skill')
// const isLove = document.getElementById('isLove') 
// const string = document.getElementById('string')

// console.log(skill.innerText)

//  const skillText   = prompt('Какой язык вы учите?','Пока не в курсе')
// const isLoveValue = confirm('Вы любите изучаемый язык?') 

// console.log(isLoveValue)

// skill.innerText = skillText 
// isLove.innerText = isLoveValue

// string.innerHTML = "123"

// var c = 8

//// ----- День 2 -----

// let a = 7
// const b = a

// STRING
// const str1 = 'I\'m OK'
// const str2 = "You can say \n \"Hello!\""
// const str3 = `I said ${str1}`

// console.log(str1, typeof str1)
// console.log(str2, typeof str2)
// console.log(str3, typeof str3)

// // NUMBER
// // + - * / **
// const num1 = 75 + 15
// const num2 = 79 * 9
// const num3 = 4 ** 2

// const rem = 8 * "a" //NaN - not a number
// console.log(rem)

// const inf = 17 / 0 // Infinity

// BIGINT (-2**53 - 1 ; 2**53 - 1 )
// const BIGINT = 103123123n

// BOOLEAN
// true / false
// > < >= <= >== <== == ===
// const bool = ( 10 > 5 )
// console.log(bool)

// NULL
// let empty = null
// confirm.log(typeof empty) // фича = object

// UNDEFINED
// let box = undefined // То же самое, что и let box
// console.log(box, typeof box)

// SYMBOL (нечто уникальное)
// const uniq  = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2) // false

// OBJECT (объект - это набор пар "ключ-значение")
// const obj = {
//     name:"Sasha", surname:"Happy", age: 19, isHappy: true
// }
// console.log(obj.name)
// console.log(obj['name'])

// const arr = ["Аня", 18, false] //массив - array; это тоже OBJECT
// arr[3] = "Facebook"
// console.log(arr)
// console.log(arr[3])

// const variant = "option1"

// //// ----- День 3 -----

// console.log(5 == "5")  //сравнение по значению: true
// console.log(5 === "5") //сравнение по типу: false

// console.log( "abc" > 15 ) 

// // Фича :))
// console.log( null > 0 )   //false    
// console.log( null >= 0 )  //true

// console.log( null == undefined )   //true    
// console.log( null === undefined )  //false

// console.log( typeof("15"))          //string
// console.log( typeof(Number("15")) ) //number
// console.log( typeof(+"15") ) //number - простой перевод в число (поставить "+" перед строкой)
// console.log( +"abc" ) //NaN

// console.log(String(15)) //перевод в строкой тип
// console.log(15 + "")    //простой перевод в строковый тип

// console.log(Boolean(15)) //true
// console.log(Boolean(-2)) //true
// console.log(Boolean(0))  //false - только 0, или пусто (пустая строка), или null

// console.log(Boolean(!15)) //false
// console.log(Boolean(!-2)) //false
// console.log(Boolean(!0))  //true - см. выше: то же самое, но отрицание

// console.log(Boolean(!!15)) //true - двойное отрицание - это истина :)

// const go = prompt("Куда мы побежим?", "Домой") // confirm("Побежали?") // false // true
// if (go) {
//     alert("Побежали!")
// } else (
//     alert("Stop!")
// )

// const userName = prompt("Who are you?", "Zorro") // confirm("Побежали?") // false // true
// if (userName === "Admin") {
//     alert("Hello, boss!")
// } else if (userName === "Zorro" || userName === "Anonim") {
//     alert(`I don't know you!`)
// } else if (!userName) {
//     alert("Canceled!")
// }
// else (
//     alert(`Hi, ${userName}`)
// )

// const count = prompt("До скольки считаем?", 20)
// let i = 0
// while (i <= count) {
//     console.log(i) // можно писать ++i и i++ тут - разница есть!!! последовательность: вывод-увеличение, увеличение-вывод 
//     i++ // i += 1
// }

// // если написать в условии цикла ( i <= true ), то это бесконечный цикл !!!
// do {
//     console.log(i++)
// } while (i <= count) // цикл выполняется хотя бы 1 раз до проверки условия

// const arr = []
// for (let j = 1; j <= 50; j++) { //объявляемая переменная j внутри FOR видна только внутри FOR !!!
//     arr.push(j) //заполнение элементов массива (push добавляет в конец)
// }
// // console.log(arr)

//// ARRAY LOOP
// // for (let j = 1; j <= 50; j++) {
// for (elem of arr) {
//      if ((elem%3) === 0 ) {console.log(elem)}
// }

// // OBJECTS LOOP
// const obj = {
//     name: "Sasha",
//     age: 25,
//     city: "Voronezh"
// }
// for ( key in obj ) {
//     console.log(key, "=", obj[key])
// }

// FUNCTION

// // declaration
// function scream(a, b) {
//     // const result = a * b 
//     // return result
//     return a * b
//     // alert("После Return это бессмысленно!")
// }
// // scream()
// // console.log(scream(15, 10))

// // expression
// const wowScream = function () {
//     alert("Wow!")
// }
// // wowScream()

// // arrow
// const arrow = () => {
//     alert("arror in the sky!")
// }
// // arrow()

// const gameElements = document.getElementById("my_game").children
// const randomValue1 = ( Math.random() * 100 ).toFixed(0)
// const randomValue2 = ( Math.random() * 100 ).toFixed(0)
// const isPlus       = Math.random() > 0.5

// if (isPlus) {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else {
//     gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }

// Game
// нажимаем на кнопку начать - игра запускается: генерируется задача
// пользователь может ввести ответ, должна появиться кнопка "Проверить"

// вводим число, нажимаем Проверить - сравниваем ввод пользователя с ответом
// вывести результат и правильное значение, сменить кнопку на "Начать заново"
// начать заново - см. начало

// const isPlus       = Math.random() > 0.5

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomValue1 = getRandomNumInRange(0,100)
    // const randomValue2 = getRandomNumInRange(0,100)

    // let symbol 
    // if (Math.random() > 0.5)  {
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }
    const symbol = (Math.random() > 0.5) ? "+" : "-"

    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

// btnGame.onclick = () => {
const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась:"
        userAnswer.value = null
        // генерируем задачу и ответ
        // const task = getTask()
        // показываем задачу пользователю, даём поле ввода ответа
        userTask.innerText = getTask()
        userAnswer.hidden = false
        // меняем кнопку и меняем состояние
        btnGame.innerText = "Проверить!"
        // gameState.taskInProcess = true
        toggleGameState()
    } else {
        // ставнить ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        // вывести результат
        userTask.innerText = userTask.innerText + ' = ' + gameState.rightAnswer
        // вывести поздравления
        title.innerText = (isRight) ? "Верно!!!" : "Ошибочный ответ!"
        // поменять кнопку и состояние 
        btnGame.innerText = "Начать заново!"
        // gameState.taskInProcess = false
        toggleGameState()
    }
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    // console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    }
    else if (e.key === "Escape") {
        userAnswer.blur()
    }
})




// console.dir(document)
// const chosenElems = document.querySelector(".my_game") // поиск элемента по имени класса
// const chosenElems = document.querySelectorAll(".my_game") // поиск ВСЕХ элементов по имени класса
// const chosenElems = document.querySelectorAll("#my_game p") // поиск элемента p под элементом по ID = my_game


const chosenElems = document.querySelectorAll(".chosen_block-container > div")
const counterElem = document.querySelector(".chosen_block span")

// const chosenState = {
//     countElements: 0,
// }
// const changeCount = (value) => {
//     chosenState.countElements += value
//     counterElem.innerText = chosenState.countElements
// }
const chosenState = {
    countElements: 0,
    selCountValue(value) {
        this.countElements += value
        counterElem.innerText = this.countElements
    }
}

const eventFunc = (e) => {
    // выбрать элемент, выделить с помощью класса
    // chosenElems[i].className = "chosen_element" 
    // e.target.className = "chosen_element"
    // запустить счетчик
    // counterElem.innerText = +counterElem.innerText + 1
    if (e.target.className === "") {
        e.target.className = "chosen_element"
        // counterElem.innerText = +counterElem.innerText + 1
        // changeCount(1)
        chosenState.selCountValue(Number(e.target.innerText))
    } else {
        e.target.className = ""
        // counterElem.innerText = counterElem.innerText - 1
        // changeCount(-1)
        chosenState.selCountValue(-1 * Number(e.target.innerText))
    }
}

for (let i = 0; i < chosenElems.length; i++) {
    chosenElems[i].addEventListener("click", eventFunc)
}
// chosenElems[2].removeEventListener("click", eventFunc)


// Day 6

// const timeIsOver = () => {
//     alert("Время вышло!")
// }
// setTimeout(timeIsOver, 2000)

// const alarm = setInterval(timeIsOver, 3000)
// clearInterval(alarm)

// const alarm = setInterval(() => {
//     let wantToSleep = confirm("Хотите спать?")    
//     if (wantToSleep) {
//         console.log("tik")   
//     } else {
//         clearInterval(alarm)        
//     }
// }, 3000)

const postsBlock = document.querySelector(".posts_block-container")
const showPostsBTN = document.querySelector(".posts_block button")

// showPostsBTN.onclick = getPosts

function addPost(title, body) {
    const postsTitle = document.createElement("h3")
    const postsBody = document.createElement("span")
    const postsItem = document.createElement("p")

    postsTitle.innerText = title
    postsBody.innerText = body

    postsItem.append(postsTitle, postsBody)
    postsBlock.append(postsItem)
}
getPosts()

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            for (el of data) {
                addPost(el.title, el.body)
            }
            // addPost(data[7].title, data[7].body)
        })
        .catch(err => console.log(err.message))
}

// function createPost(title, body, userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({
//             // title:  title,
//             // body:   body,
//             // userId: userId,
//             title,
//             body,
//             userId,
//         }),
//         headers: {
//             'content-type': 'application/json; charset=UTF-8'
//         },
//     })
//         .then(res => {
//             console.log(res)
//             return res.json()
//         })
//         .catch(err => console.log(err.message))
// }
// createPost("title", "body", 15)