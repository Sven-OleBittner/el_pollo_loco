class Character extends MovableObject {
  constructor() {
    super().loadImage(
      "./img/2_character_pepe/1_idle/idle/I-1.png"
    );
    this.y = 240;
    this.x = 20;
    this.height = 190;
    this.width = 95;
  }

  moveRight() {
    super.moveRight(this);
  }

  moveLeft() {
    super.moveLeft(this);
  }

  moving() {
    window.addEventListener("keydown", (event) => {
      if (event.key == "ArrowRight") {
        this.moveRight();
      }
      if (event.key == "ArrowLeft") {
        this.moveLeft();
      }
    });
  }

  jump() {}
}
