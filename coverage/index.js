window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        startGame();
    };

    document.getElementById("start-button2").onclick = () => {
        startGame2();
    };
    let game = null;

    function startGame() {
        if (!game) {
            game = new Game();
            game.start();
        }
    }
    let game2 = null;

    function startGame2() {
        if (!game2) {
            game2 = new Game2();
            game2.start();
        }
    }
};