function gamerun() {
  init();
}

function step(){
  update();
  draw();
    var gameLength = replays.length-1;
    replays[gameLength].food.push(food);
    replays[gameLength].snake.push(snake.slice());
    replays[gameLength].size.push(size);
    replays[gameLength].direction.push(direction);
    replays[gameLength].isBonus.push(isBonus);
    console.log(replays[gameLength]);   
}

function update() {
  if (!movesnake()) {
    alert("you are dead. size: " + size);
    die();
  }
}

function draw() {
  screenclear();
  drawsnake();
  drawfood();
}