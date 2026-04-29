class CoinBarPepe extends StatusBar {

    
  constructor(world) {
    super(world);
    this.y = 100;
    this.loadImages(this.STAUSBAR_COIN);
    this.drawStatusBar("coinbar");
  }
}
