let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg");
const userscr=document.querySelector("#user-score");
const compscr=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const showWinner= (userWin)=>{
    if(userWin){
        console.log("You win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
        userScore++;
        userscr.innerText=userScore;
    }
    else{
        console.log("You lose");
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    
        compScore++;
        compscr.innerText=compScore;
        
    }

};

const genCompChoice =() =>{
    const options=["rock", "paper","scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
};

const playGame=(userchoice) =>{
    console.log("user choice= ", userchoice);
    //generating computer choice;
    const CompChoice=genCompChoice();
    console.log("comp choice",CompChoice);

    if(userchoice=== CompChoice){
        console.log("It's a draw");
        msg.innerText="It's a draw"
        msg.style.backgroundColor="rgb(2, 4, 32)";
    }
    else{
        let userWin= true;
        if(userchoice==="rock"){
            userWin= CompChoice==="paper"? false : true;
        }
        else if(userchoice==="paper"){
            userWin=CompChoice==="scissors"?false : true;
        }
        else{
            userWin=CompChoice ==="rock"? false :true;
        }
        showWinner(userWin);
    }
    
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
        // console.log("choice was clicked", userchoice);
    });
})