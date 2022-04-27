class Boost {
    constructor(game) {
        this.game = game;
        this.x = Math.floor(Math.random() * 400);
        this.y = 0;
        this.width = 30;
        this.height = 30;
        this.img = new Image();

        this.speedY = 3;
    }

    left() {
        return this.x;
    }
    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }
    newPos() {

        this.y += this.speedY;
    }

    draw() {
        this.img.src = "/Doc/assets/Image/416-4160503_wordpress-speed-boost-clipart.png";
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}