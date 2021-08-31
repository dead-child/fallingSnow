


class Snow{
    constructor(x, y) {  
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'isStatic':false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
               
    this.image = loadImage("snow4.webp");

        World.add(world, this.body);
  
  
  
    }
      display(){
        var pos = this.body.pos;
        var angle = this.body.angle;
      
//        image(this.image1, this.trajectory[i][0],this.trajectory[i][1])

        
        push();
        translate(pos.x, pos.y);
        rotate(angle); 
       imageMode(CENTER);

       
       // strokeWeight(4)
        fill(this.image)
       ellipseMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop()

 
 


    }

      }


      
