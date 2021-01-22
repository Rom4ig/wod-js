//тернарный оператор
console.log('---tern operator---')

const tern = 5 > 10 ? 0 : 1 //if?true:false
console.log(tern)

//преобразование массива в строку, создание массива из строки
console.log('---sting-array-string---')

const string = 'abcdef'
const string2 = 'a,b,c,d,e,f'
const array = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(array.toString())
console.log(array.join('+'))

console.log(string.split(''))
console.log(string2.split(','))

//работа методов push, pop, shift, unshift
console.log('---arrays---')

const array_for_push_unshift = ['a', 1, '3', {a: 2}]

const pop = array_for_push_unshift.pop() //remove last item
console.log(array_for_push_unshift, pop)

array_for_push_unshift.push(123) //insert to end
console.log(array_for_push_unshift)

const shift = array_for_push_unshift.shift() //remove first item
console.log(array_for_push_unshift, shift)

array_for_push_unshift.unshift(321) //insert to start
console.log(array_for_push_unshift)

//удаление дубликатов из массива
console.log('---array with duplicate---')

const array_duplicate = [1, 2, 3, 1, 4, 1, 5]
console.log([...new Set(array_duplicate)])

const new_array = array_duplicate.filter((item, index) =>
  array_duplicate.indexOf(item) === index
)
console.log(new_array)

const new_array_2 = array_duplicate.reduce((accumulator, currentValue) =>
    accumulator.includes(currentValue) ? accumulator : [...accumulator, currentValue],
  [] // <-init value
)
console.log(new_array_2)

//типы данных есть в js
console.log('---types---')

console.log(typeof undefined)
console.log(typeof 0)
console.log(typeof 10n)
console.log(typeof true)
console.log(typeof 'foo')
console.log(typeof Symbol('id'))
console.log(typeof Math)
console.log(typeof null)
console.log(typeof (() => {
}))

//реализация классов в js
console.log('---classes---')

class A {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  increaseAll() {
    this.a++
    this.b++
    this.c++
  }
}

const a = new A(1, 2, 'qwe')
console.log(a)
console.log(a.b)
a.increaseAll()
console.log(a)

//использование Math
console.log('---Math---')
const number = 1.23456

console.log(Math.floor(number))
console.log(Math.max(3, 5, -10, 0, 1))
console.log(Math.min(3, 5, -10, 0, 1))

console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

//get/ set
console.log('---get/set---')

class B {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  get full_value() {
    return this.a + this.b + this.c
  }

  set change_a(value) {
    this.a = value + 100
  }
}

const b = new B(1, 3, '4')
console.log(b)
console.log(b.full_value)
b.change_a = 2
console.log(b)

//приватные/публичные методы и поля (класса и сущности)
console.log('---private/public---')

class C {
  #count = 0 // # - private

  get value() {
    return this.#count
  }

  increment() {
    this.#count++
  }

  /*  #increments(value) {
      this.#count = this.#count + value
    }*/ //15.4+ node version
}

const counter = new C()
counter.increment()
console.log(counter.value)
//console.log(counter.#count) //error
//counter.#count = 42 //error

//spread syntax
console.log('---spread syntax---')

const dateFields = [2020, 1, 30]
const date = new Date(...dateFields)
console.log(date)

const bc = ['b', 'c']
const ade = ['a', ...bc, 'd', 'e']
console.log(ade)

const obj1 = {a: 'qwe', b: 42}
const obj2 = {a: 'qwer', c: 13}
const clonedObj = {...obj1}
console.log(clonedObj)

const mergedObj = {...obj1, ...obj2}
console.log(mergedObj)

// path / fs / child_process / global
//В файле Fs

// promise, для чего он нужен, во что он преобразуется 'в коде'
// в callback. Объект, который хранит состояние. 3 состояния. pending, rejected, resolved


// TODO: медоды promise-а (ошибка в wod)
// создание promise (разные способы)
console.log('---PROMISE---')
const promise1 = new Promise((resolve, reject) => {
  resolve('promise')
})
console.log(promise1)
promise1.then((value => console.log(value))).catch((error) => {
  throw error
})

async function promise() {
  return 1
}

async function test() {

}

console.log(promise())
console.log(test().then())

// async/await, во что он преобразуется 'в коде'
// В промис

// классовое наследование
  console.log('---classes---')

class Parent {
  test(value) {
    console.log(value)
    this.x = value
  }
}

class Child extends Parent {
  test(value) {
    super.test(value)
    console.log('child')
  }
}

const parent = new Parent()
const child = new Child()
parent.test(5)
console.log(`parent.x = ${parent.x}`)
console.log(`child.x = ${child.x}`)
child.test(1)
console.log(`child.x = ${child.x}`)

// setTimeout(), setInterval()
console.log('---setTimeout/setInterval---')
function counter_increase(a) {
  console.log(a)
}

let timerId = setInterval(counter_increase, 2000, 3);

setTimeout(() => { clearInterval(timerId); console.log('Stopped'); }, 5000);
// работа с несколькими пакетными менеджерами
// npm, yarn

// работа с файловой системой

