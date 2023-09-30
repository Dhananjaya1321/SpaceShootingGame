let bottomDisplay = 0, leftDisplay = parseInt($("#level-one").css("width"), 10)/2-42;
let heightAsNumber, widthAsNumber;
let viewPortWidth, viewPortHeight;
$(window).keydown(function (e) {
    viewPortWidth = $("#level-one").css("width");
    viewPortHeight = $("#level-one").css("height");
    heightAsNumber = parseInt(viewPortHeight, 10);
    widthAsNumber = parseInt(viewPortWidth, 10);
    if (gameStarted()){
        if (e.key === "ArrowUp" || e.key === "w") {
            if (heightAsNumber - 100 > bottomDisplay) {
                bottomDisplay = bottomDisplay + 1;
                $("#selected-ship").css("bottom", bottomDisplay + "px");
            }
        } else if (e.key === "ArrowLeft" || e.key === "a") {
            if (0 < leftDisplay) {
                leftDisplay = leftDisplay - 2;
                $("#selected-ship").css("left", leftDisplay + "px");
            }
        } else if (e.key === "ArrowDown" || e.key === "s") {
            if (0 < bottomDisplay) {
                bottomDisplay = bottomDisplay - 1;
                $("#selected-ship").css("bottom", bottomDisplay + "px");
            }
        } else if (e.key === "ArrowRight" || e.key === "d") {
            if (widthAsNumber - 100 > leftDisplay) {
                leftDisplay = leftDisplay + 2;
                $("#selected-ship").css("left", leftDisplay + "px");
            }
        }
    }
});



let countIds = 0,clickCount=0;
$(window).click(function (e) {
    clickCount++;
    if (gameStarted() && clickCount>1){

        let divElement=createBullet();
        moveBullet();
        document.body.appendChild(divElement);

    }
});

function createBullet() {
    const divElement = document.createElement('div');
    countIds++;
    divElement.id = 'bullet' + countIds;
    divElement.className = 'bullets';
    divElement.style.backgroundColor = '#00a9ff';
    divElement.style.width = '6px';
    divElement.style.height = '20px';
    divElement.style.margin = '0';
    divElement.style.borderRadius = '50px';
    divElement.style.position = 'absolute';
    divElement.style.bottom = bottomDisplay + 50 + 'px';
    divElement.style.left = leftDisplay + 47 + 'px';
    divElement.style.boxShadow = '0px 6px 9px 4px #2196F3';
    return divElement;
}

function moveBullet() {
    viewPortHeight = $("#level-one").css("height");
    heightAsNumber = parseInt(viewPortHeight, 10);
    let newBullet, verifyCallBulletFunction = 0;
    for (let i = 0; i < ships.length; i++) {
        let shipID=ships[i].getId();
        let childShipLeftPosition = parseInt($(shipID).css('left'), 10);
        let bulletLeftPosition = leftDisplay + 47;
        if (childShipLeftPosition <= bulletLeftPosition && childShipLeftPosition + 100 >= bulletLeftPosition) {
            let childShipTopPosition = parseInt($(shipID).css('top'), 10) + 100;/*50*/
            newBullet = new checkBulletDistance('#bullet' + countIds, heightAsNumber - childShipTopPosition, shipID);
            verifyCallBulletFunction = -1;
            break;
        }
        if (verifyCallBulletFunction === 0 && i === ships.length-1/*10 parak loop weddi hirawena nisa*/) {
            newBullet = new checkBulletDistance('#bullet' + countIds, heightAsNumber);
        }
    }
}

function checkBulletDistance(bulletID, maxHeightWantToGo, childShipId) {
    let y = bottomDisplay + 50;//current position of bullet
    let checkSpace=maxHeightWantToGo-bottomDisplay;//get the space between child-ships and selected-ship
    const intervalID = setInterval(function (){
        if (y >= maxHeightWantToGo && checkSpace>75) {
            clearInterval(intervalID);
            $(bulletID).remove();
            childShipRemover(childShipId);
        } else {
            y++;
            $(bulletID).css('bottom',y + 'px');
        }
    },1);
}

function childShipRemover(childShipId) {
    $(childShipId).attr('src','assets/images/gif/boomb.gif');
    setTimeout(function () {
        for (let i = 0; i <ships.length; i++) {
            if (ships[i].getId()===childShipId) {
                ships.splice(i, 1);
            }
        }
        $(childShipId).remove();
        console.log(ships.length);
        if (ships.length===0){
            if (calculateScore(Number($("#level-number").text()))){
                missionPass();//mission pass go next level
            }else {
                $("#score").text(0);
                $("#level-number").text(Number($("#level-number").text()) - 1);
                missionFail();
            }
        }
    },2500);
}