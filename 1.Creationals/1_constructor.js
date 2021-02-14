// функція-конструктор (якщо ти старпер або не чув про класи)
/*function Server(name, ip) {
   this.name = name
   this.ip = ip
}

Server.prototype.getUrl = function () {
   return `https://${this.ip}:80`
}

const aws = new Server('AWS German', '82.21.21.32')
console.log(aws.getUrl());*/

// Ну тут навіть пояснювати не буду. А то патерн? Я хіба з відоса переписав, але здається я давно юзаю патерни :(

class Server {
   constructor(name, ip) {
      this.name = name
      this.ip = ip
   }

   getUrl () {
      return `https://${this.ip}:80`
   }
}
const aws = new Server('AWS German', '82.21.21.32')
console.log(aws.getUrl());
