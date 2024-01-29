let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("Game was Draw!");
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}
const playGames=(userChoice)=>{
    // console.log("user choice:",userChoice);
    const compChoice=genCompChoice();
    // console.log("Comp Choice:",compChoice);
    
    if(userChoice===compChoice){
        drawGame();
        msg.innerText="Game was draw.Play Again!";
        msg.style.backgroundColor="#081b31";
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="scissors"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGames(userChoice);
    });
});