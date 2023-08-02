setInterval(function () {
    if (gameStarted()){
        for (let i = 1; i <= 10; i++) {
            let newTopPX = $("#child-ship" + i).css("top");
            let newTop = parseInt(newTopPX, 10);
            if (newTop>=heightAsNumber){
                redAlarm("#child-ship" + i);
            }else {
                newTop++;
                $("#child-ship" + i).css("top", newTop + 'px');
            }

        }
    }
}, 50);/*child ship speed change*/

function redAlarm(shipID) {
    $(shipID).remove();
    setTimeout(function () {
        $("#level-one").css('height','99vh');
        $("#level-one").css('boxShadow','0px 5px 13px 6px red');
    },100);
    setTimeout(function () {
        $("#level-one").css('height','100vh');
        $("#level-one").css('boxShadow','none');
    },500);

}