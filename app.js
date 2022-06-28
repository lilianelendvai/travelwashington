function askUserName() {
    let userName = prompt("What is your name?");
    document.write("Thanks for stopping by, " + userName);    
}

function myFunction() {
    confirm("Please visit again... more info to come!");
}

function askWhereYouLive() {
    let whereYouLive = prompt("Do you live in Washington?");

    if (whereYouLive === "Yes"){
        console.log("Great, and feel free to send us your favorite travel destinations in Washington!");
        document.write("Washington's a wonderful place to live!");
    } else {
        console.log("I hope you check out these places in Washginton soon!");
        document.write("I hope you'll be inspired to travel around Washington soon!");
    }
}

function askWashingtonCapital() {
    const questionText = "What is the capital of Washington?"; 
    const correctAnswer = "<p>Correct - Olympia is the capital!</p>";
    let userAnswer = prompt(questionText);

    while (userAnswer != "Olympia") {
        console.log("Incorrect: You guessed: " + userAnswer);
        userAnswer = prompt("Incorrect - please try again. "+questionText);
    }
    document.write("<p>Olympia is the capital!</p>");
}

function addSpaceNeedles(){
    let spaceNeedles = prompt("Please decorate this page - how many Space Needles would you like, 1-5?");
    if (spaceNeedles > 5) {spaceNeedles = 5};
    for (let i = 1; i <= spaceNeedles; i++){
        document.write("<p><img src='images/SpaceNeedleResized.jpg' alt='Space Needle'></p>")
    }
}