/*Одиночка — это порождающий паттерн проектирования,
   который гарантирует, что у класса есть
только один экземпляр, и предоставляет к нему
глобальную точку доступа.*/

// Клас бази даних (серйозно, реальний приклад)
class Database {
   constructor(data) {
      // Перевіряємо флажочок про існування екземпляру
      if (Database.exists) {
         // Яко є - повертаємо його, нічого більше не створюємо
         return Database.instance
      }
      // Ну, а якщо ні, то створюємо, додаємо в інстанс і повертаємо
      Database.instance = this
      // Виставляємо флажочок, само собою
      Database.exists = true
      this.data = data
   }

   getData() {
      return this.data
   }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData()) // MongoDB

const mysql = new Database('MySQL')
console.log(mysql.getData()) // Теж MongoDB

console.log(mongo)
