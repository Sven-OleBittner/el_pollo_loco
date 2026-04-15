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

  moveCharacter() {
    window.addEventListener("keydown", (event) => {
      if (event.key == "ArrowRight") {
        super.moveRight(this);
      }
      if (event.key == "ArrowLeft") {
        super.moveLeft(this);
      }
    });
  }

  jump() {}
}
