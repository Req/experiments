import Phaser from '../Phaser.js';

console.log("Defining Demo scene -- haha, get it? DemoScene? :--D");

export default class Demo extends Phaser.Scene
{
    constructor(){
        console.log("Constructor Demo scene");
        super({ key: 'Demo' });
    }

    preload ()
    {
        console.log("Preload Demo scene");
        this.load.setBaseURL('https://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create ()
    {
        console.log("Created Demo scene");
        this.add.image(400, 300, 'sky');

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        particles.startFollow(logo);

        this.add.text(0, 330, "Start to click", {
            font: "143px Arial",
            fill: "#0000A040",
        })

        this.input.once('pointerdown', function (event) {
            // TODO: Can't this be like an enum or something typed at least?
            this.scene.start("Menu")
        }, this);
    }
}
