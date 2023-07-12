let bottomDisplay = 0, leftDisplay = 0;
let heightAsNumber, widthAsNumber;
let viewPortWidth, viewPortHeight;
$(window).keydown(function (e) {
    viewPortWidth = $("#player").css("width");
    viewPortHeight = $("#player").css("height");
    heightAsNumber = parseInt(viewPortHeight, 10);
    widthAsNumber = parseInt(viewPortWidth, 10);
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
});
let countIds = 0;
$(window).click(function (e) {
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

    viewPortHeight = $("#player").css("height");
    heightAsNumber = parseInt(viewPortHeight, 10);
    let newBullet,verifyCallBulletFunction=0;
    for (let i = 1; i <= 10; i++) {
        let childShipLeftPosition = parseInt($('#child-ship' + i).css('left'), 10);
        let bulletLeftPosition = leftDisplay + 47;
        // console.log(childShipLeftPosition <= bulletLeftPosition && childShipLeftPosition + 100 >= bulletLeftPosition);
        if (childShipLeftPosition <= bulletLeftPosition && childShipLeftPosition + 100 >= bulletLeftPosition) {
            let childShipTopPosition = parseInt($("#child-ship" + i).css('top'), 10) + 50;/*50*/
            newBullet=new bullet('#bullet' + countIds,heightAsNumber - childShipTopPosition);
            verifyCallBulletFunction=-1;
        }
        // console.log(verifyCallBulletFunction===0, i===10)
        if (verifyCallBulletFunction===0 && i===10){
            newBullet=new bullet('#bullet' + countIds,heightAsNumber);
        }
    }
    document.body.appendChild(divElement);
});

function bullet(bulletID, maxHeightWantToGo) {
    let y = bottomDisplay + 50;
    const intervalID = setInterval(function (){
        if (y >= maxHeightWantToGo) {
            clearInterval(intervalID);
            $(bulletID).remove();
        } else {
            y++;
            $(bulletID).css('bottom',y + 'px');
        }
    },1);
}