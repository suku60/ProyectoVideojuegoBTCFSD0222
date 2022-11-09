const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const tankCtx = canvas.getContext("2d");
const gameScreen = document.getElementById("gameScreen");
const deployUrl = "http://127.0.0.1:5500/"

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

// let base_image = new Image();
// base_image.src = 'assets/img/tank.svg';

// const rotateSprite = () => {
// let initialSprite = base_image.src
// console.log("working, ", initialSprite)
// }

// console.log(rotateSprite())

const sprites = {
up: 'assets/img/tank.svg',
down: 'assets/img/tank.svg',
left: 'assets/img/tank.svg',
right: 'assets/img/tank.svg'
}

class Robot {

    constructor({position, radius, imageSrc}) {

        this.position = {
            x: position.x,
            y: position.y
        },
        this.radius = radius,
        this.imageSrc = new Image()
        this.imageSrc.src = deployUrl+imageSrc
        
    }
    

    create() {

       tankCtx.fillStyle = this.color 
    //    console.log(this.imageSrc.src)  
       tankCtx.drawImage(this.imageSrc, this.position.x, this.position.y, this.radius, this.radius);
    //    tankCtx.rotate(degrees*Math.PI/180)
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
    imageSrc : 'assets/img/tankNorth.svg'
    }

);

// console.log(robot_1)


robot_1.create()

// console.log(robot_1)


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
    // console.log(direction)
    let imageUrl

    switch (direction) {
        case 1:
            imageUrl = "assets/img/up.svg"
            break;
        case 2:
            imageUrl = "assets/img/down.svg"
            break;
        case 3:
            imageUrl = "assets/img/left.svg"
            break;
        case 4:
            imageUrl = "assets/img/right.svg"
            break;
        case 5:
            imageUrl = "assets/img/toLeft.svg"
            break;
        case 6:
            imageUrl = "assets/img/toRight.svg"
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
        // console.log(movements)
}

const executeMovement = () => {
    // console.log(movements)
    // console.log(robot_1.imageSrc)

    if(movements.length === maxMovements){
        for (let i = 0; i < movements.length; i++) {
            setTimeout(() => {
                interfaceSlots[i+1].style.backgroundColor = "var(--clr-main-morning-blue)"
                if(interfaceSlots[i]){
                    interfaceSlots[i].style.backgroundColor = "transparent"
                    interfaceSlots[i].style.backgroundImage = "none"
                }
                console.log(movements[i])
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
                        // 5 will be turning left, 6 will be right
                        case 5:
                        case 6:
                        console.log(robot_1.imageSrc.src)
                        console.log(deployUrl+"assets/img/tankNorth.svg")
                        console.log(robot_1.imageSrc.src === deployUrl+"assets/img/tankNorth.svg")
                        switch (robot_1.imageSrc.src) {
                                case deployUrl+"assets/img/tankNorth.svg":
                                    console.log("entro 1")
                                    console.log(movements[i])
                                    if(movements[i] === 5){
                                        console.log("entro 2")
                                        robot_1.imageSrc.src = "assets/img/tankWest.svg"
                                        console.log(robot_1.imageSrc.src)
                                    }else{
                                        console.log("entro 3")
                                        robot_1.imageSrc.src = "assets/img/tankEast.svg"
                                    }
                            break;
                                case deployUrl+"assets/img/tankSouth.svg":
                                    if(movements[i] === 5){
                                        robot_1.imageSrc.src = "assets/img/tankEast.svg"
                                    }else{
                                        robot_1.imageSrc.src = "assets/img/tankWest.svg"
                                    }
                            break;
                                case deployUrl+"assets/img/tankWest.svg":
                                    if(movements[i] === 5){
                                        robot_1.imageSrc.src = "assets/img/tankSouth.svg"
                                    }else{
                                        robot_1.imageSrc.src = "assets/img/tankNorth.svg"
                                    }                                    
                            break;
                                case deployUrl+"assets/img/tankEast.svg":
                                    if(movements[i] === 5){
                                        robot_1.imageSrc.src = "assets/img/tankNorth.svg"
                                    }else{
                                        robot_1.imageSrc.src = "assets/img/tankSouth.svg"
                                    }                                    
                            break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;   //  your code here
                    }
            }, i*750);
        }
        // console.log(robot_1)
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