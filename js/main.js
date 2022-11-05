const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const gameScreen = document.getElementById("gameScreen");

const height = 750;
const width = 1250;

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

const animate = () => {
    window.requestAnimationFrame(animate)
    ctx.fillStyle = "black"

    ctx.fillRect(0, 0, canvas.width, canvas.height)
    robot_1.update()
}

animate()



let lastkey

window.addEventListener("keydown", (e) => {
    let key = e.key
    if(e.key.toLowerCase() !== e.key){
        key = e.key.toLowerCase()
    }

    console.log(e.key)

    switch (key) {
        case "w":
            if(robot_1.position.y > 0){
                robot_1.position.y += -robot_1.radius
            }
        break;

        case "s":
            if(robot_1.position.y < canvas.height - robot_1.radius){
                robot_1.position.y += robot_1.radius
            }
        break;

        case "a":
            if(robot_1.position.x > 0){
                robot_1.position.x += -robot_1.radius
            }
        break;

        case "d":
            if(robot_1.position.x < canvas.width - robot_1.radius){
                robot_1.position.x += robot_1.radius
            }
        break;
    
        default:
            break;
    }
})

window.addEventListener("keyup", (e) => {

    let key = e.key
    if(e.key.toLowerCase() !== e.key){
        key = e.key.toLowerCase()
    }

    switch (key) {
        case "w":
            lastkey = "w"
        break;

        case "s":
            lastkey = "s"
        
        break;

        case "a":
            lastkey = "a"

        break;

        case "d":
            lastkey = "d"
    
        break;
        
        default:
            break;
    }
    // console.log(e)
})