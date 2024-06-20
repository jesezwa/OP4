import { Scene, Label, Vector, Color, Font, FontUnit } from "excalibur";

export class StartScene extends Scene {
    onInitialize(engine) {

        this.backgroundColor = Color.Black;

        const textLabel = new Label({
            text: 'Klik op Enter om te beginnen ',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            color: Color.White,
            font: new Font({
                family: 'Arial',
                size: 40,
                unit: FontUnit.Px,
                textAlign: 'center'
            }),
        });

        const startLabel = new Label({
            text: 'Laat de vijanden niet te dicht bij je komen! ',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 3),
            color: Color.White,
            font: new Font({
                family: 'Arial',
                size: 40,
                unit: FontUnit.Px,
                textAlign: 'center'
            }),
        });

        textLabel.actions.blink(500, 500, Infinity);
        this.add(startLabel);
        this.add(textLabel)




        engine.input.keyboard.on('press', (evt) => {
            if (evt.key === 'Enter') {
                engine.goToScene('game');
            }
        });
    }
}