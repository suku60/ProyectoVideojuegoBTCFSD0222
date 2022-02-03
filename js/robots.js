let team1 = "";

let team2 = "";

let winner = "";


class Robot {

    constructor(fabrication, element, speed, weight, traction, fuel) {
        this.fabrication = fabrication;
        this.element = element;
        this.speed = speed;
        this.weight = weight;
        this.traction = traction;
        this.fuel = fuel;
        this.meters = 0;
    }

    accelerate() {
        return this.speed += 20;
    }

    slow_down_movement () {
        return this.speed = 0;
    }

};

let robot1 = new Robot("Vitamin", "Boron", 90, 1600, 75, "GXFuel");
let robot2 = new Robot("VIKUEL", "Silicon", 100, 1800, 60, "GXFuel");
let robot3 = new Robot("DOUBLE_TROUBLE", "Germanium", 105, 1700, 65, "LiquidNitrogen");
let robot4 = new Robot("Jagger", "Arsenic", 110, 1300, 80, "GXFuel");
let robot5 = new Robot("Raw", "Antimony", 110, 1400, 90, "LiquidNitrogen");
let robot6 = new Robot("Manitou", "Tellurium", 120, 1500, 100, "Hydrogen");
let robot7 = new Robot("D-Mitri", "Polonium", 120, 1600, 95, "Hydrogen");

let allRobots = {
    1 : robot1,
    2 : robot2,
    3 : robot3,
    4 : robot4,
    5 : robot5,
    6 : robot6,
    7 : robot7
}
