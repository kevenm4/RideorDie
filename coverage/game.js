class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.background = new Image();
        const gameover = new Image();
        gameover.addEventListener("load", () => {
            this.gameover = gameover;
        });
        gameover.src = "./Doc/assets/Image/Busted.png";
        const gamewin = new Image();
        gamewin.addEventListener("load", () => {
            this.gamewin = gamewin;
        });
        gamewin.src = "./Doc/assets/Image/motoescaped.png";

        this.x = 0;
        this.y = 0;
        this.width = 600;
        this.height = 800;
        this.intervalId = null;
        this.bike = null;
        this.controls = null;
        this.boosts = [];
        this.enemies = [];
        this.enemies2 = [];
        this.frames = 0;
        this.speedY = 30;
        this.speedX = 30;
    }

    start() {
        this.bike = new Player(this, 250, 680, 50, 90);
        this.controls = new Controls(this);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(() => {
            this.update();
        }, 1000 / 60);
    }
    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.frames++;
        this.drawBackground();
        this.drawScores();
        this.bike.draw();
        this.createEnemies();

        this.enemies.forEach((enemy) => {
            enemy.newPos();
            enemy.draw();
        });
        this.createEnemies2();
        this.enemies2.forEach((enemy) => {
            enemy.newPos();
            enemy.draw();
        });
        this.createBoost();
        this.boosts.forEach((boost) => {
            boost.y++;
            boost.draw();
        });
        this.boostCatched();
        this.checkGameWin();
        this.checkGameOver();
        this.checkGameOver2();
    }
    createEnemies() {
        if (this.frames % 200 === 0) {
            this.enemies.push(new Enemy(this));
        }
    }
    createEnemies2() {
        if (this.frames % 300 === 0) {
            this.enemies2.push(new Enemy2(this));
        }
    }

    checkGameOver() {
        const bike = this.bike;
        const crashed = this.enemies.some(function(enemy) {
            return bike.crashWith(enemy);
        });

        if (crashed) {
            this.stop();
        }
    }
    checkGameOver2() {
        const bike = this.bike;
        const crashed = this.enemies2.some(function(enemy) {
            return bike.crashWith(enemy);
        });

        if (crashed) {
            this.stop();
        }
    }
    checkGameWin() {
        const score = Math.floor(this.frames / 60);
        if (score >= 60) {
            this.won();
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.font = "36px Audiowide-Regular";
        const km = Math.floor(this.frames / 60);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "red";
        this.ctx.fillText(`BUSTED`, 230, 300);
        this.ctx.drawImage(this.gameover, 190, 250, 300, 300);
        this.ctx.fillText(`FINAL SCORE: ${km}`, 160, 500);
    }
    won() {
        clearInterval(this.intervalId);
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.font = "36px Audiowide-Regular";
        const km = Math.floor(this.frames / 60);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "red";
        this.ctx.fillText("ESCAPED", 230, 300);
        this.ctx.drawImage(this.gamewin, 190, 250, 300, 300);
        this.ctx.fillText(`FINAL SCORE: ${km}`, 160, 500);
    }

    createBoost() {
        if (this.frames % 600 === 0) {
            this.boosts.push(new Boost(this));
        }
    }

    boostCatched() {
        const bike = this.bike;
        const catched = this.boosts.some(function(boost) {
            return bike.catchBoost(boost);
        });
        if (catched) {
            this.boosts.forEach((boost, i, arr) => {
                arr.splice(i, 1);
                this.speedY -= 4;
            });
        }
    }

    drawScores() {
        let score = Math.floor(this.frames / 60);
        this.ctx.font = "32px Audiowide-Regular";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`KM: ${score}`, 100, 30);
    }
    drawBackground() {
        this.background.src = "./Doc/assets/Image/road_1.png";
        this.ctx.drawImage(
            this.background,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

class Game2 extends Game {
    constructor() {
        super();
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.background = new Image();
        const gameover = new Image();
        gameover.addEventListener("load", () => {
            this.gameover = gameover;
        });
        gameover.src = "./Doc/assets/Image/Busted.png";
        const gamewin2 = new Image();
        gamewin2.addEventListener("load", () => {
            this.gamewin2 = gamewin2;
        });
        gamewin2.src = "./Doc/assets/Image/carescaped.png";

        this.x = 0;
        this.y = 0;
        this.width = 600;
        this.height = 800;
        this.intervalId = null;
        this.car = null;
        this.controls2 = null;
        this.boosts = [];
        this.enemies3 = [];
        this.enemies4 = [];
        this.frames = 0;
        this.speedY = 30;
        this.speedX = 30;
    }
    start() {
        this.car = new Player2(this, this.x, this.y, this.width, this.height);
        this.controls2 = new Controls2(this);
        this.controls2.keyboardEvents();
        this.intervalId = setInterval(() => {
            this.update();
        }, 1000 / 60);
    }
    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.frames++;
        this.drawBackground();
        this.drawScores();
        this.car.draw();
        this.createEnemies3();

        this.enemies3.forEach((enemy) => {
            enemy.newPos();
            enemy.draw();
        });
        this.createEnemies4();
        this.enemies4.forEach((enemy) => {
            enemy.newPos();
            enemy.draw();
        });
        this.createBoost();
        this.boosts.forEach((boost) => {
            boost.y++;
            boost.draw();
        });
        this.boostCatched2();
        this.checkGameWin();
        this.checkGameOver3();
        this.checkGameOver4();
    }
    createEnemies3() {
        if (this.frames % 200 === 0) {
            this.enemies3.push(new Enemy3(this));
        }
    }
    createEnemies4() {
        if (this.frames % 300 === 0) {
            this.enemies4.push(new Enemy4(this));
        }
    }
    checkGameOver3() {
        const car = this.car;
        const crashed = this.enemies3.some(function(enemy) {
            return car.crashWith(enemy);
        });

        if (crashed) {
            this.stop();
        }
    }
    checkGameOver4() {
        const car = this.car;
        const crashed = this.enemies4.some(function(enemy) {
            return car.crashWith(enemy);
        });

        if (crashed) {
            this.stop();
        }
    }
    checkGameWin() {
        const score = Math.floor(this.frames / 60);
        if (score >= 60) {
            this.won();
        }
    }
    stop() {
        clearInterval(this.intervalId);
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.font = "36px Audiowide-Regular";
        const km = Math.floor(this.frames / 60);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "red";
        this.ctx.fillText(`BUSTED`, 230, 300);
        this.ctx.drawImage(this.gameover, 190, 250, 300, 300);
        this.ctx.fillText(`FINAL SCORE: ${km}`, 160, 500);
    }
    won() {
        clearInterval(this.intervalId);
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.font = "36px Audiowide-Regular";
        const km = Math.floor(this.frames / 60);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "red";
        this.ctx.fillText(`ESCAPED`, 230, 300);
        this.ctx.drawImage(this.gamewin2, 190, 250, 300, 300);
        this.ctx.fillText(`FINAL SCORE: ${km}`, 160, 500);
    }
    createBoost() {
        if (this.frames % 600 === 0) {
            this.boosts.push(new Boost(this));
        }
    }
    boostCatched2() {
        const car = this.car;
        const catched = this.boosts.some(function(boost) {
            return car.catchBoost(boost);
        });
        if (catched) {
            this.boosts.forEach((boost, i, arr) => {
                arr.splice(i, 1);
                this.speedY -= 4;
            });
        }
    }
    drawScores() {
        let score = Math.floor(this.frames / 60);
        this.ctx.font = "32px Audiowide-Regular";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`KM: ${score}`, 100, 30);
    }
    drawBackground() {
        this.background.src = "./Doc/assets/Image/road_1.png";
        this.ctx.drawImage(
            this.background,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}