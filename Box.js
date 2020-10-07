class Box{
    constructor(x,y,width,height){
        var options = {
        restitution:0.8
        
        }
        this.Visibility = 255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width
        this.height = height
        World.add(world,this.body)
    }

    display(){
    

    if(this.body.speed < 3){

      var pos = this.body.position;
      var angle = this.body.angle;
        
      push ();
      translate(pos.x , pos.y);
      rotate(angle);
      rectMode(CENTER);
      tint (0, 150, 200);
      rect(0 , 0 , this.width, this.height);
      pop ();
      }
      else{
        World.remove(world,this.body);
        this.Visibility = this.Visibility-5
      }
    }
    score(){
  if(this.visibility < 0 && this.visibility >- 105){
    score++;
  }
    }
}