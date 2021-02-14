/*Шаблонный метод — это поведенческий паттерн проектирования,
   который определяет скелет алгоритма,
   перекладывая ответственность
за некоторые его шаги на подклассы.
   Паттерн позволяет подклассам переопределять шаги алгоритма,
   не меняя его общей структуры.*/

class Employee {
   constructor(name, salary) {
      this.name = name
      this.salary = salary
   }

   responsibilities() {}

   work() {
      return `${this.name} doing ${this.responsibilities()}`
   }

   getPaid() {
      return `${this.name} has salary ${this.salary}`
   }
}

class Developer extends Employee {
   constructor(name, salary) {
      super(name, salary);
   }

   responsibilities() {
      return `Writing code`
   }
}
class Tester extends Employee {
   constructor(name, salary) {
      super(name, salary);
   }

   responsibilities() {
      return `Testing code`
   }
}


const dev = new Developer('Vitalii', 20000)
console.log(dev.getPaid()); // Vitalii has salary 20000
console.log(dev.work()); // Vitalii doing Writing code

const tester = new Tester('Vitalii', 20000)
console.log(tester.getPaid()); // Vitalii has salary 20000
console.log(tester.work()); // Vitalii doing Testing code
