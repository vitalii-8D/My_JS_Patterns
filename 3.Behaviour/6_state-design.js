/*Состояние — это поведенческий паттерн проектирования,
   который позволяет объектам менять поведение
в зависимости от своего состояния.
   Извне создаётся впечатление,
   что изменился класс объекта.*/

// Щось схоже на ітератор, тільки в якості змінюваних штук тут - екземпляри класів
// і ми міняємо стан певними методами Стейт-машини

// Просто клас з кольором
class Light {
   constructor(light) {
      this.light = light
   }
}

class RedLight extends Light { // Просто наслідування, нічого такого
   constructor() {
      super('red');
   }

   sign() {
      return 'STOP'
   }
}

class YellowLight extends Light {
   constructor() {
      super('yellow');
   }

   sign() {
      return 'READY'
   }
}

class GreenLight extends Light {
   constructor() {
      super('green');
   }

   sign() {
      return 'GO'
   }
}
// А оце вже та Стейт-машина
class TrafficLight {
   constructor() {
      this.states = [ // стани у вигляді екземплярів класів
         new GreenLight(),
         new YellowLight(),
         new RedLight()
      ]
      this.current = this.states[0]
   }

   change() { // міняєм стан
      const total = this.states.length
      let index = this.states.findIndex(light => light === this.current)

      if (index + 1 < total) {
         this.current = this.states[index + 1]
      } else {
         this.current = this.states[0]
      }
   }

   sign() {
      return this.current.sign()
   }
}

const traffic = new TrafficLight()
console.log(traffic.sign()); // GO
traffic.change()

console.log(traffic.sign()); // READY
traffic.change()

console.log(traffic.sign()); // STOP
traffic.change()

console.log(traffic.sign()); // GO
traffic.change()
console.log(traffic.sign()); // READY
