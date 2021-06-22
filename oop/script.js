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

var person = {
    name: 'Ashanur'
}

Object.defineProperty(person,"name",{
    enumerable:false, // loop able or not
    writable:false, // overwrite able or not
    configurable:false, // remove able or not
    value: "Md Ashanur Rahman" // default value set
});
// end learn about descriptor
