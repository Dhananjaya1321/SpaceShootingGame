let levelOneShips;
function createChildObjects() {
    levelOneShips = [];
    for (let i = 1; i <= 10; i++) {
        let ship = new ChildShip();
        ship.setStatus(1);
        ship.setId("#child-ship" + i);
        levelOneShips.push(ship);
    }
    console.log(levelOneShips[2].getId())
}
