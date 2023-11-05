// console.log({}.prototype === {}.prototype); true
// це два однакові обєкти з результатом undefined але вони рівні між собою 

// function sayHello() {};
// console.log(sayHello.prototype === sayHello.__proto__); false
// бо обєкт sayHello створений за допомогою конструктора Function тому sayHello.__proto__ дорівнює Function.prototype

// function sayHello() {};
// function sayGoodBye() {};
// console.log(sayHello.__proto__ === sayGoodBye.__proto__); true
// бо однакові по типу об`єкти тому і proto у них однакові
// console.log(sayHello.prototype === sayGoodBye.prototype); false
// бо це дві різні функції тому prototype в них теж різні

// let arrowFunc = () => {};
// console.log(arrowFunc.prototype === Object.prototype); false
// бо це об`єкт створений за допомогою функції, а об`єкт не має prototype


// let age = 22;
// console.log(age.prototype === Number.prototype); false
// бо прототиg є тількти у class і function
// console.log(age.__proto__ === Number.prototype); true
// proto обєкта age ссилається на прототип класу (Number) з допомогою якого він був створений. Тобто з допомогою new Number


// function Test() {}
// console.log(Test.__proto__ === Function.prototype);
// бо proto об`єкта Test ссилається на прототип класу (Function)з допомогою якого він був створений, з допомогою new Function

// let num = 77;
// console.log(num.__proto__ === Number.prototype)
// бо proto об`єкта num ссилається на прототип класу (Number)з допомогою якого він був створений, з допомогою new Number
