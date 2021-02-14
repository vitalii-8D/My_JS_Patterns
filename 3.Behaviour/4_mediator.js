/*Посредник — это поведенческий паттерн проектирования,
   который позволяет уменьшить связанность множества
классов между собой, благодаря перемещению
этих связей в один класс-посредник.*/

// Ми засовуємо екземпляр Посередника в кожен екземпляр взаємодіючого екземпляру
// Посередник надає методи для взаємодії з іншими екземплярами

// Клас користувача
class User {
   constructor(name) {
      this.name = name
      this.room = null // Покищо null :)
   }

   send(message, to) { // Викликаємо метод Посередника
      this.room.send(message, this, to)
   }

   receive(message, from) { // Приймаємо повідомлення від посередника
      console.log(`${from.name} => ${this.name}: ${message}`);
   }
}

// Посередник, він же чат рум
class ChatRoom {
   constructor() {
      this.users = {} // Список юзерів
   }

   register(user) {
      this.users[user.name] = user  // Додаємо в список екземпляр юзера
      user.room = this  // Присвоюємо чат-рум(Посередника) цьому полю юзера
   }

   send(message, from, to) { // Взаємодіє з бзерами, шле повідомлення
      if (to) {
         to.receive(message, from) // Змушує приймаючого юзера метод прийняти повідомлення
      } else { // Інакше ітерує список користувачів і відправляє то всим
         Object.keys(this.users).forEach(key => {
            if (this.users[key] !== from) {
               this.users[key].receive(message, from)
            }
         })
      }
   }
}

// Створюємо юзерів
const vitalik = new User('Vitalik')
const vika = new User('Vika')
const denis = new User('Denis')

const room = new ChatRoom() // Створюємо чат рум

room.register(vitalik) // Реєструємось
room.register(vika)
room.register(denis)

// Відправляємо повідомлення
vitalik.send(`Hello!`, vika) // Vitalik => Vika: Hello!
vika.send('Hi, how are you?', vitalik) // Vika => Vitalik: Hi, how are you?
denis.send('How about me?') // Denis => Vitalik: How about me?
                                    // Denis => Vika: How about me?

// console.log(vitalik);
