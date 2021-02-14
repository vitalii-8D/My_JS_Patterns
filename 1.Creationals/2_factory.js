/*Фабричный метод — это порождающий паттерн проектирования,
   который определяет общий интерфейс
для создания объектов в суперклассе,
   позволяя подклассам изменять тип создаваемых объектов.*/

// Клас простої підписочки щоб зганяти жирочок
class SimpleMembersgip {
   constructor(name) {
      this.name = name
      this.cost = 50
   }
}
// Клас непростої підписочки
class StandartMembersgip {
   constructor(name) {
      this.name = name
      this.cost = 50
   }
}
// Ну тут точно -10 кг за пів року
class PremiumMembersgip {
   constructor(name) {
      this.name = name
      this.cost = 50
   }
}

// Фабрика, написано же
class MemberFactory {
   // Список всіх можливих підписок і ссилки на їх класи
   static list = {
      simple: SimpleMembersgip,
      standart: StandartMembersgip,
      premium: PremiumMembersgip
   }

   create(name, type = 'simple') {
      // Дістаємо ссиль на клас по типу підписки
      const Membership = MemberFactory.list[type]
      const member = new Membership(name)

      // Додаємо фічі(по бажанню)
      member.type = type;
      member.define = function () {
         console.log(`${this.name} (${this.type}): ${this.cost}`)
      }

      return member
   }
}

const factory = new MemberFactory()

const members = [
   factory.create('Vitalik', 'standart'),
   factory.create('Maria', 'premium'),
   factory.create('Vasya'),
]

members.forEach((m) => console.log(m.define()))
// Output:
// Vitalik (standart): 50
// Maria (premium): 50
// Vasya (simple): 50
