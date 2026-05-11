class Coin extends CollectibleObject {
    offset = {
        top: 10,
        left: 5,
        right: 5,
        bottom: 5,
    };

    constructor() {
        super().loadImage("./img/8_coin/coin_1.png");
        this.x = 500 + Math.random() * 2000;
        this.y = 100 + Math.random() * 200;
        this.width = 200;
        this.height = 200;
    }
}