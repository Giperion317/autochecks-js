// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.



// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// const ownerName = apartment.owner.name;
// console.log(ownerName)

// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone)

// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail)

// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags)

// const firstTag = apartment.tags[0];
// console.log(firstTag)

// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag)

// ============================Задание 6

// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment)

// ===============Задание 10

// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];


// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
// }

// console.log(keys)
// console.log(values)

// =========Task 12

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта

// function countProps(object) {
//     let propCount = 0;
   
//     let keys = [];
//     for (const key in object) {
        
//     if (object.hasOwnProperty(key)){
//         keys.push(key);
//             }

        
//     }
    
//     return propCount = keys.length ;
// }
  
  

// console.log(countProps({name: "Mango", age: 2}))
// console.log(countProps({mail: "poly@mail.com", isOnline: true, score: 500}))
// console.log(countProps({}))

// =========Task13

// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// Значение переменной values получено с помощью цикла for...of.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys)
// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log(values)

// =======Task14

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of

// function countProps(object) {
//   // Change code below this line
//     let propCount = 0;
//     let keys = Object.keys(object);
    
//     propCount += keys.length;
    

//     return propCount;
    
    
//   // Change code above this line
// }
// console.log(countProps({}))
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))


// =======Task17

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// Объявлена переменная colors
// Значение переменной colors это массив
// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)
// }

// console.log(hexColors)
// console.log(rgbColors)
// // Change code below this line

// =============Task18

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice("Radar") возвращает 1300.
// Вызов getProductPrice("Grip") возвращает 1200.
// Вызов getProductPrice("Scanner") возвращает 2700.
// Вызов getProductPrice("Droid") возвращает 400.
// Вызов getProductPrice("Engine") возвращает null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (const product of products) {
    
//     if (product.name === productName) {
//         return product.price;
//     }
// }
//     return null;

//   // Change code above this line
// }

// console.log(getProductPrice("Radar"))
// console.log(getProductPrice("Grip"))
// console.log(getProductPrice("Scanner"))
// console.log(getProductPrice("Droid"))
// console.log(getProductPrice("Engine"))

// =============Task19

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// console.table(products);

// function getAllPropValues(propName) {
//   // Change code below this line
//     let valueProduct = [];
//   for (const product of products) {
//     console.log(Object.keys(product).includes(propName));
//     if (Object.keys(product).includes(propName)) {
//       valueProduct.push(product[propName]);
      
//     }
//   }
//   return valueProduct;
// }


//   // Change code above this line

// console.log(getAllPropValues("name"))
// console.log(getAllPropValues("quantity"))
// console.log(getAllPropValues("price"))
// console.log(getAllPropValues("category"))

// =============Task20

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// Объявлена функция calculateTotalPrice(productName)
// Вызов calculateTotalPrice("Blaster") возвращает 0
// Вызов calculateTotalPrice("Radar") возвращает 5200
// Вызов calculateTotalPrice("Droid") возвращает 2800
// Вызов calculateTotalPrice("Grip") возвращает 10800
// Вызов calculateTotalPrice("Scanner") возвращает 8100

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     for (const product of products) {
//     console.log(Object.values(product).includes(productName));
//    if (Object.values(product).includes(productName)) {
//      return product.price * product.quantity;
//       }
     
//   }
//   return 0;
// // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Blaster"))
// console.log(calculateTotalPrice("Radar"))
// console.log(calculateTotalPrice("Droid"))
// console.log(calculateTotalPrice("Grip"))
// console.log(calculateTotalPrice("Scanner"))


// =============Task24

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// =============Task26

// Change code below this line
// function calculateMeanTemperature(forecast) {
// const{
//   today: {low: todayLow, high: todayHigh},
//   tomorrow: {low: tomorrowLow, high: tomorrowHigh},
// } = forecast;
  
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// })

// =============Task30

// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// Объявлена функция makeTask(data)
// Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
// Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// Вызов makeTask({ text: "Buy bread" }) возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// function makeTask(data) {
  
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const defaultData = { category, priority, completed }
    
//   return {...defaultData, ...data}
//   // Change code above this line
// }
// console.log(makeTask({}))
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))
// console.log(makeTask({ category: "Finance", text: "Take interest" }))
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }))
// console.log(makeTask({ text: "Buy bread" }))

// =============Task31

// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// Объявлена функция add
// Функция add использует параметр args
// Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest)
// Вызов add(15, 27) возвращает 42
// Вызов add(12, 4, 11, 48) возвращает 75
// Вызов add(32, 6, 13, 19, 8) возвращает 78
// Вызов add(74, 11, 62, 46, 12, 36) возвращает 241

// // Change code below this line
// function add(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
//   // Change code above this line
// }
// console.log(add(15, 27))
// console.log(add(12, 4, 11, 48))
// console.log(add(32, 6, 13, 19, 8))
// console.log(add(74, 11, 62, 46, 12, 36))

// =============Task32

// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// Объявлена функция addOverNum()
// Вызов addOverNum(50, 15, 27) возвращает 0
// Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71
// Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51
// Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218

// Change code below this line
// function addOverNum(firstNumber, ...otherArgs) {
//   let total = 0;

//   for (const arg of otherArgs) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27))
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))
// console.log(addOverNum(15, 32, 6, 13, 19, 8))
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36))

// =============Task33

// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// Объявлена функция findMatches()
// Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2]
// Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2]
// Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41]
// Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает []

// // Change code below this line
// function findMatches(firstArgs, ...otherArgs) {
//   const matches = []; // Don't change this line
  
//   for (const arg of firstArgs) {
//     if (otherArgs.includes(arg)) {
//       matches.push(arg)
//     }
//   }
//   // Change code above this line
  
//   return matches;
  
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2))
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41))
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16))

// =============Task35

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// Объявлена переменная bookShelf

// Значение переменной bookShelf это объект

// Значение свойства bookShelf.updateBook это метод объекта

// После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName)
//     this.books.splice(bookIndex, 1, newName)

//     // Change code above this line
//   },
  
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles")
// bookShelf.updateBook("The last kingdom", "Dune")

// =============Task38

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//   this.potions.push(potionName)


//     // Change code above this line
//   },
//   return
// };
// atTheOldToad.addPotion("Invisibility")
// atTheOldToad.addPotion("Power potion")
// console.log(atTheOldToad)

// =============Task39

// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.removePotion это метод объекта
// После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив ["Speed potion", Stone skin"]
// После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив ["Stone skin"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const {potions} = this
//     for (let i = 0; i < potions.length; i += 1) {
      
//       if (potionName === potions[i]) {
//         potions.splice(i, 1)
//       }
  
// }

//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath")
// console.log(atTheOldToad)

// =============Task40

// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
// После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const { potions } = this;

//       const bookIndex = potions.indexOf(oldName)
//       potions.splice(bookIndex, 1, newName)

//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// console.log(atTheOldToad)

// =============Task41

// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.getPotions это метод объекта
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в массиве potions последним элементом будет этот объект
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в массиве potions последним элементом будет этот объект
// Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода
// Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект
// Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), массив potions не изменяется
// Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не изменяется
// Для исходного объекта вызов atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// Для исходного объекта вызов atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), возвращает строку "Error! Potion Stone skin is already in your inventory!"
// Значение свойства atTheOldToad.removePotion это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
  
//   addPotion(newPotion) {
//         for (let potion of this.potions) {
//           if (potion.name === newPotion.name)  {
//             return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
      
//       this.potions.push(newPotion);
//     }
     
   
    
//   },
//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const {name} = potions[i];

//       if (potionName === name) {
//         potions.splice(i, 1);
//       }
      
//     }
//   },
//   updatePotionName(oldName, newName) {
    

//     for (let i = 0; i < this.potions.length; i += 1) {
//       console.log(this.potions[i].name)
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
      
//     }
//   },
//   // Change code above this line
  
// };
// atTheOldToad.addPotion({ name: "Speed potion", price: 460 })
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })

// console.table(atTheOldToad.getPotions())


// atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.removePotion("Speed potion")

// console.table(atTheOldToad.getPotions())

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")

// console.table(atTheOldToad.getPotions())


// Модуль 4

// =============Task 13

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// Объявлена функция changeEven(numbers, value)
// Функция changeEven не изменяет значение параметра numbers
// Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5]
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16]
// Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142]
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// function changeEven(numbers, value) {
//   // Change code below this line
//     let newNumbers = [];
   
//     numbers.forEach((number) => {
        
//       if (number % 2 === 0) {
//       newNumbers.push(number + value);
//       } else {
//          newNumbers.push(number);
//     }
//   })
    
//     return newNumbers;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))


// =========Task 22


const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
    }
]
  
//   // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color) }
// // Change code above this line

// console.log(getUsersWithEyeColor(users, "brown"))


// ===== Task 25

// Change code below this line
// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends)
//     console.log(allFriends)
//     const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index)
//     return uniqueFriends;
// };
// // Change code above this line
// console.log(getFriends(users))


// ================ЗАНЯТИЕ С МЕНТОРОМ=======================

// task 1

//Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }


// ===========task2

//У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const totalSalaries = (salaries) => {
//     console.log(salaries)
//     let totall = 0;
//     for (const value of Object.values(salaries)) {
//         totall += value
//     }
//     return totall
// }
// console.log(totalSalaries(salaries))

// ============task3

//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
//     read(a, b){
//         this.value1 = a;
//         this.value2 = b;
// },
//     sum(){
//     return this.value1 + this.value2;
// },
//     mult(){
//     return this.value1 * this.value2;
//     },
// }

// calculator.read(3,5)
// console.log(calculator.sum())
// console.log(calculator.mult())

//Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}

// const updateObject = (object, param) => {
//     const newObject = { ...object };
//     delete newObject[param];
//     return newObject;
// };

// console.log(updateObject({a: 1, b: 2}, 'b'))

//Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]

// const user = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };

// const usersChange = (object) => {

//     const objectKaysValues = Object.entries(object);
//     return objectKaysValues;
// }

// console.log(usersChange(user))