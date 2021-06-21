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

var Rectangle = function(width,height){
    this.width = width
    this.height = height

    this.draw = function(){
        console.log("I am a Rectangle")
        this.printPropertise()
        console.log(this)
    }

    this.printPropertise = function(){
        console.log('width is :'+this.width)
        console.log('height is :'+this.height)
    }
}

var rect3 = new Rectangle(400,200)
rect3.draw();

