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
let countIds = 0;
$(window).click(function (e) {
    if (gameStarted()){
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

        viewPortHeight = $("#level-one").css("height");
        heightAsNumber = parseInt(viewPortHeight, 10);
        let newBullet, verifyCallBulletFunction = 0;
        for (let i = 1; i <= 10; i++) {
            let childShipLeftPosition = parseInt($('#child-ship' + i).css('left'), 10);
            let bulletLeftPosition = leftDisplay + 47;
            // console.log(childShipLeftPosition <= bulletLeftPosition && childShipLeftPosition + 100 >= bulletLeftPosition);
            if (childShipLeftPosition <= bulletLeftPosition && childShipLeftPosition + 100 >= bulletLeftPosition) {
                let childShipTopPosition = parseInt($("#child-ship" + i).css('top'), 10) + 100;/*50*/
                newBullet = new bullet('#bullet' + countIds, heightAsNumber - childShipTopPosition, "#child-ship" + i);
                verifyCallBulletFunction = -1;
                break;
            }
            // console.log(verifyCallBulletFunction===0, i===10)
            if (verifyCallBulletFunction === 0 && i === 10) {
                newBullet = new bullet('#bullet' + countIds, heightAsNumber);
            }
        }
        document.body.appendChild(divElement);
    }
});

function bullet(bulletID, maxHeightWantToGo, childShipId) {
    let y = bottomDisplay + 50;
    const intervalID = setInterval(function (){
        if (y >= maxHeightWantToGo) {
            clearInterval(intervalID);
            $(bulletID).remove();

            childShipRemover(childShipId);
            console.log(childShipId);
        } else {
            y++;
            $(bulletID).css('bottom',y + 'px');
        }
    },1);
}
function childShipRemover(childShipId) {
    $(childShipId).attr('src','assets/images/gif/boomb.gif');
    setTimeout(function () {
        $(childShipId).remove();
    },2500);
}