class Player {
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.speedY = 30;
        this.speedX = 30;
    }

    draw() {
        this.img.src = "/Doc/assets/Image/bikes_0-removebg-preview.png";
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        this.x -= this.speedX;
    }
    moveRight() {
        this.x += this.speedX;
    }
    moveDown() {
        this.y += this.speedY;
    }
    moveUp() {
        this.y -= this.speedY;
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

    catchBoost(boost) {
        return !(
            this.bottom() < boost.top() ||
            this.top() > boost.bottom() ||
            this.right() < boost.left() ||
            this.left() > boost.right()
        );
    }
    crashWith(obstacle) {
        return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() ||
            this.right() < obstacle.left() ||
            this.left() > obstacle.right()
        );
    }
    newPos() {
        this.x += this.speedX;
        this.y -= this.speedY;
    }
}
class Player2 extends Player {
    constructor(game2) {
        super(game2);
        this.game2 = game2;
        this.x = 250;
        this.y = 680;
        this.width = 50;
        this.height = 90;
        this.img = new Image();
        this.speedY = 30;
        this.speedX = 30;
    }
    draw() {
        this.img.src = "/Doc/assets/Image/car-sedan.png";
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        this.x -= this.speedX;
    }
    moveRight() {
        this.x += this.speedX;
    }
    moveDown() {
        this.y += this.speedY;
    }
    moveUp() {
        this.y -= this.speedY;
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

    catchBoost(boost) {
        return !(
            this.bottom() < boost.top() ||
            this.top() > boost.bottom() ||
            this.right() < boost.left() ||
            this.left() > boost.right()
        );
    }
    crashWith(obstacle) {
        return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() ||
            this.right() < obstacle.left() ||
            this.left() > obstacle.right()
        );
    }
    newPos() {
        this.x += this.speedX;
        this.y -= this.speedY;
    }
}