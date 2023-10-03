setInterval(function () {
    if (gameStarted()) {
        for (let i = 0; i < ships.length; i++) {
            let shipID = ships[i].getId();
            let newTopPX = $(shipID).css("top");
            let newTop = parseInt(newTopPX, 10);
            if (newTop >= heightAsNumber) {
                redAlarm(shipID);
            } else {
                newTop++;
                $(shipID).css("top", newTop + 'px');
            }
        }
    }
}, 50);/*child ship speed change*/

function redAlarm(shipID) {
    $(shipID).remove();
    for (let i = 0; i < ships.length; i++) {
        if (ships[i].getId() === shipID) {
            ships.splice(i, 1);
        }
    }
    missionFail();
    setTimeout(function () {
        $("#level-one").css('height', '99vh');
        $("#level-one").css('boxShadow', '0px 5px 13px 6px red');
    }, 100);
    setTimeout(function () {
        $("#level-one").css('height', '100vh');
        $("#level-one").css('boxShadow', 'none');
    }, 500);
}

function refreshChildShipPositions(level, oldLevel) {
    document.getElementById("selected-ship").style.left = parseInt($("#level-one").css("width"), 10) / 2 - 50 + 'px';
    document.getElementById("selected-ship").style.bottom = '0px';
    document.getElementById("level-one").style.overflow = 'hidden';
    document.getElementById("level-one").style.position = 'relative';
    document.getElementById("level-one").style.overflow = 'hidden';
    document.getElementById("level-one").style.height = '100vh';
    bottomDisplay = 0;

    //set to left position for bullets and move
    leftDisplay = parseInt(viewPortWidth, 10) / 2 - 50;
    let shipRemoveCount;
    if (oldLevel) {
        //Get the number of ships to remove to replay or go back and replay the current level
        shipRemoveCount = ships.length;
    } else {
        //Get number of ships to clear level ships before moving to new level
        shipRemoveCount = ships.length - 5;
    }

    //Remove all available ships in the game
    for (let i = 1; i <= shipRemoveCount; i++) {
        $("#child-ship" + i).remove();
    }

    //Create ships for that current level using the ships array length
    for (let i = 1; i <= ships.length; i++) {
        let ship = document.createElement('img');
        ship.setAttribute("src", 'assets/images/child-ship.png');
        ship.id = "child-ship" + i;

        //This switch is used to select ship positions arrays using level
        switch (level) {
            case 1:
                ship.style.top = levelOneShipTopPositions[i - 1];
                ship.style.left = levelOneShipLeftPositions[i - 1];
                break;
            case 2:
                ship.style.top = levelTwoShipTopPositions[i - 1];
                ship.style.left = levelTwoShipLeftPositions[i - 1];
                break;
            case 3:
                ship.style.top = levelThreeShipTopPositions[i - 1];
                ship.style.left = levelThreeShipLeftPositions[i - 1];
                console.log(levelThreeShipLeftPositions[i - 1])
                break;
            case 4:

                break;
        }
        ship.style.width = '100px';
        ship.style.height = '100px';
        ship.style.position = 'absolute';
        ship.style.zIndex = '1';
        document.body.appendChild(ship);
    }
}