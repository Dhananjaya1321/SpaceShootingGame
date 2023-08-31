function missionPass() {
    $("#level-number").text(Number($("#level-number").text()) + 1);


    document.getElementById("status").style.display = "flex";
    document.getElementById("mission-fail").style.display = "none";
    document.getElementById("mission-pass").style.display = "flex";
}
