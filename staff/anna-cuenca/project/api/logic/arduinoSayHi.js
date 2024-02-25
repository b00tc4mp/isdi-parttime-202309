import pkg from 'johnny-five'
const { Board, Proximity } = pkg
import { Otto } from './otto.js'

const FORWARD = 1;
const BACKWARD = -1;
const LEFT = 1;
const RIGHT = -1;

const board = new Board();

let sayHi = false



console.log('while')
board.on("ready", () => {
    const proximity = new Proximity({
        controller: "HCSR04",
        pin: 9
    })

    while (sayHi === false) {
        proximity.on("change", () => {
            const { centimeters, inches } = proximity
            console.log("Proximity: ")
            console.log("  cm  : ", centimeters)
            console.log("  in  : ", inches)
            console.log("-----------------")
        })
    }
})






const arduinoWalking = () => {
    return new Promise((resolve, reject) => {
        //const board = new Board();

        board.on("ready", () => {
            // Inicializa la instancia de Otto con los pines correctos para tus servos
            const myOtto = new Otto({
                leftLegPin: 2,
                rightLegPin: 3,
                leftFootPin: 4,
                rightFootPin: 5,
                board: board
            });

            myOtto.init(); // Prepara Otto para moverse

            // Ahora utiliza el método walk de Otto para caminar
            myOtto.walk(15, 2000, FORWARD).then(() => {
                console.log('Otto walked!');
                resolve();
            }).catch(error => {
                console.error('Otto failed to walk:', error);
                reject(error);
            });
        });

        board.on("error", error => {
            console.error('Board initialization failed:', error.message);
            reject(error);
        });
    });
};

export default arduinoSayHi