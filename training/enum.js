var Directions;
(function (Directions) {
    Directions["Up"] = "UP";
    Directions["Right"] = "RIGHT";
    Directions["Down"] = "DOWN";
    Directions["Left"] = "LEFT";
})(Directions || (Directions = {}));
var TimingFunc;
(function (TimingFunc) {
    TimingFunc["EASE"] = "ease";
    TimingFunc["EASE_IN"] = "ease-in";
    TimingFunc["LINEAR"] = "linear";
})(TimingFunc || (TimingFunc = {}));
function frame(elem, dir, tFunc) {
    if (dir === Directions.Up) {
        console.log('Move up!');
        console.log(tFunc);
    }
    else if (dir === Directions.Down) {
        console.log('Move down!');
        console.log(tFunc);
    }
}
frame("id", Directions.Up, TimingFunc.EASE);
frame("id", Directions.Down, TimingFunc.LINEAR);
