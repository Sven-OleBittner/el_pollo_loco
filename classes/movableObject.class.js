class MovableObject {
  x;
  y;
  img;
  height;
  width;
  imgCache = {};
  currentImage = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  moveRight(figure) {
    console.log(`Move right`);
    figure.x += 2;

  }

  moveLeft(figure) {
    console.log(`Move left`);
    figure.x -= 2;
  }


  
}
