class Enemy {
    constructor(game) {
        this.game = game;
        this.x = Math.floor(Math.random() * 500);
        this.y = 700;
        this.width = 50;
        this.height = 90;
        this.img = new Image();

        this.speedY = 5;
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
        this.y -= this.speedY;
    }

    draw() {
        this.img.src = "/Doc/assets/Image/police.png";
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

class Enemy2 extends Enemy {
    constructor(game) {
        super(game);
        this.game = game;
        this.x = Math.floor(Math.random() * 500);
        this.y = 0;
        this.width = 50;
        this.height = 90;
        this.img = new Image();

        this.speedY = 4;
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
        this.img.src = "/Doc/assets/Image/car-yellow.png";
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

class Enemy3 extends Enemy {
    constructor(game2) {
        super(game2);
        this.game2 = game2;
        this.x = Math.floor(Math.random() * 500);
        this.y = 700;
        this.width = 50;
        this.height = 90;
        this.img = new Image();

        this.speedY = 6;
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
        this.y -= this.speedY;
    }

    draw() {
        this.img.src = "/Doc/assets/Image/police2.png";
        this.game2.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

class Enemy4 extends Enemy {
    constructor(game2) {
        super(game2);
        this.game2 = game2;
        this.x = Math.floor(Math.random() * 500);
        this.y = 0;
        this.width = 50;
        this.height = 90;
        this.img = new Image();

        this.speedY = 5;
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
        this.img.src = "/Doc/assets/Image/car-red.png";
        this.game2.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}