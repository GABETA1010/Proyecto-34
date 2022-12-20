class Floor {
   constructor(x,y,w,h){
var floorOptions = {
    isStatic : true
}

     this.width = w
     this.height = h
     this.body = Bodies.rectangle(x,y,w,h,floorOptions);
     World.add(world,this.body);

   }

   display(){
    let pos = this.body.position 
    push();
    rectMode(CENTER);
    fill(148,127,146);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
   }
   
}