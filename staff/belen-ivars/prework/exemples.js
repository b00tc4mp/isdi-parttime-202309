class Bottle {
    content;
    isFull;

    constructor(content) {
        this.content = content;

    }

    fill() {
        this.isFull = true;
        this.patatasFritas = "93";
    }
}
 
const waterBottle = new Bottle("water")
const cocaBottle = new Bottle("coke")
waterBottle.fill()
if (cocaBottle.isFull) { console.log("beure cocacola")}
else if (waterBottle.isFull) {console.log("beure aigua")}
console.log(waterBottle)