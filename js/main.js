// resetGame clears everything so it is empty and available to be filled (play) once again.
let firstRobot = "";
let secondRobot = "";

const resetGame = () => {

    team1 = "";
    team2 = "";
    winner = "";
    allRobots = "";

    firstRobot.classList.remove("Selected_Robot");
    secondRobot.classList.remove("Selected_Robot");

    switchScreen(1);
    
    location.reload();

};


/* switchScreen is what we use to go to the desired screen. What happens here:
- screenNumber obtains a value. 
- We declare allScreens as an array with a string of every screen.
- Using .filter we make allScreen equal as the desired screen using the value asigned throw screenNumber. 
Then we declare with ! that we want to get all the screens that are not the desired screen so we can give
them the "display=none" property.
- We give the "diaplay=block" property to the desired screen. (The name we asign here is temporary, and will
be a momentary naming for the screens)
- With a for, we declare this temporary naming and asign the "display=none" property to the undesired screens.
*/

const switchScreen = (screenNumber) => {

    let screenDesired = "screen" + screenNumber;

    let allScreens = ["screen1", "screen2", "screen3", "screen4", "screen5"];

    allScreens = allScreens.filter(screenNumber => !screenDesired.includes(screenNumber));

    document.getElementById(screenDesired).style.display = "block";

    for (let screenTemporary of allScreens) {

        document.getElementById(screenTemporary).style.display = "none";

    }


}

/* selectRobot is a constant that we create for the team selection screen, which allow us to include the robots
inside them */


const selectRobot = (numberRobot) => {

    if (team1 == "") {
        team1 = allRobots[numberRobot];
        console.log(`${numberRobot}`)
        firstRobot = document.getElementById(numberRobot)
        let robotData = document.getElementById("data" + 1);
        firstRobot.onclick = "";
        firstRobot.classList.add("Selected_Robot");
        robotData.innerHTML = `${team1.fabrication}`;

    } else if (team2 == "") {
        team2 = allRobots[numberRobot];
        secondRobot = document.getElementById(numberRobot)
        robotData = document.getElementById("data" + 2);
        secondRobot.onclick = "";
        secondRobot.classList.add("Selected_Robot");
        robotData.innerHTML = `${team2.fabrication}`;

        setTimeout(() => {
            playButton.innerHTML = `<div class="play_button" alt="Click here to play" onclick="switchScreen(4)">PLAY</div>`;
        }, 666);

    }
}

// inGameDisplay is a constant that will update our stats in-game, setting every image that we need and everything we need to show on screen.


const inGameDisplay = () => {

    document.getElementById("red_start_screen").style.display = "none";

    robotDisplay_team1.innerHTML = `<div class="container_robot" id="robot_movement_team1">
    <div class="container_robot_symbol">
        <div class="container_robot_symbol_top">
            <div class="container_robot_symbol_1" id="robot_${team1.fabrication}_1"></div>
            <div class="container_robot_symbol_2" id="robot_${team1.fabrication}_2"></div>
            <div class="container_robot_symbol_3" id="robot_${team1.fabrication}_3"></div>
        </div>
        <div class="container_robot_symbol_mid">
            <div class="container_robot_symbol_4" id="robot_${team1.fabrication}_4"></div>
            <div class="container_robot_symbol_5" id="robot_${team1.fabrication}_5"></div>
            <div class="container_robot_symbol_6" id="robot_${team1.fabrication}_6"></div>
        </div>
        <div class="container_robot_symbol_bot">
            <div class="container_robot_symbol_7" id="robot_${team1.fabrication}_7"></div>
            <div class="container_robot_symbol_8" id="robot_${team1.fabrication}_8"></div>
            <div class="container_robot_symbol_9" id="robot_${team1.fabrication}_9"></div>
        </div>
    </div>
    <div class="container_robot_upperpart">
        <div class="container_robot_upperpart_1">
        </div>
        <div class="container_robot_upperpart_2">
            <div class="container_robot_upperpart_2_1">
                <div class="container_robot_upperpart_2_1_1">
                </div>
                <div class="container_robot_upperpart_2_1_2">
                    <div class="container_robot_upperpart_2_1_2_1">
                    </div>
                    <div class="container_robot_upperpart_2_1_2_2">
                        <div class="container_robot_upperpart_2_1_2_2_1">
                        </div>
                        <div class="container_robot_upperpart_2_1_2_2_2">
                        </div>
                        <div class="container_robot_upperpart_2_1_2_2_3">
                        </div>
                    </div>
                    <div class="container_robot_upperpart_2_1_2_3">
                        <div class="container_robot_upperpart_2_1_2_3_1">
                        </div>
                        <div class="container_robot_upperpart_2_1_2_3_2">
                        </div>
                        <div class="container_robot_upperpart_2_1_2_3_3">
                        </div>
                    </div>
                </div>
                <div class="container_robot_upperpart_2_1_3">
                </div>
            </div>
            <div class="container_robot_upperpart_2_2">
                <div class="container_robot_upperpart_2_2_1"></div>
                <div class="container_robot_upperpart_2_2_2"></div>
                <div class="container_robot_upperpart_2_2_3"></div>
            </div>
            <div class="container_robot_upperpart_2_3">
            </div>
        </div>
        <div class="container_robot_upperpart_3">
        </div>
    </div>
    <div class="container_robot_groundpart">
        <div class="container_robot_groundpart_1">
        </div>
        <div class="container_robot_groundpart_2">
            <div class="container_robot_groundpart_2_1">
            </div>
            <div class="container_robot_groundpart_2_2">
            </div>
            <div class="container_robot_groundpart_2_3">
            </div>
        </div>
        <div class="container_robot_groundpart_3">
        </div>
    </div>`;
    statsDisplay_team1.innerHTML = `<div class="stats_container">
    <div class="stats_container_rows">
    <div class="stats_fabrication">NAME</div>
    </div>
    <div class="stats_container_rows">
    <div class="stats_fabrication">${team1.fabrication}</div>
    </div>
    </div>`;

    robotDisplay_team2.innerHTML = `<div class="container_robot" id="robot_movement_team2">
    <div class="container_robot_symbol">
        <div class="container_robot_symbol_top">
            <div class="container_robot_symbol_1" id="robot_${team2.fabrication}_1"></div>
            <div class="container_robot_symbol_2" id="robot_${team2.fabrication}_2"></div>
            <div class="container_robot_symbol_3" id="robot_${team2.fabrication}_3"></div>
        </div>
        <div class="container_robot_symbol_mid">
            <div class="container_robot_symbol_4" id="robot_${team2.fabrication}_4"></div>
            <div class="container_robot_symbol_5" id="robot_${team2.fabrication}_5"></div>
            <div class="container_robot_symbol_6" id="robot_${team2.fabrication}_6"></div>
        </div>
        <div class="container_robot_symbol_bot">
            <div class="container_robot_symbol_7" id="robot_${team2.fabrication}_7"></div>
            <div class="container_robot_symbol_8" id="robot_${team2.fabrication}_8"></div>
            <div class="container_robot_symbol_9" id="robot_${team2.fabrication}_9"></div>
        </div>
    </div>
    <div class="container_robot_upperpart">
        <div class="container_robot_upperpart_1">
        </div>
        <div class="container_robot_upperpart_2">
            <div class="container_robot_upperpart_2_1">
                <div class="container_robot_upperpart_2_1_1">
                </div>
                <div class="container_robot_upperpart_2_1_2">
                    <div class="container_robot_upperpart_2_1_2_1">
                    </div>
                    <div class="container_robot_upperpart_2_1_2_2">
                        <div class="container_robot_upperpart_2_1_2_2_1">
                        </div>
                        <div class="container_robot_upperpart_2_1_2_2_2">
                        </div>
                        <div class="container_robot_upperpart_2_1_2_2_3">
                        </div>
                    </div>
                    <div class="container_robot_upperpart_2_1_2_3">
                        <div class="container_robot_upperpart_2_1_2_3_1">
                        </div>
                        <div class="container_robot_upperpart_2_1_2_3_2">
                        </div>
                        <div class="container_robot_upperpart_2_1_2_3_3">
                        </div>
                    </div>
                </div>
                <div class="container_robot_upperpart_2_1_3">
                </div>
            </div>
            <div class="container_robot_upperpart_2_2">
                <div class="container_robot_upperpart_2_2_1"></div>
                <div class="container_robot_upperpart_2_2_2"></div>
                <div class="container_robot_upperpart_2_2_3"></div>
            </div>
            <div class="container_robot_upperpart_2_3">
            </div>
        </div>
        <div class="container_robot_upperpart_3">
        </div>
    </div>
    <div class="container_robot_groundpart">
        <div class="container_robot_groundpart_1">
        </div>
        <div class="container_robot_groundpart_2">
            <div class="container_robot_groundpart_2_1">
            </div>
            <div class="container_robot_groundpart_2_2">
            </div>
            <div class="container_robot_groundpart_2_3">
            </div>
        </div>
        <div class="container_robot_groundpart_3">
        </div>
    </div>`;
    statsDisplay_team2.innerHTML = `<div class="stats_container">
    <div class="stats_container_rows">
    <div class="stats_fabrication">NAME</div>
    </div>
    <div class="stats_container_rows">
    <div class="stats_fabrication">${team2.fabrication}</div>
    </div>
    </div>`;
};


// InGame action buttons


// MOVEMENT 

const move1 = () => {


    if (team1.meters >= total_meters) {

        winner = team1;

        winner_show.innerHTML = `the winner is... <br>
        ${team1.fabrication}`;

        setTimeout(() => {
            switchScreen(5);
        }, 1200);

    } else {

        team1.accelerate();
        team1.move_up();

        document.getElementById("robot_team1").style.paddingBottom = `${team1.movement}` + "em";


    };


    meters1_show.innerHTML = `<p>${team1.meters}</p>`;

    console.log(`team 1 movement is ${team1.movement}`)
    console.log(`team 1 reached ${team1.meters} meters`)
    console.log(`the winner is ${winner}`)

}

const move2 = () => {


    if (team2.meters >= total_meters) {

        winner = team2;

        switchScreen(5);

        winner_show.innerHTML = `the winner is... <br>
        ${team2.fabrication}`;

        setTimeout(() => {
            switchScreen(5);
        }, 1200);

    } else {

        team2.accelerate();
        team2.move_up();

        document.getElementById("robot_team2").style.paddingBottom = `${team2.movement}` + "em";

    };


    meters2_show.innerHTML = `<p>${team2.meters}</p>`;

    console.log(`team 2 reached ${team2.meters} meters`);
    console.log(`the winner is... ${winner}`);
}

// HEALING

const healing1 = () => {

    if (team1.energy <= 0) {


        console.log(`consolelog ha entrado en el if ${team1.energy}`)

        winner = team2;

        winner_show.innerHTML = `the winner is... <br>
        ${team2.fabrication}`;

        setTimeout(() => {
            switchScreen(5);
        }, 1200);

    } else {

        console.log(`consolelog else ${team1.energy}`)

        team1.heal();



    };

    energy1_show.innerHTML = `<p>${team1.energy}</p>`;

    console.log(`energy team 1 is ${team1.energy}`)
    console.log(`the winner is ${winner}`)

}

const healing2 = () => {

    if (team1.energy <= 0) {

        winner = team1;

        winner_show.innerHTML = `the winner is... <br>
        ${team2.fabrication}`;

        setTimeout(() => {
            switchScreen(5);
        }, 1200);

    } else {

        team2.heal();

    };


    energy2_show.innerHTML = `<p>${team2.energy}</p>`;

    console.log(`energy team 2 is ${team2.energy}`)
    console.log(`the winner is ${winner}`)

}

// ATTACK

const shooting1 = () => {


    if (team2.energy > 0) {

        team2.take_damage();


        energy2_show.innerHTML = `<p>${team2.energy}</p>`;

    } else {

        winner = team1;

        winner_show.innerHTML = `the winner is... <br>
        ${team1.fabrication}`;



        setTimeout(() => {
            switchScreen(5);
        }, 1200);


    };


    console.log(`energy team 2 is ${team2.energy}`)
    console.log(`the winner is ${winner}`)

}

const shooting2 = () => {


    if (team1.energy > 0) {

        team1.take_damage();


        energy1_show.innerHTML = `<p>${team1.energy}</p>`;

    } else {

        winner = team2;

        winner_show.innerHTML = `the winner is... <br>
        ${team1.fabrication}`;

        setTimeout(() => {
            switchScreen(5);
        }, 1200);


    };



    console.log(`energy team 1 is ${team1.energy}`)
    console.log(`the winner is ${winner}`)

}



// KIDNAPPING HTML ELEMENTS

let playButton = document.getElementById("play_button_indicator");
let robotDisplay_team1 = document.getElementById("robot_team1");
let robotDisplay_team2 = document.getElementById("robot_team2");
let statsDisplay_team1 = document.getElementById("stats_team1");
let statsDisplay_team2 = document.getElementById("stats_team2");
let startDisplay = document.getElementById("red_start_screen");
let winner_show = document.getElementById("winner_id");
let meters1_show = document.getElementById("meters1_show");
let meters2_show = document.getElementById("meters2_show");
let energy1_show = document.getElementById("energy1_show");
let robot_movement_team1 = document.getElementById("robot_movement_team1");
let robot_movement_team2 = document.getElementById("robot_movement_team2")



// document.body.addEventListener("keydown", (ev) => {

//     if(screen3.style.display == "block")
// });