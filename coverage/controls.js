class Controls {
    constructor(game) {
        this.game = game;
        this.bike = this.game.bike;
    }

    keyboardEvents() {
        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "ArrowRight":
                    this.bike.moveRight();

                    break;
                case "ArrowLeft":
                    this.bike.moveLeft();

                    break;
                case "ArrowUp":
                    this.bike.moveUp();

                    break;
                case "ArrowDown":
                    this.bike.moveDown();

                    break;
            }
        });
    }
}
class Controls2 extends Controls {
    constructor(game2) {
        super(game2);
        this.game2 = game2;
        this.car = this.game2.car;
    }

    keyboardEvents() {
        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "ArrowRight":
                    this.car.moveRight();

                    break;
                case "ArrowLeft":
                    this.car.moveLeft();

                    break;
                case "ArrowUp":
                    this.car.moveUp();

                    break;
                case "ArrowDown":
                    this.car.moveDown();

                    break;
            }
        });
    }
}