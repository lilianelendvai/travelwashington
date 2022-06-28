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
    let userAnswer = prompt("What is the capital of Washington?");
    const correctAnswer = "<p>Correct - Olympia is the capital!</p>";

    if (userAnswer === "Olympia"){
        document.write(correctAnswer);
    } else {
        userAnswer = prompt("Please try again: what is the capital of Washington?");
        if (userAnswer === "Olympia"){
            document.write(correctAnswer);
        } else {
            document.write("<p>Olympia is the capital!</p>");
        }
    }  
}
