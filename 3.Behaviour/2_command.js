/*
Команда — это поведенческий паттерн проектирования,
   который превращает запросы в объекты,
   позволяя передавать их как аргументы при вызове методов,
   ставить запросы в очередь, логировать их,
   а также поддерживать отмену операций.*/

// В конструкторі класу Командера створюємо екземпляр класу з методами
// Потім передаючи різні строкові команди в кінцевий екземпляр...
// ... викликаємо різні методи того класу
// (що в середину передавали, я сподіваюсь пойму коли буду повторювати -_0 )

// Екземпляри цього класу будемо передавати в Командер
class MyMath {
   constructor(initialValue = 0) {
      this.num = initialValue
   }

   // Повертає квадрат (число в квадраті, не сам квадрат, звістно)
   square() {
      return this.num ** 2
   }
   // Повертає куб (ну ви зрозуміли)
   cube() {
      return this.num ** 3
   }
}

// Наш командер
class Command {
   constructor(subject) {
      // subject має бути співзвучний з методом передаваємого класу
      this.subject = subject
      // Просто логуємо послідовність викликів
      this.commandsExecuted = []
   }

   // Метод-виконавець (ну ясно же з назви)
   execute(command) {
      // Типу логуємо команду
      this.commandsExecuted.push(command)

      // Отут сама соль
      // Ми викликаємо за допомогою [] метод вкладеного екземпляру
      // іііііі, парам-пам - виконуємо його
      return this.subject[command]()
   }
}

// Отак от це виглядає
const x = new Command(new MyMath(2))

console.log(x.execute('square')); // 4
console.log(x.execute('cube')); // 8