class Character extends MovableObject {

  height = 190;
  width = 95;
  y = 240;
  x = 20;

  constructor() {
    super().loadImage(
      "./img/2_character_pepe/1_idle/idle/I-1.png"
    );
  }

  moveRight() {
    super.moveRight(this);
  }

  moveLeft() {
    super.moveLeft(this);
  }

  moveCharacter() {
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
