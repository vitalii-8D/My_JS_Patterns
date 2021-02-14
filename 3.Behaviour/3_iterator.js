/*Итератор — это поведенческий паттерн проектирования,
   который даёт возможность последовательно
обходить элементы составных объектов,
   не раскрывая их внутреннего представления.*/

// Просто перебираємо об'єкти, але так як нам захочеться

// Головний ітератор
class MyIterator {
   constructor(data) {
      this.index = 0
      this.data = data
   }

   // Тут відбувається магія
   [Symbol.iterator]() {
      return {
         // То все так має бути, в цьому прикладі нічого кастомного
         // Все з документашки ES6
         next: () => {
            if (this.index < this.data.length) {
               return {
                  value: this.data[this.index++],
                  done: false
               }
            } else {
               this.index = 0
               return {
                  value: void 0,
                  done: true
               }
            }

         } // < next
      } // < return

   } // Symbol.iterator
}

const iterator = new MyIterator(['This', 'is', 'my', 'iterator'])
for (const val of iterator) {
   console.log('value: ', val);
}

console.log('---***---  Generator function  ---***---');

// А це функція-генератор, так теж можна ітерувати
function* generator(collection) {
   let index = 0;
   while (index < collection.length) {
      yield collection[index++]
   }
}

const gen = generator(['This', 'is', 'my', 'iterator'])
for (const val of gen) {
   console.log('value: ', val);
}

console.log(gen.next()); // У чувака на відосі працювало, в мене undefined :(

