let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const uScore= document.querySelector("#userScore")
const cScore = document.querySelector("#computerScore")


choices.forEach((choice) =>{
    console.log(choice);
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        console.log("choices was " ,userChoice)
        playGame(userChoice);
    })
})

const genCompChoice =() =>{
    const options = ["rock", "paper" , "scissor"];
    const radnIdx =Math.floor(Math.random()*3);
    return options[radnIdx];

}

const DrawGame =() =>{
    console.log("game was draw");
    msg.innerText = "GAME DRAW!"
    msg.style.backgroundColor= "#081431"
}

const showWinner =(userWin, userChoice, comChoice) =>{
    if(userWin){
        console.log("user win ")
        msg.innerText= `You Win . Your ${userChoice} beats ${comChoice}`
        userScore++;
        uScore.innerText=userScore
        msg.style.backgroundColor = "green"
    }
    else{
        console.log("computer win")
        msg.innerText =`You Lost. ${comChoice}  beats your ${userChoice}`
        compScore++;
        cScore.innerText =compScore
        msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);

    const comChoice = genCompChoice();
    console.log("computer choice =", comChoice);

    if(userChoice === comChoice){
        //draw
        DrawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false :true;
        }
        else if(userChoice === "paper"){
            //rock scissor
            userWin= comChoice=== "rock" ?false : true;
        }
        else{
            userWin = comChoice ==="rock" ?false :true;
        }

        showWinner(userWin, userChoice , comChoice);
    }
}