/*Фасад — это структурный паттерн проектирования,
   который предоставляет простой интерфейс к сложной системе классов,
   библиотеке или фреймворку.*/

// ${'div'} Типу приклад з jQuery
// Щось типу як фабрика + декоратор 2 в одному (але не точно)

// Огортає об'єкти додаючи якусь інформацію, функціональність, притаманна декільком класам

// Тупо звичайний клас скарги
class Complaints {
   constructor() {
      this.complaints = []
   }

   reply(complaint) {
   }

   add(complaint) {
      this.complaints.push(complaint)

      return this.reply(complaint)
   }
}

// Тупо наслідуванням розширюємо клас і переписуємо по окремо метод виводу скарги
class ProductComplaints extends Complaints {
   reply({id, customer, details}) {
      return `Product: ${id} ${customer} (${details})`
   }
}
// Тупо наслідуванням розширюємо клас і переписуємо по окремо метод виводу скарги
class ServiceComplaints extends Complaints {
   reply({id, customer, details}) {
      return `Service: ${id} ${customer} (${details})`
   }
}

// А отут вже сам декоратор (плюшки нижче)
class ComplaintRegistry {
   register(customer, type, details) {
      // Додає айдішку
      const id = Date.now()
      // Впринципі можно було щось ще накрутити...

      let complaint

      // Визначає тим скарги
      if (type === 'service') {
         complaint = new ServiceComplaints()
      }
      if (type === 'product') {
         complaint = new ProductComplaints()
      }

      return complaint.add({id, customer, details});
   }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Vitalik', 'service', 'Грубий продавець')) // Service: 1613263101060 Vitalik (Грубий продавець)
console.log(registry.register('Karl', 'product', 'Фіговий товар')) // Product: 1613263101071 Karl (Фіговий товар)
