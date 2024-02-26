import {Circle} from "./circle.js"

console.log('functions.js loaded successfully');
//lol

document.addEventListener('DOMContentLoaded', () => {

    console.log('DOMContentLoaded event fired.');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const x_input = document.querySelector('#x');
    const y_input = document.querySelector('#y');
    const draw_button = document.querySelector('button');
    const radio_form = document.querySelector('form');
    const line_width_input = document.querySelector('input[type=number]');

    const updateUI = (label3, label4) => {
        document.querySelector('div#third label').innerHTML = label3;

        if (label4 != undefined) {
            document.querySelector('div#fourth label').innerHTML = label4;
            document.querySelector('div#fourth label').style.display = "inline-block";
            document.querySelector('div#fourth input').style.display = "inline-block";
        } else {
            document.querySelector('div#fourth label').style.display = "none";
            document.querySelector('div#fourth input').style.display = "none";
        }
    };
    console.log('Before adding event listener');
    draw_button.addEventListener('click', () => {
        const shape = radio_form['shape'].value;

        console.log('Button clicked');

        switch (shape) {
            case 'line':
                // Implement line drawing logic
                break;

                case 'circle':
                    console.log('Drawing Circle');
                    debugger; // Add this line
                    drawCircle();
                    break;

            case 'rectangle':
                // Implement rectangle drawing logic
                break;

            case 'square':
                // Implement square drawing logic
                break;
        }
    });

    const drawCircle = () => {
        console.log('Drawing Circle function called');
        const x = x_input.value;
        const y = y_input.value;
        const width = document.querySelector('div#third input').value;
        const lineWidth = line_width_input.value;
        const circle = new Circle(x, y, width / 2);
        circle.setLineWidth(lineWidth);
        circle.draw(ctx);
    };
});