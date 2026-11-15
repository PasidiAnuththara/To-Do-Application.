let targetNumber = Math.floor(Math.random() * 10) + 1;
console.log("Target Number : ", targetNumber);

let attempt = 3;

const numberArray = [];

let roundtime = 0;

let isGameOver = false;

function guessnumber() {

    if(isGameOver){
        alert("Game Over ! Please click the Reset (↺) button to play again.");
        return;
    }

    let userInput = Number(document.getElementById("txtnumber").value);
    
    if(!userInput || userInput < 1 || userInput > 10){
        alert("Please enter a valid number between 1 and 10 . ");
        return;
    }
    console.log("User Input : ", userInput);
    
    numberArray.push(userInput);

    console.log("Array (numberArray) : ",numberArray);

    roundtime++;
    
    updateHistoryUI();
    

    if (userInput === targetNumber) {
        alert("Congratulations! It is the correct number.");
        console.log("Congratulation.It is the correct Number. ");
        
        isGameOver=true;
        return;

    } else if (userInput > targetNumber) {
        console.log("High");
    } else if (userInput < targetNumber) {
        console.log("Low");
    }

    attempt--;

    if (attempt > 0) {
        alert(`Wrong !.You have only ${attempt} attempts left.`);
    } else {
        alert(`Game Over!No Attempts left .The correct number was :${targetNumber}`);
        isGameOver=true;
    }

    document.getElementById("txtnumber").value = "";
}

function updateHistoryUI(){
    let historyList = document.getElementById("historyList");

    if(historyList){
        historyList.innerHTML = "";

        for(let i=0 ; i<numberArray.length; i++){
            let li=document.createElement("li");
            let guessnumberVal = numberArray[i];

            li.innerHTML=`Round ${i + 1}: &nbsp;&nbsp;<strong>${guessnumberVal}</strong>`; 
            historyList.appendChild(li);
        }
    }
}

// let clearButton = document.getElementById("btntryagain");
// if(clearButton) {
//     clearButton.addEventListener(`click`,()=>{
//         location.reload();
//     });
// }
function btntryagain() {
    targetNumber=Math.floor(Math.random() * 10) + 1;
    console.log("New Target Number :",targetNumber);

    attempt=3;
    numberArray.length=0;
    roundtime=0;
    isGameOver=false;

    updateHistoryUI();
    document.getElementById("txtnumber").value="";
    alert("Game Reset! Start your new guess..");
    
}