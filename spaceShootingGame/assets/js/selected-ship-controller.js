
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

$(window).click(function (e) {
    const divElement = document.createElement('div');

    divElement.id = 'myDiv';
    divElement.className = 'my-class';
    divElement.style.backgroundColor = '#00a9ff';
    divElement.style.width = '6px';
    divElement.style.height = '20px';
    divElement.style.margin = '0';
    divElement.style.borderRadius = '50px';
    divElement.style.position = 'absolute';
    divElement.style.bottom = bottomDisplay + 50 + 'px';
    divElement.style.left = leftDisplay + 47 + 'px';
    divElement.style.boxShadow = '0px 6px 9px 4px #2196F3';

    const intervalID = setInterval(fair, 1);
    let y = bottomDisplay + 50;

    viewPortHeight = $("#player").css("height");
    heightAsNumber = parseInt(viewPortHeight, 10);

    function fair() {
        if (y >= heightAsNumber) {
            clearInterval(intervalID);
            divElement.remove();
        }else {
            y++;
            divElement.style.bottom = y + 'px';
        }
    }
    document.body.appendChild(divElement);
});
