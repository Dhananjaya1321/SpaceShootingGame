function missionPass() {
    document.getElementById("status").style.display = "flex";
    document.getElementById("mission-fail").style.display = "none";
    document.getElementById("mission-pass").style.display = "flex";
}

function calculateScore(level) {
    switch (level){
        //10 points were added for blowing up one plane and Deduct 2 points per bullet
        case 1:
            //the first level has 10 planes
            let score=100-countIds*2;
            if (score>60){
                $("#score").text(score);
                $("#level-number").text(level + 1);
                return true;
            }else {
                return false;
            }
    }
}

$("#continue-btn").click(function () {
    document.getElementById("status").style.display = "none";
    document.getElementById("mission-fail").style.display = "none";
    document.getElementById("mission-pass").style.display = "none";

    refreshChildShipPositions();
    createChildObjects(20);//create 20 ship objects for level 2
    removeBullets();
})

function removeBullets() {
    for (let i = 1; i <=countIds; i++) {
        $("#bullet"+i).remove();
    }
    countIds=0;
    clickCount=0;
}//this method use to remove all bullets