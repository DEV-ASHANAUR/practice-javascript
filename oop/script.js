// var rect = {
//     width : 100,
//     height : 50,

//     draw: function(){
//         console.log('hello world');
//         this.printpropertise();
//         console.log(this);

//     },
//     printpropertise: function() {
//         console.log('Width IS : '+ this.width)
//         console.log('Height IS : '+ this.height)
//     }
// }

// rect.draw();

// factory pattern

// var createRect = function(width,height) {
//     return {
//         width:width,
//         height:height,

//         draw:function() {
//             console.log("I am Rectangle");
//             this.printPropertise()
//             console.log(this)
//         },

//         printPropertise: function(){
//             console.log('Width is :'+this.width)
//             console.log('Height is :'+this.height)
//         },
//     }
// }

// var Rect1 = createRect(100,50)

// Rect1.draw();

// var Rect2 = createRect(200,100)

// Rect2.draw()

// Constructor pattern

// var Rectangle = function(width,height){
//     this.width = width
//     this.height = height

//     this.draw = function(){
//         console.log("I am a Rectangle")
//         this.printPropertise()
//         console.log(this)
//     }

//     this.printPropertise = function(){
//         console.log('width is :'+this.width)
//         console.log('height is :'+this.height)
//     }
// }

// var rect3 = new Rectangle(400,200)
// rect3.draw();

// learn about descriptor

// var person = {
//     name: 'Ashanur'
// }

// console.log(person)

// for(var i in person){
//     console.log(i);
// }

// var descriptor = Object.getOwnPropertyDescriptor(person,'name');

// console.log(descriptor);

// let baseObj = Object.getPrototypeOf(person);

// let descriptor = Object.getOwnPropertyDescriptor(baseObj,'toString')

// console.log(descriptor)

// var person = {
//     name: 'Ashanur'
// }

// Object.defineProperty(person,"name",{
//     enumerable:false, // loop able or not
//     writable:false, // overwrite able or not
//     configurable:false, // remove able or not
//     value: "Md Ashanur Rahman" // default value set
// });
// end learn about descriptor

// prototype vs instance

// function Square(width) {
//     this.width = width
//     this.getWidth = function() {
//         console.log('width is :'+this.width);
//         this.draw()
//     }
// }

// Square.prototype = {
//     draw : function () {
//         this.getWidth()
//         console.log('Draw')
//     },
//     toString: function() {
//         return 'My width is :'+this.width
//     }
// }

// var sqr1 = new Square(10)
// var sqr2 = new Square(20)

// promise start


// console.log("hello");

// const promise1 = new Promise((resolve,reject)=>{
//     let iscompleate = false;
//     if(iscompleate){
//         resolve('compleate promise1');
//     }else{
//         reject('reject promise1');
//     }
// });

// const promise2 = new Promise((resolve,reject)=>{
//     resolve('compleate promise 2')
// })

// // if fullfill the promise
// promise1.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })

// //2nd promise 

// promise2.then((res)=>{
//     console.log(res);
// })

// we can show multiple promise at a time

// Promise.all([promise1,promise2]).then(([res1,res2])=>{
//     console.log(`${res1}  ${res2}`)
// }).catch((err)=>{
//     console.log(err)
// })



// see promise
// console.log(promise1);


// promise race

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('complete promise 1');
//     },2000)
// });

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('complete promise 2');
//     },1000)
// });

// Promise.race([promise1,promise2]).then((res)=>{
//     console.log(res);
// })


// chaning promise

const taskOne = ()=>{
    return new Promise((resolve,reject)=>{
        resolve('task One is Completed');
    });
}

const taskTwo = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('task Two is Completed');
        },3000)
    });
}
const taskThree = ()=>{
    return new Promise((resolve,reject)=>{
        // resolve('task Three is Completed');
        reject('task Three is rejected');
    });
}
const taskFour = ()=>{
    return new Promise((resolve,reject)=>{
        resolve('task Four is Completed');
    });
}

taskOne().then((res)=>{
    console.log(res);
}).
then(taskTwo).then((res)=>{
    console.log(res);
}).then(taskThree).then((res)=>{
    console.log(res)
}).then(taskFour).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});




