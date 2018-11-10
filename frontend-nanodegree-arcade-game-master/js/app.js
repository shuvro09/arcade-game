// Enemies our player must avoid
$("#game-over").hide();
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
var Gems = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/Gem-Blue.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x >= 500)
        this.x = -100;
    //this.render();
    if (player.y === this.y && player.x < this.x + 50 && player.x + 50 > this.x) {
        player.x = 300;
        player.y = 395;

    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Gems.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};
Player.prototype.update = function (dt) {
    if (this.x === g.x && this.y === g.y) {
        //gameover();
        $("#game-board").hide();
        $("#game-over").show();
    }
};
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function (e) {
    if (e === 'up') {
        this.y = this.y - 85;
        if (this.y < 0)
            this.y = 395;
        console.log(this.y);
    }
    else if (e === 'down') {
        this.y = this.y + 85;
        if (this.y > 400)
            this.y -= 85;
    }
    else if (e === 'left') {
        this.x = this.x - 100;
        if (this.x < 0)
            this.x += 100;
    }
    else {
        this.x = this.x + 100;
        if (this.x > 400)
            this.x -= 100;

    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let ypos = [55, 140, 225, 310, 395];
let xpos = [0, 100, 200, 300, 400];
var e1 = new Enemy(0, 55, 300);
var e2 = new Enemy(0, 225, 320);
var e3 = new Enemy(0, 225, 30);
var e4 = new Enemy(0, 140, 420);
var e5 = new Enemy(0, 140, 100);
var e6 = new Enemy(0, 310, 250);
var allEnemies = [e1, e2, e3, e4, e5, e6];
var player = new Player(300, 395);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
var g = new Gems(xpos[Math.floor(Math.random() * 5)], ypos[Math.floor(Math.random() * 5)]);

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    //console.log(allowedKeys[e.keyCode]);
    player.handleInput(allowedKeys[e.keyCode]);
});
