class Polygon {
  constructor(x,y){
    var options = {
        'density':1.0
    }
    this.image = loadImage("sprites/bird.png");
    this.body = Bodies.circle(50,200,30, options);
    World.add(world, this.body);
  }

  display() {
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
 
    /*super.display();
    if (this.body.velocity.x > 10 && this.body.position.x > 200)
    {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }*/
  }
}