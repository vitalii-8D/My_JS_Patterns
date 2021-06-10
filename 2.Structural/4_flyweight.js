/*Легковес — это структурный паттерн проектирования,
   который позволяет вместить бóльшее количество объектов в отведённую оперативную память.
   Легковес экономит память, разделяя общее состояние объектов между собой,
   вместо хранения одинаковых данных в каждом объекте.*/

// Шось типу сінглтона, але для масиву об'єктів

// Звичайний клас машинки
class Car {
   constructor(model, price) {
      this.model = model
      this.price = price
   }
}

// Клас який допомагає створювати машинку через цей паттерн
class CarFactory {
   constructor() {
      // Масив вже існуючих схожих машинок
      this.cars = []
   }

   create(model, price) {
      // Перевірка на вже існуючий об'єкт
      const candidate = this.getCar(model)
      if (candidate) {
         return candidate
      }

      // Якщо моделі не існує - робимо нову машинку
      const newCar = new Car(model, price)
      this.cars.push(newCar)

      return newCar
   }

   getCar(model) {
      return this.cars.find(car => car.model === model)
   }
}

const factory = new CarFactory()

const bmwX6 = factory.create('bmw', 10000)
const audi = factory.create('audi', 12000)
console.log(bmwX6); // Car { model: 'bmw', price: 10000 }
console.log(audi); // Car { model: 'audi', price: 12000 }

const bmwX3 = factory.create('bmw', 8000)
console.log(bmwX3); // теж Car { model: 'bmw', price: 10000 }
