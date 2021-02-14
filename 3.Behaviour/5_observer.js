/*Наблюдатель — это поведенческий паттерн проектирования,
   который создаёт механизм подписки,
   позволяющий одним объектам следить
и реагировать на события,
   происходящие в других объектах.*/

// Але ліпше заінсталити RxJS :)

// На нього будемо підписуватись
class Subject {
   constructor() {
      this.observers = []
   }

   subscribe(observer) { // Щоб підписатися
      this.observers.push(observer) // Додає спостерігач в список, можна передати одну функцію
   }

   unsubscribe(observer) { // Відписатися
      this.observers = this.observers.filter(obs => obs !== observer)
   }

   fire(action) { // Емітувати подію, зміну
      this.observers.forEach(observer => {
         // В циклі тригериться метод у спостерігачів
         observer.update(action)
      })
   }
}

// Наш спостерігач
class Observer {
   constructor(state = 5) {
      this.state = state // Цей стейт буде мінятися в залежності від емітованої події
      this.initialState = state
   }

   update(action) {
      switch (action.type) {
         case 'INC':
            this.state = ++this.state
            break
         case 'DEC':
            this.state = --this.state
            break
         case 'ADD':
            this.state += action.payload
            break
         default: this.state = this.initialState
      }
   }
}

const stream$ = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(20)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

console.log(obs1.state); // 5
console.log(obs2.state); // 20

stream$.fire({type: 'INC'})
stream$.fire({type: 'INC'})

console.log(obs1.state); // 7
console.log(obs2.state); // 22

stream$.fire({type: 'DEC'})
stream$.fire({type: 'ADD', payload: 10})

console.log(obs1.state); // 16
console.log(obs2.state); // 31
