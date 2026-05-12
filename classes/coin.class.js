class Coin extends CollectibleObject {
    offset = {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50,
    };

    constructor() {
        super().loadImage("./img/8_coin/coin_1.png");
        this.x = 500 + Math.random() * 2000;
        this.y = 100 + Math.random() * 200;
        this.width = 200;
        this.height = 200;
    }
}