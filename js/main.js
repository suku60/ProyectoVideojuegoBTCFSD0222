// resetGame clears everything so it is empty and available to be filled (play) once again.

const resetGame = () => {
    team1 = [];
    team2 = [];
    winner = "";
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

    let allScreens = ["screen1","screen2","screen3","screen4","screen5"];

    allScreens = allScreens.filter(screenNumber => !screenDesired.includes(screenNumber));

    document.getElementById(screenTemporary).style.display="block";

    for (let screenTemporary of allScreens) {
        
        document.getElementById(screenTemporary).style.display="none";
    
    }

    
}

/* selectCar is a constant that we create */