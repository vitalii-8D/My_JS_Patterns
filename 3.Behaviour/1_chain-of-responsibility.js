/*Цепочка обязанностей — это поведенческий паттерн
проектирования, который позволяет передавать
запросы последовательно по цепочке обработчиков.
   Каждый последующий обработчик решает, может ли он
обработать запрос сам и стоит ли передавать
запрос дальше по цепи.*/

// Тупо в методі повертаємо this і викликаємо його через точку ще раз
// і ще раз, і ще раз (та скільки треба скільки і викликаємо)

// Наш представник патерна
class MySum {
   constructor(initialValue = 10) {
      this.sum = initialValue
   }

   add(value) {
      this.sum += value

      // Отут якраз вся фішка цього патерна
      return this
   }
}

const sum1 = new MySum()
console.log(sum1.add(8).add(10).add(1).add(9).sum) // 38

const sum2 = new MySum(5)
console.log(sum2.add(1).add(2).add(3).sum) // 11
