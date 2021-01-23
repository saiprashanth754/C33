class Bird extends BaseClass {
  constructor(x,y){
    /* super() helps to transfer properties of parent class through 
    parent class constructor*/
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.positions = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    /*super.display() overrides the display of baseclass*/
    super.display();
    if (this.body.position.x > 200 && this.body.velocity.x > 10) {
          var temp = [this.body.position.x ,this.body.position.y]
          this.positions.push(temp);
         //console.log(this.positions);
    }
        for(var i = 0; i  <= this.positions.length - 1; i++) {
          image(this.smoke,this.positions[i][0], this.positions[i][1]);
        }

  }
}
