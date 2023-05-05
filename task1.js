//1
// 8. Создайте объект с днями недели. Ключами в нем должны служить номера 
// дней от начала недели (понедельник - первый и т.д.). Выведите на 
// экран текущий день недели.
const week = {
1: 'Monday',
2: 'Tuesday',
3: 'Wednesday',
4: 'Thirsday',
5: 'Friday',
6: 'Saturday',
7: 'Sunday',
}

// console.log(week[2])

//2
// 9. Пусть теперь номер дня недели хранится в переменной day, 
// например там лежит число 3. Выведите день недели, соответствующий 
// значению переменной day.

// day = week[2]

// console.log(day)

// 10. Напишите функцию, которая возвращает вложенный массив вида 
// `[[key, value], [key, value]]`.
//   * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

// const makeArr = (obj) => {
//    return Object.keys(obj).map(el => [el, obj[el]])
// }

// console.log(makeArr({ a: 1, b: 2 }))

// 11. Напишите функцию, которая делает поверхностную проверку объекта 
// на пустоту.
//   * Ожидаемый результат: ({}) => true,
//       ({ a: undefined }) => true,
//       ({ a: 1 }) => false

// const isEmpty = (obj) => {
//     if (Object.keys(obj).length === 0) {
//         return true
//     }
//     return false
// }

// console.log(isEmpty({}))

// 12. Напишите функцию, которая поверхностно сравнивает два объекта.
//   * Ожидаемый результат: True если объекты идентичны, false если 
// объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

// const compareObjects = (obj1, obj2) => {
// if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
//     return true
// }
// return false
// }

// console.log(compareObjects({ a: 1, b: 1 }, { a: 1, b: 2 }))

// 13. Напишите функцию, которая делает глубокую проверку на 
// пустоту объекта.
//   * Пустые значения: '', null, NaN, undefined, [], {}
//   * Ожидаемый результат: ({}) => true,
//       ({ a: { b: undefined } }) => true,
//       ({ a: { b: [] } }) => true

// const isEmpty = (obj) => {
    
// for (let i in obj) {
//     if (obj[i] === null || obj[i] === NaN ||
//          obj[i] === undefined || obj[i] === '' ||
//           JSON.stringify(obj[i]) === '[]' ||
//            JSON.stringify(obj[i]) === '{}' ) {
//         return true
//      } 
   
//     }
//     return false
//   }



    
 

// console.log(isEmpty({ a: '' } ))

// 14. Напишите функцию, которая делает глубокое сравнение объектов.
//   * Ожидаемый результат: True если объекты идентичны 
// ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true

// const compareObjects = (obj1, obj2) => {
//     let arr1 = JSON.stringify(Object.entries(obj1))
//     let arr2 = JSON.stringify(Object.entries(obj2))

//     if (arr1 === arr2) {
//         return true
//     }
//      return false
// }

// console.log(compareObjects({ a: 1, b: { c: 1 } }, { a: 2, b: { c: 1 } }))