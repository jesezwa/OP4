import { Scene, Vector } from "excalibur";
import { CreateTileMap, CreateMapGridOverlay } from './createWorld.js';
import { UI } from './ui.js';
import { HarpyEnemySpawner } from './spawnEnemy.js';

export class GameScene extends Scene {

    constructor(game) {
        super();
        this.game = game; // Bewaar de game instantie
    }
    onInitialize(engine) {
        engine.playerHealth = 1000;

        const createTileMap = new CreateTileMap(this.game);
        this.add(createTileMap);

        const ui = new UI(this.game);
        this.add(ui)

        const cellPositions = [
            new Vector(208, 530), new Vector(304, 530), new Vector(400, 530), new Vector(496, 530), new Vector(592, 530), new Vector(688, 530),
            new Vector(208, 434), new Vector(304, 434), new Vector(400, 434), new Vector(496, 434), new Vector(592, 434), new Vector(688, 434),
            new Vector(208, 338), new Vector(304, 338), new Vector(400, 338), new Vector(496, 338), new Vector(592, 338), new Vector(688, 338),
            new Vector(208, 242), new Vector(304, 242), new Vector(400, 242), new Vector(496, 242), new Vector(592, 242), new Vector(688, 242),
            new Vector(208, 146), new Vector(304, 146), new Vector(400, 146), new Vector(496, 146), new Vector(592, 146), new Vector(688, 146),
            new Vector(208, 50), new Vector(304, 50), new Vector(400, 50), new Vector(496, 50), new Vector(592, 50), new Vector(688, 50)
        ]

        const gridOverlay = new CreateMapGridOverlay(this.game, cellPositions, 96);
        this.add(gridOverlay);

        const harpySpawner = new HarpyEnemySpawner(engine.coins, this.game);
        harpySpawner.startSpawning();
    }
}