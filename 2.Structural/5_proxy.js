/*Заместитель — это структурный паттерн проектирования,
   который позволяет подставлять вместо реальных объектов
специальные объекты-заменители.
   Эти объекты перехватывают вызовы к оригинальному объекту,
   позволяя сделать что-то до или после передачи вызова оригиналу.*/

// Так как нет ловушек(или пустой обьект), то все операции на proxy
// применяются к оригинальному объекту target.

// По суті, Proxy() - це така обгортка, через яку відбувається спілкування ...
// ... з об'єктом чи функцією, вкладену в цю обгортку
// Спілкування насправді - виклики спеціальних функцій-пасток

// Функція яка робить запит на сервер
function networkFetch(url) {
   return `${url} - Відповідь з сервера`
}

// Створюємо колекцію (наші хешовані дані)
const cache = new Set();
// Створюємо обгортку (проксі)
const proxiedFetch = new Proxy(networkFetch, {
   // Ловушка apply(target, thisArg, args) активируется при вызове прокси как функции:
   // target – это оригинальный объект | thisArg – это контекст this | args – список аргументов
   apply(target, thisArg, argArray) {
      // Дістаємо url з аргументів
      const url = argArray[0]

      // Перевіряємо чи є в хеші
      if (cache.has(url)) {
         return `${url} - Відповідь з кеша`
      } else {
         cache.add(url)
         return Reflect.apply(target, thisArg, argArray)
      }
   }
})

console.log(proxiedFetch('angular.io')) // angular.io - Відповідь з сервера
console.log(proxiedFetch('react.io')) // react.io - Відповідь з сервера
console.log(proxiedFetch('angular.io')) // angular.io - Відповідь з кеша
