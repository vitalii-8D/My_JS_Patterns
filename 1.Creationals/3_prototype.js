/*Прототип — это порождающий паттерн проектирования,
   который позволяет копировать объекты,
   не вдаваясь в подробности их реализации.*/

// Суть паттерну - метод "clone()" у самому об'єкті, який повертає новий екземпляр класу...
// ... вклавши в нього власні поля (ну бо сам об'єкт навіть до приватних має доступ)
// або це я так просто зрозумів :(
// Шось типу const clone = Object.create(this) в класі

// Прототип машинки
const car = {
   wheels: 4,
   init() {
      console.log(`В мене ${this.wheels} колеса, мною володіє ${this.name}`)
   }
}

// Object.create() першим аргументом бере прототип, який буде назначений об'єкту на другому місці
const carWithOwner = Object.create(car, {
   name: {
      value: 'Віталік',
      // Дозволяє перебирати ключі в масиві
      enumerable: true,
      // Дозволяє переписувати поля потім
      writable: true,
      // Дозволяє видаляти ключ з об'єкта
      configurable: true
   }
})

console.log(carWithOwner.__proto__ === car); // true
console.log(carWithOwner); // { name: 'Віталік' }  - хоча по дефолту (з усима параметрами false) був би пусий об'єкт
carWithOwner.init() // В мене 4 колеса, мною володіє Віталік
