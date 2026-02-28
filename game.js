// Player class
class Player {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.score = 0;
    }
    attack(enemy) {
        // Attack logic here
        console.log(`${this.name} attacks ${enemy.name}`);
        enemy.takeDamage();
    }
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} takes damage. Health is now: ${this.health}`);
    }
}

// Enemy class
class Enemy {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
    takeDamage() {
        // Damage logic here
        console.log(`${this.name} takes damage.`);
    }
}

// MathProblem class
class MathProblem {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    checkAnswer(playerAnswer) {
        return playerAnswer === this.answer;
    }
}

// Game class
class Game {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
        this.mathProblems = [];
    }
    addProblem(problem) {
        this.mathProblems.push(problem);
    }
    start() {
        // Game loop logic here
        console.log('Game started!');
        // Iterate through problems and have player answer
        this.mathProblems.forEach(problem => {
            console.log(problem.question);
            // Assume playerAnswer is obtained somehow
            let playerAnswer = prompt('Enter your answer:');
            if (problem.checkAnswer(playerAnswer)) {
                console.log('Correct answer!');
                this.player.attack(this.enemy);
            } else {
                console.log('Wrong answer!');
                this.player.takeDamage(10);
            }
        });
    }
}

// Example of creating a new game
let player = new Player('Hero', 100);
let enemy = new Enemy('Monster', 50);
let game = new Game(player, enemy);

// Adding math problems
game.addProblem(new MathProblem('What is 2 + 2?', 4));
game.addProblem(new MathProblem('What is 5 - 3?', 2));

// Start the game
game.start();