
let humanCode = 0;
let MachineCode = 0;
let humanCounter = 0;
let MachineCounter = 0;
function MachineInput(){
    MachineCode= Math.floor(Math.random()*3)-1;
    // Rock is -1 , Scissors is 0 , Paper is 1 for the Machine
}
function Update(){

    if(humanCounter == 5){
        document.getElementById("message").innerHTML = "Human Won!";
        humanCounter = 0;
        MachineCounter = 0;
    }
    else if(MachineCounter ==5){
        document.getElementById("message").innerHTML = "Machine Won!";
        humanCounter = 0;
        MachineCounter = 0;
    }
    else{
        document.getElementById("message").innerHTML = `Human: ${humanCounter} vs Machine: ${MachineCounter}`
    }

}
function Round(){
    MachineInput();
    if (humanCode -1 == MachineCode){
        document.getElementById("message").innerHTML = "tie,round repeat";
    }
    else if( humanCode == -1 && MachineCode == 1){
        document.getElementById("message").innerHTML = "tie,round repeat";
    }
    else if(humanCode == MachineCode){
        humanCounter += 1;
        Update();
    }
    else{
        MachineCounter += 1;
        Update();
    }
}
function getInput(x){
    humanCode=x;
    Round();
}