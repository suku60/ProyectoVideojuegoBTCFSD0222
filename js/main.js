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

class Robot {

    constructor({position, radius, imageSrc}) {

        this.position = {
            x: position.x,
            y: position.y
        },
        this.radius = radius,
        this.imageSrc = new Image()
        this.imageSrc.src = deployUrl+imageSrc
        this.imageSrc.style.fill = "red"
        
    }
    

    create() {

       tankCtx.fillStyle = this.color 
       tankCtx.drawImage(this.imageSrc, this.position.x, this.position.y, this.radius, this.radius);
       console.log(this.imageSrc)

    }


    update() {
        this.create()
    }
}

const robot_1 = new Robot({
    position: {
        x: 550,
        y: 350
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

// improving executeMovement based on image 
const executeMovement2 = () => {
    if(movements.length === maxMovements){
        for (let i = 0; i < movements.length; i++) {
            setTimeout(() => {
                interfaceSlots[i+1].style.backgroundColor = "var(--clr-main-morning-blue)"
                if(interfaceSlots[i]){
                    interfaceSlots[i].style.backgroundColor = "transparent"
                    interfaceSlots[i].style.backgroundImage = "none"
                }
                switch (robot_1.imageSrc.src) {
                    case deployUrl+"assets/img/tankNorth.svg":
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
                            
                            case 5:
                            case 6:
                                if(movements[i] === 5){
                                    robot_1.imageSrc.src = "assets/img/tankWest.svg"
                                }else{
                                    robot_1.imageSrc.src = "assets/img/tankEast.svg"
                                }
                            break;

                            default:
                            break;

                        }

                    break;
                    case deployUrl+"assets/img/tankSouth.svg":
                        switch (movements[i]) {
                            case 1:    
                            if (robot_1.position.y < canvas.height - robot_1.radius) {
                                robot_1.position.y += robot_1.radius
                            }
                            break;
                
                            case 2:
                                if (robot_1.position.y > 0) {
                                    robot_1.position.y += -robot_1.radius
                                }
                            break;
                            
                            case 5:
                            case 6:
                                if(movements[i] === 5){
                                    robot_1.imageSrc.src = "assets/img/tankEast.svg"
                                }else{
                                    robot_1.imageSrc.src = "assets/img/tankWest.svg"
                                }
                            break;
                            
                            default:
                            break;

                        }
                    break;
                    case deployUrl+"assets/img/tankWest.svg":
                        switch (movements[i]) {
                            case 1:    
                            if (robot_1.position.x > 0) {
                                robot_1.position.x += -robot_1.radius
                            }
                            break;
                
                            case 2:
                                if (robot_1.position.x < canvas.width - robot_1.radius) {
                                    robot_1.position.x += robot_1.radius
                                }
                            break;
                            
                            case 5:
                            case 6:
                                if(movements[i] === 5){
                                    robot_1.imageSrc.src = "assets/img/tankSouth.svg"
                                }else{
                                    robot_1.imageSrc.src = "assets/img/tankNorth.svg"
                                }
                            break;
                            
                            default:
                            break;

                        }
                    break;
                    case deployUrl+"assets/img/tankEast.svg":
                        switch (movements[i]) {
                            case 1:    
                            if (robot_1.position.x < canvas.width - robot_1.radius) {
                                robot_1.position.x += robot_1.radius
                            }
                            break;
                
                            case 2:
                                if (robot_1.position.x > 0) {
                                    robot_1.position.x += -robot_1.radius
                                }
                            break;
                            
                            case 5:
                            case 6:
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
                    break;
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
                        case 5:
                        case 6:
                        switch (robot_1.imageSrc.src) {
                                case deployUrl+"assets/img/tankNorth.svg":
                                    if(movements[i] === 5){
                                        robot_1.imageSrc.src = "assets/img/tankWest.svg"
                                    }else{
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