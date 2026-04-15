class Cloud1 extends MovableObject {
    constructor() {
        super().loadImage(`./img/5_background/layers/4_clouds/1.png`);
        this.height = 480;
        this.width = 720;
        this.x = -100 + Math.random() * 800;
        this.y = -20;
    }
}