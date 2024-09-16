import Phaser from "../Phaser.js"

console.log("Defining Menu scene")
export default class Menu extends Phaser.Scene {
    constructor() {
        console.log("Constructor Menu scene")
        super({ key: "Menu" })
    }

    preload() {
        console.log("Preload Menu scene")
        this.load.setBaseURL(document.location.origin + "/game/assets/")
        this.load.image("bg1", "bg.png")
        this.load.image("bg2", "bg2.png")
        this.load.image("blob", "blob.png")
    }

    create() {
        console.log("Created Menu scene")
        this.add.image(400, 300, "bg1")
        let bgr = this.add.image(400, 300, "bg2")
        bgr.setAlpha(0.7)

        
        for (let i = 0; i < 6; i++) {
            const particles = this.add.particles(0, 0, "blob", {
                speed: 10+Math.ceil(Math.random()*50),
                scale: { start: 1, end: 0 },
            })
            
            
            const blob = this.physics.add.image(50+Math.ceil(Math.random()*700), 300+Math.ceil(Math.random()*100), "blob")
            blob.setVelocity(-50+Math.ceil(Math.random()*175), -50+Math.ceil(Math.random()*100));
            blob.setBounce(1, 1)
            blob.setCollideWorldBounds(true)
            
            particles.startFollow(blob)
        }
        this.add.text(0, 330, "Click to start", {
            font: "143px Arial",
            fill: "#A000A040",
        })

        this.input.once('pointerdown', function (event) {
            // TODO: Can't this be like an enum or something typed at least?
            this.scene.start("Demo")
        }, this);
    }
}
