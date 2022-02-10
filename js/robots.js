let team1 = "";

let team2 = "";

let winner = "";

let total_meters = 2000;


class Robot {

    constructor(fabrication, element, element_multiplier, speed, weight, damage, energy,  fuel) {
        this.fabrication = fabrication;
        this.element = element;
        this.element_multiplier = element_multiplier;
        this.speed = speed;
        this.weight = weight;
        this.damage = damage;
        this.energy = energy;
        this.fuel = fuel;
        this.meters = 0;
    }

    accelerate() {
        return this.meters += (100/this.weight)*1000;
    }

    heal() {
        return this.energy += 100*this.element_multiplier;
    }

    take_damage() {
        return this.energy -= (100/this.element_multiplier)+this.damage;
    }

};

let robot1 = new Robot("vitamin","Boron",1.1, 900, 1600, 75, 2400, "GXFuel");
let robot2 = new Robot("vikuel","Silicon",1.2, 1000, 1800, 60, 2400, "GXFuel");
let robot3 = new Robot("double_trouble","Germanium",1.1, 1250, 1700, 65, 2400, "LiquidNitrogen");
let robot4 = new Robot("jagger","Arsenic",1.2, 1100, 1300, 80, 2400, "GXFuel");
let robot5 = new Robot("raw","Antimony",1.1, 1200, 1400, 90, 2400, "LiquidNitrogen");
let robot6 = new Robot("manitou","Tellurium",1.2, 1100, 1500, 100, 2400, "Hydrogen");
let robot7 = new Robot("dmitri","Polonium",1.1, 1200, 1600, 95, 2400, "Hydrogen");

let allRobots = {
    1 : robot1,
    2 : robot2,
    3 : robot3,
    4 : robot4,
    5 : robot5,
    6 : robot6,
    7 : robot7
}
