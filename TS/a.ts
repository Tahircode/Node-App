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


const app=express();

enum Direction{
    // up,
    // down,
    // left,
    // right
    up="up",
    down="down",
    left="left",
    right="right"
}
function doSomething(keyPressed:Direction){
    if(keyPressed=Direction.up){

    }
}

enum ResponseStatus{
    Success=200,
    NotFound=404,
    Error=500
}
app.get("/",(req,res)){
  if(!req.query.userId){
    res.status(ResponseStatus.NotFound).json({});
  }
}