class Walker {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
  	this.r = 25;
    this.a = 0.5;
  }
  
  update() {
    if (cnt > 0) {
      this.acc = createVector(random(-this.a, this.a), random(-this.a, this.a));
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      
      if (this.pos.x <= this.r) {
        this.pos.x = this.r;
        this.vel.x = -this.vel.x;
        this.acc.x = -this.acc.x;
        cnt--;
      }
      if (this.pos.x >= width - this.r) {
        this.pos.x = width - this.r;
        this.vel.x = -this.vel.x;
        this.acc.x = -this.acc.x;
        cnt--;
      }
      if (this.pos.y <= this.r) {
        this.pos.y = this.r;
        this.vel.y = -this.vel.y;
        this.acc.y = -this.acc.y;
        cnt--;
      }
      if (this.pos.y >= height - this.r) {
        this.pos.y = height - this.r;
        this.vel.y = -this.vel.y;
        this.acc.y = -this.acc.y;
        cnt--;
      }
      
    } else {
      if (this.pos.x < width/2) {
        this.pos.x += 2;
      }
      if (this.pos.x > width/2) {
        this.pos.x -= 2;
      }
      if (this.pos.y < height/2) {
        this.pos.y += 2;
      }
      if (this.pos.y > height/2) {
        this.pos.y -= 2;
      }
    }
      

  }
  
  display() {
    textSize(32);
    text("공의 수명: "+cnt,width/2, 65);
	ellipse(this.pos.x, this.pos.y, this.r*2);
  }
}