const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const gameScreen = document.getElementById("gameScreen");

const height = 750;
const width = 1150;

canvas.height = height
canvas.width = width

ctx.fillStyle = "red"
ctx.fillRect(0, 0, canvas.width, canvas.height);

let robotPosition = {
    x: 0,
    y: 0
}

class Robot {

    constructor({position, radius, color}) {

        this.position = {
            x: position.x,
            y: position.y
        },
        this.radius = radius,
        this.color = color
        
    }
     
    create() {
            
       ctx.fillStyle = this.color
       ctx.fillRect(this.position.x, this.position.y, this.radius, this.radius);

    }

    update() {
        this.create()
    }
}

const robot_1 = new Robot({
    position: {
        x: 0,
        y: 0
    },
    radius : 50,
    color : "blue"
    }

);


robot_1.create()

console.log(robot_1)


let lastkey

let movements = []
let maxMovements = 6
const interfaceSlots = {
1: document.getElementById("moveSlot1"),
2: document.getElementById("moveSlot2"),
3: document.getElementById("moveSlot3"),
4: document.getElementById("moveSlot4"),
5: document.getElementById("moveSlot5"),
6: document.getElementById("moveSlot6"),
}

const setMovement = (direction) => {
    let imageUrl

    switch (direction) {
        case 1:
            imageUrl = "../assets/img/up.svg"
            break;
        case 2:
            imageUrl = "../assets/img/down.svg"

            break;
        case 3:
            imageUrl = "../assets/img/left.svg"

            break;

        case 4:
            imageUrl = "../assets/img/right.svg"
            break;

        default:
            break;
    }

        if(movements.length < maxMovements){ 
            movements.push(direction)

            interfaceSlots[movements.length].style.backgroundImage = `url(${imageUrl})`
            
        }else{
            console.log("movements maxed", movements.length)
        }
        console.log(movements)
}

const executeMovement = () => {
    if(movements.length === maxMovements){
        // console.log(movements)
        for (let i = 0; i < movements.length; i++) {
            setTimeout(() => {
                // console.log("moving...", interfaceSlots[i+1])
                interfaceSlots[i+1].style.backgroundColor = "green"
                if(interfaceSlots[i]){
                    interfaceSlots[i].style.backgroundColor = "transparent"
                    interfaceSlots[i].style.backgroundImage = "none"
                }
                switch (movements[i]) {
                    case 1:
                        if (robot_1.position.y > 0) {
                            robot_1.position.y += -robot_1.radius
                        }
                        break;
            
                    case 2:
                        if (robot_1.position.y < canvas.height - robot_1.radius) {
                            robot_1.position.y += robot_1.radius
                        }
                        break;
            
                    case 3:
                        if (robot_1.position.x > 0) {
                            robot_1.position.x += -robot_1.radius
                        }
                        break;
            
                    case 4:
                        if (robot_1.position.x < canvas.width - robot_1.radius) {
                            robot_1.position.x += robot_1.radius
                        }
                        break;
            
                    default:
                        break;   //  your code here
                    }
            }, i*750);
        }

        setTimeout(() => {
            interfaceSlots[movements.length].style.backgroundColor = "transparent"
            interfaceSlots[movements.length].style.backgroundImage = "none"
            movements = []
       

        }, (movements.length)*750);
       
    }else console.log("you need to have at least 6 movements")
}


const animate = () => {
    window.requestAnimationFrame(animate)
    ctx.fillStyle = "black"

    ctx.fillRect(0, 0, canvas.width, canvas.height)
    robot_1.update()

}

animate()