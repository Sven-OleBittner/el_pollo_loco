class BottleBarPepe extends StatusBar {

    
  constructor(world) {
    super(world);
    this.y = 50;
    this.loadImages(this.STAUSBAR_BOTTLE);
    this.drawStatusBar("bottlebar");
  }
}
