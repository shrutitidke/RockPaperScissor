let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    let  options=["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const draw=()=>{
    // console.log("game was draw");
    msg.innerText= "Game was Draw. Play again";
    msg.style.backgroundColor="darkslateblue";
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText= userScore;
    //   console.log("you win");
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText= compScore;
        // console.log("you lose.");
        msg.innerText =`You lose. ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    // generate computer choice
    const compChoice =genCompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice === compChoice )
    {
        draw();
    }
    else{
        let userwin="true";
        if(userChoice=== rock){
            // paper,scissor
           userwin = compChoice==="scissor" ? true : false;
        }
        else if(userChoice==paper){
            // rock,scissor
            userwin= compChoice==="rock" ? true : false;
        }
        else{
            // rock,paper
            userwin= compChoice ==="paper"? true : false;
        }
        showWinner(userwin,userChoice,compChoice);

}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playgame(userChoice);
    })
})