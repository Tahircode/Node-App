"use strict";
// function isLegal(a:number): boolean {
//   if(a<18) return false;
//   return true;
// }
// let x=isLegal(18);
// function runAfter1s(fn:()=>void){
//     setTimeout(fn,1000);
// }
// runAfter1s(function(){
//     console.log("hiiii");
// })
var Direction;
(function (Direction) {
    // up,
    // down,
    // left,
    // right
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed = Direction.up) {
    }
}
