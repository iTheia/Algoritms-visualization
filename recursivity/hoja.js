function hoja(x,y){
    this.x = x;
    this.y = y;
    this.r = 5;

    this.show = function(){
      noStroke();
      fill(255);
      ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.mover = function () {
      this.x = this.x + 3;
      this.y = this.y + 2;
      if (this.x >= width - this.r || this.y >= height-this.r) {
        this.x = -150;
        this.y = -150;
      }
    }
}
