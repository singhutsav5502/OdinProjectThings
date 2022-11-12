let humanCode = 0;
let MachineCode = 0;
function getInput(){
    let x = prompt("Enter your Choice: ").toLowerCase();
    if(x == "rock"){
        humanCode = 0;
    }
    else if(x=="paper"){
        humanCode = -1;
    }
    else{
        humanCode=1;
    }
}
function MachineInput(){
    MachineCode= Math.floor(Math.random()*3)-1;
    // Rock is -1 , Scissors is 0 , Paper is 1 for the Machine
}
function Round(){
    getInput();
    MachineInput();
    console.log(`Human played ${y} , Machine played ${MachineCode}`);
    if (humanCode -1 == MachineCode){
        console.log("tie, round repeat");
        Round();
    }
    else if( humanCode == -1 && MachineCode == 1){
        console.log("tie, round repeat");
        Round();
    }
    else if(humanCode == MachineCode){
        console.log("Human Wins");

    }
    else{
        console.log("Machine Wins");
    }
}

function game(){
    for(let i =0;i<5 ;i++){
        console.log(`This is round number ${i+1}`);
        Round();
    }
}
game()