/*Адаптер — это структурный паттерн проектирования,
   который позволяет объектам с несовместимыми интерфейсами
работать вместе.*/

// Якщо з'являється якийсь новий інтерфейс, то обов'язково є люди яким лінь на нього переписувати код
// Адаптер в поміч!
// Схоже що ми просто викликаєм методи нового інтерфейсу в старому синтаксисі(просто здалося)

// Клас старого калькулятора
class OldCalc {
   operations(t1, t2, operation) {
      switch (operation) {
         case 'add':
            return t1 + t2
         case 'sub':
            return t1 - t2
         default:
            return NaN
      }
   }
}

// Клас нового калькулятора
class NewCalc {
   add(t1, t2) {
      return t1 + t2
   }

   sub(t1, t2) {
      return t1 - t2
   }
}

// Ну сам адаптер
class CalcAdapter {
   constructor() {
      // А ви думали що будете справді юзати старий калькулятор? Ха-ха!
      this.calc = new NewCalc()
   }

   // Схожий на старий калькулятор, синтаксично (здалося може)
   operations(t1, t2, operation) {
      switch (operation) {
         case 'add':
            // Хех, а тут викликаємо методи з нового  (типу працюємо з новим функціоналом на старому синтаксису)
            return this.calc.add(t1, t2)
         case 'sub':
            return this.calc.sub(t1, t2)
         default:
            return NaN
      }
   }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, 'add')); // 15

const newCalc = new NewCalc()
console.log(newCalc.add(10, 5)); // 15

// Новий функціонал, старий інтерфейс (шось типу того)
const adapter = new CalcAdapter()
console.log(oldCalc.operations(10, 5, 'sub')); // 5
