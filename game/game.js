import Phaser from "./Phaser.js"
import Scenes from "./scenes/scenes.js"

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Scenes.all,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 },
        },
    },
}

const game = new Phaser.Game(config)
game.scene.start(Scenes.Menu)
window.game = game
