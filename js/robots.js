let team1 = "";

let team2 = "";

let winner = "";


class Robot {

    constructor(fabrication, element, speed, weight, damage, energy,  fuel) {
        this.fabrication = fabrication;
        this.element = element;
        this.speed = speed;
        this.weight = weight;
        this.damage = damage;
        this.energy = energy;
        this.fuel = fuel;
        this.meters = 0;
    }

    accelerate() {
        return this.speed += 100;
    }

    heal () {
        return this.energy += 100;
    }

};

let robot1 = new Robot("Vitamin","Boron", 90, 1600, 75, 2400, "GXFuel");
let robot2 = new Robot("VIKUEL","Silicon", 100, 1800, 60, 2400, "GXFuel");
let robot3 = new Robot("DOUBLE_TROUBLE","Germanium", 105, 1700, 65, 2400, "LiquidNitrogen");
let robot4 = new Robot("Jagger","Arsenic", 110, 1300, 80, 2400, "GXFuel");
let robot5 = new Robot("Raw","Antimony", 110, 1400, 90, 2400, "LiquidNitrogen");
let robot6 = new Robot("Manitou","Tellurium", 120, 1500, 100, 2400, "Hydrogen");
let robot7 = new Robot("D-Mitri","Polonium", 120, 1600, 95, 2400, "Hydrogen");

let allRobots = {
    1 : robot1,
    2 : robot2,
    3 : robot3,
    4 : robot4,
    5 : robot5,
    6 : robot6,
    7 : robot7
}
