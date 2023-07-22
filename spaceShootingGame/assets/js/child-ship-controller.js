setInterval(function () {
    if (gameStarted()){
        for (let i = 1; i <= 10; i++) {
            let newTopPX = $("#child-ship" + i).css("top");
            let newTop = parseInt(newTopPX, 10);
            newTop++;
            $("#child-ship" + i).css("top", newTop + 'px');
        }
    }
}, 50);/*child ship speed change*/