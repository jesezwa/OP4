import '../css/style.css'
import { Engine } from "excalibur"
import { ResourceLoader } from './resources.js'
import { GameScene } from './GameScene.js'
import { EndScene } from './EindScene.js'
import { StartScene } from './StartScene.js'
import { BuiltTower } from './builtTower.js'
import { CreateEnemy } from './createEnemy.js'

export class Game extends Engine {

    buildMode; // Buildmode variabele voor bijhouden of er gebouwd kan worden
    typeOfTower; // Variabele voor het type toren
    coins; // Variabele voor het bijhouden van de valuta
    playerHealth;// Variabele voor spelers hp

    constructor() {
        super({
            // Grote van het scherm
            width: 1248,
            height: 704,
            // Maximale FPS
            maxFps: 60,
            //   displayMode: DisplayMode.FitScreen
        })
        this.buildMode = false; // Bouwmodus standaard op false zodat er niet gelijk gebouwd kan worden
        this.typeOfTower = null; // Type of tower leeg zetten
        this.coins = 1000; // Standaard waarde op 200 zetten
        this.playerHealth = 1000;

        this.start(ResourceLoader).then(() => {
            this.add("start", new StartScene(this));
            this.add("game", new GameScene(this));
            this.add("end", new EndScene(this));
            this.goToScene("start");
        }
        )// Resources inladen en daarna pas de game starten

    }

    playerTakesDamage() {
        if (this.playerHealth >= 150) {
            console.log('speler geraakt')
            this.playerHealth -= 500;
            console.log(this.playerHealth)


        } else if (this.playerHealth <= 150) {
            console.log('gameover')
            this.goToScene("end")
        }
    }


    resetGame() {
        this.buildMode = false;
        this.typeOfTower = null;
        this.coins = 1000;
        this.playerHealth = 1000;

        // Verwijder alle torens en vijanden
        this.currentScene.actors.forEach(actor => {
            actor.kill()


        });

        // Ga terug naar de startscene

    }


}



new Game()

