/*Декоратор — это структурный паттерн проектирования,
   который позволяет динамически добавлять объектам новую функциональность,
   оборачивая их в полезные «обёртки».*/

// Ну тут ми створюємо екземпляр класу, а потім за допомоги декоратора шпигуємо лівими плюшками(маю на увазі поля, методи)

// Звичайний класи (ну тут шось типу сервер)
class Server {
   constructor(ip, port) {
      // Ну такі то має властивості
      this.ip = ip
      this.port = port
   }

   // І такий метод
   get url() {
      return `https://${this.ip}:${this.port}`
   }
}

// А оця вже функція розширяє функціонал (В нас сервер тепер не звичайний, а для aws)
function aws(server) {
   server.isAWS = true
   server.awsInfo = function () {
      return server.url
   }

   return server
}
// А оцей для azure. Круто, правда?
function azure(server) {
   server.isAzure = true
   server.port +=500

   return server
}

const s1 = aws(new Server('12.34.56.78', 8080))
console.log(JSON.stringify(s1)); // {"ip":"12.34.56.78","port":8080,"isAWS":true}
console.log(s1.url); // https://12.34.56.78:8080

const s2 = azure(new Server('98.87.45.65', 1000))
console.log(JSON.stringify(s2)); // {"ip":"98.87.45.65","port":1500,"isAzure":true}
console.log(s2.url); // https://98.87.45.65:1500
