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