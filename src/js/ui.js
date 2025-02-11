import { Actor, ScreenElement, Color, Vector, Label, Font, FontUnit } from "excalibur"
import { Resources } from './resources.js'



// Klasse voor het maken van de User Interface
export class UI extends ScreenElement {
    currencyLabel;
    healthLabel;
    constructor(game) {
        super();
        this.game = game; // Haal alles uit de game op
        // this.buildMode = Game.buildMode; // Haal de bouwmodus variabel op om later aan te passen
        // this.typeOfTower = Game.typeOfTower // Haal de type of tower variabel op
        // this.coins = Game.coins // Haalt de coins op
        // this.playerHealth = Game.playerHealth
    }

    onPostUpdate() {
        this.currencyLabel.text = `Coins: ${this.game.coins}`;
        this.healthLabel.text = `Health: ${this.game.playerHealth}`;

    }

    onInitialize() {
        this.currencyLabel = new Label({
            text: `Coins: ${this.game.coins}`,
            pos: new Vector(20, 620), // Positie links onderin
            color: Color.White,
            font: new Font({
                family: 'Arial',
                size: 26, // Grotere tekstgrootte
                unit: FontUnit.Px
            }),
        });

        this.addChild(this.currencyLabel);

        this.healthLabel = new Label({
            text: `Health: ${this.game.playerHealth}`,
            pos: new Vector(20, 580), // Positie links onderin, boven de coins
            color: Color.White,
            font: new Font({
                family: 'Arial',
                size: 26, // Grotere tekstgrootte
                unit: FontUnit.Px
            }),
        });

        this.addChild(this.healthLabel);



        // Hier wordt een nieuw UI element aangemaakt en toegevoegd
        const athenaUI_Element = new Actor({
            pos: new Vector(305, 640),
            width: 90,
            height: 90,
        });

        athenaUI_Element.graphics.use(Resources.AthenaUI.toSprite());
        athenaUI_Element.z = 10;
        this.addChild(athenaUI_Element);



        const poseidon_UI_Element = new Actor({
            pos: new Vector(425, 640),
            width: 90,
            height: 90,
        });

        poseidon_UI_Element.graphics.use(Resources.PoseidonUI.toSprite())
        poseidon_UI_Element.z = 10;
        this.addChild(poseidon_UI_Element);





        // Wanneer er op UI element geklikt wordt bouwmodus activeren
        athenaUI_Element.on('pointerdown', () => {
            console.log("Bouwmodus geactiveerd");
            this.game.buildMode = true;
            this.game.typeOfTower = 'athenaTower';

        });

        poseidon_UI_Element.on('pointerdown', () => {
            console.log("Bouwmodus geactiveerd");
            this.game.buildMode = true;
            this.game.typeOfTower = 'poseidonTower';
        });

    }

}