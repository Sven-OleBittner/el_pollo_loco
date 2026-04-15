class MovableObject {
  x;
  y;
  img;
  height;
  width;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight(figure) {
    console.log(`Move right`);
    figure.x += 1;

  }

  moveLeft(figure) {
    console.log(`Move left`);
    figure.x -= 1;
  }

  
}
