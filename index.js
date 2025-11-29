let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userscorecard = document.querySelector('#user-score');
const compscorecard = document.querySelector('#comp-score');



const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const  randindx = Math.floor(Math.random()*3);
    return options[randindx];
}

const drawgame = () =>{
    msg.innerText = "The game is a Draw Play Again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorecard.innerText = userscore;
        console.log("You Win!");
        msg.innerText = `You Win!. Your ${userchoice} Beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorecard.innerText = compscore;
        console.log("You Loose!");
        msg.innerText = "You Loose! " + `${compchoice} Beats Yours ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice)=>{
    console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice === compchoice){
        drawgame();
    } else{
        let userwin = true;
        if(userchoice === "rock"){
            if(compchoice === "paper"){
                userwin = false;
            } else{
                userwin = true;
            }
        
        } else if(userchoice === "paper"){
            if(compchoice === "scissors"){
                userwin = false;
            }else{
                userwin = true;
            }
        } else{
            if(compchoice === "rock"){
                userwin = false;
            }else{
                userwin = true;
            }
        }
        showWinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("choice clicked",userchoice);
        playgame(userchoice);
    })
})
